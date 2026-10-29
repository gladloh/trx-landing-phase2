/*
 * animations.js — Page-load sequence & modal transitions
 */

const Animations = (() => {

  function initPageLoad() {
    gsap.registerPlugin(SplitText);

    const splash = document.getElementById('splash');
    const splashLogo = splash.querySelector('.splash__logo');
    const pageLogo = document.querySelector('[data-animate="logo"]');

    // Hero is already in position behind the splash — no yPercent offset needed

    // SplitText — word mask reveal for headlines
    const split = SplitText.create(".headline__line", {
      type: "words",
      mask: "words",
      autoSplit: true,
    });

    // Hide the "." in "of." — it's only there to widen the mask for Safari clipping
    split.words.forEach(w => {
      if (w.textContent.trim() === 'of.') {
        w.textContent = 'of';
        w.classList.add('headline__word-of');
      }
    });

    // Reparent splash logo to body so it's independent of splash clipping
    const splashLogoRect = splashLogo.getBoundingClientRect();
    document.body.appendChild(splashLogo);
    gsap.set(splashLogo, {
      position: 'fixed',
      left: splashLogoRect.left,
      top: splashLogoRect.top,
      width: splashLogoRect.width,
      zIndex: 51,
      margin: 0,
    });

    // Calculate where the splash logo needs to slide to (page logo position)
    const logoRect = pageLogo.getBoundingClientRect();
    const deltaY = logoRect.top - splashLogoRect.top;

    const tl = gsap.timeline();

    // Phase 1 — Brief hold on splash
    tl.to(splash, { duration: 0.3 });

    // Phase 2 — Mask reveal: splash slides up, logo slides to position
    tl.to(splash, {
      clipPath: 'inset(0% 0% 100% 0%)',
      duration: 1.2,
      ease: 'power3.out',
    });

    tl.to(splashLogo, {
      y: deltaY,
      duration: 1.7,
      ease: 'power3.out',
    }, '<');

    // Phase 3 — Swap back to page logo (responds to layout on resize)
    tl.set(splash, { display: 'none' });
    tl.call(() => {
      splashLogo.remove();
      pageLogo.style.opacity = '1';
    });

    // ── Everything unfolds from the headline moment ──
    gsap.set(".headline__line", { opacity: 1 });

    // Bottom bar text — prep SplitText before timeline
    const barSplit = SplitText.create(".bottom-bar__label, .bottom-bar__text-title, .bottom-bar__text-body", {
      type: "words",
      mask: "words",
      autoSplit: true,
    });
    gsap.set(".bottom-bar__label, .bottom-bar__text-title, .bottom-bar__text-body", { opacity: 1 });

    // Anchor label — all content radiates from here
    tl.addLabel('reveal', '-=0.3');

    // Headline words (center — the hero moment)
    tl.from(split.words, {
      yPercent: 100,
      duration: 0.8,
      stagger: 0.06,
      ease: "expo.out",
    }, 'reveal');

    // Phase 2 tag (just below logo — fades in with headline)
    tl.to('.logo__phase-btn', {
      opacity: 1,
      duration: 1.2,
      ease: 'power1.inOut',
    }, 'reveal');

    // Divider line stretches from center
    tl.from('.bottom-bar__line', {
      scaleX: 0,
      duration: 1.2,
      ease: "expo.out",
    }, 'reveal');

    // Bottom bar text reveals
    tl.from(barSplit.words, {
      yPercent: 100,
      duration: 0.6,
      stagger: 0.04,
      ease: "expo.out",
    }, 'reveal+=0.15');

    // CTA button
    tl.to('.bottom-bar__cta', {
      opacity: 1,
      duration: 0.8,
      ease: 'power2.out',
    }, 'reveal+=0.6');

    // Footer background
    tl.fromTo('.footer',
      { opacity: 0 },
      { opacity: 1, duration: 0.8, ease: 'power2.out' },
      'reveal+=0.2'
    );

    // Footer items stagger in
    tl.fromTo('.footer__brand-logo',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' },
      'reveal+=0.35'
    );

    tl.fromTo('.footer__link',
      { opacity: 0, y: 15 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
      'reveal+=0.45'
    );

    tl.fromTo('.footer__social-link',
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power2.out' },
      'reveal+=0.55'
    );

    // Start feature rotation after everything settles
    tl.call(() => startFeatureRotation());
  }

  function startFeatureRotation() {
    const features = CONTENT.features;
    if (features.length <= 1) return;

    let current = 0;
    const titleEl = document.getElementById('bar-feature-title');
    const bodyEl = document.getElementById('bar-feature-body');
    let activeSplit = null;

    setInterval(() => {
      const next = (current + 1) % features.length;
      const feature = features[next];

      // Re-split current words for exit animation
      if (activeSplit) activeSplit.revert();
      activeSplit = SplitText.create([titleEl, bodyEl], {
        type: "words",
        mask: "words",
      });

      // Word-by-word unreveal (slide down out)
      gsap.to(activeSplit.words, {
        yPercent: 100,
        duration: 0.4,
        stagger: 0.03,
        ease: "expo.in",
        onComplete() {
          activeSplit.revert();

          // Update content
          titleEl.textContent = feature.number + ' ' + feature.title;
          bodyEl.textContent = feature.body;

          // Re-split new words for enter animation
          activeSplit = SplitText.create([titleEl, bodyEl], {
            type: "words",
            mask: "words",
          });

          // Word-by-word reveal (slide up in)
          gsap.from(activeSplit.words, {
            yPercent: 100,
            duration: 0.5,
            stagger: 0.03,
            ease: "expo.out",
          });
        },
      });

      current = next;
    }, 5000);
  }

  function openModal(modal) {
    gsap.set(modal, { clearProps: "transform,xPercent,yPercent,x,y,scale" });
    gsap.fromTo(modal,
      { xPercent: -50, yPercent: 50, scale: 0.8 },
      { xPercent: -50, yPercent: -50, scale: 1, duration: 0.5, ease: 'power2.out' }
    );
  }

  function closeModal(modal, onComplete) {
    gsap.to(modal, {
      xPercent: -50, yPercent: 50, scale: 0.8,
      duration: 0.4, ease: 'power2.in', onComplete
    });
  }

  function formToSuccess(formEl, successEl) {
    const tl = gsap.timeline();

    // Form fades up and out — visibility (not display) so it keeps
    // contributing height to .modal__inner.
    tl.to(formEl, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in',
      onComplete() {
        formEl.style.visibility = 'hidden';
      },
    });

    // Show success container
    tl.call(() => {
      successEl.classList.add('is-visible');
    });

    // Header fades up and in
    const header = successEl.querySelector('.success-message__header');
    const text = successEl.querySelector('.success-message__text');

    tl.fromTo(header,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
    );

    // Text fades up and in
    tl.fromTo(text,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      '-=0.3',
    );
  }

  function formToPolicy(formEl, policyEl) {
    const backBtn = document.getElementById('policy-back');
    const tl = gsap.timeline();

    // Form fades up and out — visibility (not display) so it keeps
    // contributing height to .modal__inner.
    tl.to(formEl, {
      opacity: 0,
      y: -30,
      duration: 0.4,
      ease: 'power2.in',
      onComplete() {
        formEl.style.visibility = 'hidden';
        const modalInner = formEl.closest('.modal__inner');
        if (modalInner) modalInner.scrollTop = 0;
      },
    });

    // Show policy container and back button
    tl.call(() => {
      policyEl.classList.add('is-visible');
      backBtn.style.display = '';
    });

    // Policy header + body fade up and in
    const header = policyEl.querySelector('.modal__policy-header');
    const divider = policyEl.querySelector('.modal__policy-divider');
    const body = policyEl.querySelector('.modal__policy-body');

    tl.fromTo(backBtn,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' },
    );

    tl.fromTo(header,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.2',
    );

    tl.fromTo(divider,
      { opacity: 0 },
      { opacity: 1, duration: 0.3, ease: 'power2.out' },
      '-=0.2',
    );

    tl.fromTo(body,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.4, ease: 'power2.out' },
      '-=0.2',
    );
  }

  function policyToForm(policyEl, formEl) {
    const backBtn = document.getElementById('policy-back');
    const tl = gsap.timeline();

    // Back button fades out (no y movement)
    tl.to(backBtn, {
      opacity: 0,
      duration: 0.3,
      ease: 'power2.in',
      onComplete() {
        backBtn.style.display = 'none';
        gsap.set(backBtn, { opacity: 1 });
      },
    });

    // Policy content fades out
    tl.to(policyEl, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      ease: 'power2.in',
      onComplete() {
        policyEl.classList.remove('is-visible');
        gsap.set(policyEl, { opacity: 1, y: 0 });
      },
    }, '<');

    // Show form and fade it in
    tl.call(() => {
      formEl.style.visibility = '';
      gsap.set(formEl, { opacity: 0, y: 20 });
    });

    tl.to(formEl, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      ease: 'power2.out',
    });
  }

  function init() {
    initPageLoad();
  }

  return { init, openModal, closeModal, formToSuccess, formToPolicy, policyToForm };
})();
