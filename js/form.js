const Form = (() => {
  const form        = document.getElementById('registration-form');
  const submitBtn   = document.getElementById('form-submit');
  const apiError    = document.getElementById('form-api-error');
  const formContent = document.getElementById('form-content');
  const successMsg  = document.getElementById('success-message');
  const errorMsg    = document.getElementById('error-message');

  const BOTPOISON_PUBLIC_KEY = 'pk_389d5794-ceb3-4477-9445-df778acfd9ff';
  let botpoison; // lazy — constructed on first submit so it doesn't compete with intro animations

  let iti; // intl-tel-input instance

  // ── Validation rules ────────────────────────────────────────────────────

  const rules = {
    salutation: (v) => v !== '' || 'Please select a salutation.',
    fullName:  (v) => v.trim().length >= 2  || 'Please enter your full name.',
    email:     (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) || 'Please enter a valid email address.',
    phone:     () => iti.isValidNumber() || 'Please enter a valid phone number.',
    nationality: (v) => v !== '' || 'Please select your nationality.',
    unitType:       (v) => v !== '' || 'Please select a preferred unit type.',
    agreePrivacy:   (v) => v === true || 'Please agree to the Privacy Policy.',
    agreeDisclaimer:(v) => v === true || 'Please agree to the Website Disclaimer.',
  };

  function validateField(name, value) {
    const result = rules[name]?.(value);
    return result === true ? null : result;
  }

  function setFieldError(fieldEl, message) {
    fieldEl.classList.add('has-error');
    const errorEl = fieldEl.querySelector('.field__error');
    if (errorEl) errorEl.textContent = message;
  }

  function clearFieldError(fieldEl) {
    fieldEl.classList.remove('has-error');
  }

  // ── State helpers ────────────────────────────────────────────────────────

  function setLoading(isLoading) {
    submitBtn.disabled = isLoading;
    submitBtn.classList.toggle('is-loading', isLoading);
  }

  function hideApiError() {
    apiError.classList.remove('is-visible');
  }

  function reset() {
    form.reset();
    formContent.style.visibility = '';
    gsap.set(formContent, { opacity: 1, y: 0 });
    successMsg.classList.remove('is-visible');
    errorMsg.classList.remove('is-visible');
    // Hide policy view and back button if open
    const policyView = document.getElementById('policy-view');
    if (policyView) {
      policyView.classList.remove('is-visible');
      gsap.set(policyView, { opacity: 1, y: 0 });
    }
    const backBtn = document.getElementById('policy-back');
    if (backBtn) {
      backBtn.style.display = 'none';
      gsap.set(backBtn, { opacity: 1 });
    }
    hideApiError();
    setLoading(false);
    form.querySelectorAll('.field').forEach(f => f.classList.remove('has-error', 'has-value'));
    form.querySelectorAll('.checkbox').forEach(c => c.classList.remove('has-error'));

    // Reset salutation
    const salutationSelect = document.getElementById('salutation');
    salutationSelect.value = '';
    salutationSelect.closest('.field').classList.remove('has-value', 'has-error');

    // Reset custom dropdown
    const hiddenInput = document.getElementById('unitType');
    const valueEl = document.getElementById('dropdown-value');
    hiddenInput.value = '';
    valueEl.textContent = 'Preferred Unit Type';
    valueEl.classList.add('is-placeholder');
    document.querySelectorAll('#dropdown-menu .dropdown__item').forEach(i => i.classList.remove('is-selected'));

    // Reset nationality dropdown
    const nationalityInput = document.getElementById('nationality');
    const nationalityValueEl = document.getElementById('nationality-value');
    nationalityInput.value = '';
    nationalityValueEl.textContent = CONTENT.formFields.nationality;
    nationalityValueEl.classList.add('is-placeholder');
    document.querySelectorAll('#nationality-list .dropdown__item').forEach(i => i.classList.remove('is-selected'));

    // Reset intl-tel-input
    iti.setNumber('');
    iti.setCountry('my');
  }

  // ── Submit handler ───────────────────────────────────────────────────────

  async function handleSubmit(e) {
    e.preventDefault();
    hideApiError();

    const data = {
      salutation:  form.salutation.value,
      fullName:    form.fullName.value,
      email:       form.email.value,
      phone:       iti.getNumber(),
      nationality: form.nationality.value,
      unitType:    form.unitType.value,
      agreePrivacy:    document.getElementById('agreePrivacy').checked,
      agreeDisclaimer: document.getElementById('agreeDisclaimer').checked,
    };

    // Validate all fields
    let isValid = true;
    ['salutation', 'fullName', 'email', 'phone', 'nationality', 'unitType'].forEach((name) => {
      const fieldEl = form.querySelector(`[data-field="${name}"]`);
      const error   = validateField(name, data[name]);
      if (error) {
        setFieldError(fieldEl, error);
        isValid = false;
      } else {
        clearFieldError(fieldEl);
      }
    });

    // Validate checkboxes
    ['agreePrivacy', 'agreeDisclaimer'].forEach(name => {
      const checkbox = document.getElementById(name);
      const label    = checkbox.closest('[data-field]');
      const error    = validateField(name, checkbox.checked);
      if (error) {
        label.classList.add('has-error');
        isValid = false;
      } else {
        label.classList.remove('has-error');
      }
    });

    // Honeypot check — silently drop
    if (form.querySelector('[name="_honey"]')?.value) return;

    if (!isValid) return;

    setLoading(true);

    try {
      if (!botpoison) botpoison = new window.Botpoison({ publicKey: BOTPOISON_PUBLIC_KEY });
      const { solution } = await botpoison.challenge();

      const res = await fetch(form.action, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...data, _botpoison: solution }),
      });

      if (!res.ok) throw new Error(`Formspark returned ${res.status}`);

      Animations.formToSuccess(formContent, successMsg);
      Modal.startDismissTimer();
    } catch (err) {
      console.error('Form submission failed:', err);
      Animations.formToSuccess(formContent, errorMsg);
    } finally {
      setLoading(false);
    }
  }

  // ── Inline validation on blur ────────────────────────────────────────────

  function initInlineValidation() {
    form.querySelectorAll('.field__input').forEach(input => {
      input.addEventListener('blur', () => {
        const name    = input.name;
        const fieldEl = input.closest('.field');
        const error   = validateField(name, input.value);
        if (error) {
          setFieldError(fieldEl, error);
        } else {
          clearFieldError(fieldEl);
        }
      });
    });
  }

  // ── Custom Dropdown ─────────────────────────────────────────────────────

  function initDropdown(opts) {
    const dropdown    = document.getElementById(opts.dropdownId);
    const trigger     = dropdown.querySelector('.dropdown__trigger');
    const menu        = dropdown.querySelector('.dropdown__menu');
    const valueEl     = document.getElementById(opts.valueId);
    const hiddenInput = document.getElementById(opts.hiddenInputId);
    const fieldEl     = dropdown.closest('.field');
    const searchInput = opts.searchId ? document.getElementById(opts.searchId) : null;

    trigger.addEventListener('click', () => {
      const isOpen = menu.classList.contains('is-open');
      if (isOpen) {
        closeDropdown(trigger, menu);
      } else {
        menu.classList.add('is-open');
        trigger.setAttribute('aria-expanded', 'true');
        if (searchInput) {
          searchInput.value = '';
          filterItems(menu, '');
          setTimeout(() => searchInput.focus(), 0);
        }
      }
    });

    menu.addEventListener('click', (e) => {
      const item = e.target.closest('.dropdown__item');
      if (!item) return;

      const value = item.dataset.value;
      hiddenInput.value = value;
      valueEl.textContent = value;
      valueEl.classList.remove('is-placeholder');
      fieldEl.classList.add('has-value');

      // Update selected state
      menu.querySelectorAll('.dropdown__item').forEach(i => i.classList.remove('is-selected'));
      item.classList.add('is-selected');

      closeDropdown(trigger, menu);
      clearFieldError(fieldEl);
    });

    if (searchInput) {
      searchInput.addEventListener('input', () => {
        filterItems(menu, searchInput.value);
      });
      // Prevent search input click from closing the dropdown
      searchInput.addEventListener('click', (e) => e.stopPropagation());
    }

    // Close on click outside
    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target)) {
        closeDropdown(trigger, menu);
      }
    });
  }

  function filterItems(menu, query) {
    const q = query.trim().toLowerCase();
    menu.querySelectorAll('.dropdown__item').forEach(item => {
      const matches = item.textContent.toLowerCase().includes(q);
      item.style.display = matches ? '' : 'none';
    });
  }

  function closeDropdown(trigger, menu) {
    menu.classList.remove('is-open');
    trigger.setAttribute('aria-expanded', 'false');
  }

  // ── Salutation select ───────────────────────────────────────────────────

  function initSalutation() {
    const select = document.getElementById('salutation');
    const fieldEl = select.closest('.field');

    select.addEventListener('change', () => {
      if (select.value) {
        fieldEl.classList.add('has-value');
        clearFieldError(fieldEl);
      } else {
        fieldEl.classList.remove('has-value');
      }
    });
  }

  // ── intl-tel-input ──────────────────────────────────────────────────────

  function initPhoneInput() {
    const phoneInput = document.getElementById('phone');
    const fieldEl = phoneInput.closest('.field');

    iti = window.intlTelInput(phoneInput, {
      initialCountry: 'my',
      countryOrder: ['my', 'sg', 'id', 'th', 'ph', 'vn', 'hk', 'cn', 'jp', 'kr', 'in', 'ae', 'gb', 'us', 'au'],
      separateDialCode: true,
      useFullscreenPopup: false,
      loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@26.7.6/build/js/utils.js"),
    });

    const itiContainer = fieldEl.querySelector('.iti');

    // Floating label: track focus and value like the old phone field
    phoneInput.addEventListener('focus', () => {
      fieldEl.classList.add('is-focused');
    });

    phoneInput.addEventListener('blur', () => {
      // Delay blur — if user clicked the country selector, don't remove focus
      setTimeout(() => {
        const dropdownOpen = document.querySelector('.iti__dropdown-content');
        if (itiContainer.contains(document.activeElement) || dropdownOpen) {
          return; // Still interacting with country selector
        }
        fieldEl.classList.remove('is-focused');
        if (phoneInput.value.trim()) {
          fieldEl.classList.add('has-value');
        } else {
          fieldEl.classList.remove('has-value');
        }
      }, 150);
    });

    phoneInput.addEventListener('input', () => {
      if (phoneInput.value.trim()) {
        fieldEl.classList.add('has-value');
      } else {
        fieldEl.classList.remove('has-value');
      }
    });

    // When country dropdown closes, re-check focus state
    phoneInput.addEventListener('countrychange', () => {
      setTimeout(() => {
        if (document.activeElement !== phoneInput && !itiContainer.contains(document.activeElement)) {
          fieldEl.classList.remove('is-focused');
          if (phoneInput.value.trim()) {
            fieldEl.classList.add('has-value');
          } else {
            fieldEl.classList.remove('has-value');
          }
        }
      }, 150);
    });
  }

  // ── Init ─────────────────────────────────────────────────────────────────

  function initCheckboxValidation() {
    ['agreePrivacy', 'agreeDisclaimer'].forEach(name => {
      const checkbox = document.getElementById(name);
      checkbox.addEventListener('change', () => {
        const label = checkbox.closest('[data-field]');
        if (checkbox.checked) {
          label.classList.remove('has-error');
              }
      });
    });
  }

  function init() {
    form.addEventListener('submit', handleSubmit);
    initSalutation();
    initInlineValidation();
    initDropdown({ dropdownId: 'dropdown-unitType', valueId: 'dropdown-value', hiddenInputId: 'unitType' });
    initDropdown({ dropdownId: 'dropdown-nationality', valueId: 'nationality-value', hiddenInputId: 'nationality', searchId: 'nationality-search' });
    initPhoneInput();
    initCheckboxValidation();
  }

  return { init, reset };
})();
