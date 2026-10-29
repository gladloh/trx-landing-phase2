const Modal = (() => {
  const modal    = document.getElementById('modal');
  const backdrop = document.getElementById('backdrop');
  const closeBtn = document.getElementById('modal-close');
  const isMobile = () => window.innerWidth < 1024;

  let dismissTimer = null;

  function open() {
    modal.classList.add('is-open');
    backdrop.classList.add('is-visible');
    document.body.style.overflow = 'hidden';
    Animations.openModal(modal);
  }

  function close() {
    clearDismissTimer();
    backdrop.classList.remove('is-visible');
    document.body.style.overflow = '';

    Animations.closeModal(modal, () => {
      modal.classList.remove('is-open');
      Form.reset();
    });
  }

  function startDismissTimer() {
    clearDismissTimer();
    dismissTimer = setTimeout(() => {
      close();
    }, 5000);
  }

  function clearDismissTimer() {
    if (dismissTimer) {
      clearTimeout(dismissTimer);
      dismissTimer = null;
    }
  }

  function init() {
    // CTA buttons open modal
    document.querySelectorAll('[data-modal-open]').forEach(btn => {
      btn.addEventListener('click', open);
    });

    // Close button
    closeBtn.addEventListener('click', close);

    // Backdrop click closes modal
    backdrop.addEventListener('click', close);

    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') close();
    });
  }

  return { init, open, close, startDismissTimer };
})();
