function initContactForm(): void {
  const form = document.getElementById('contact-form') as HTMLFormElement | null;
  const submitBtn = document.getElementById('submit-btn') as HTMLButtonElement | null;
  const submitText = document.getElementById('submit-text');
  const submitLoading = document.getElementById('submit-loading');
  const formMessage = document.getElementById('form-message');

  if (!form || !submitBtn) return;

  const successMsg = form.dataset.successMsg ?? 'Message sent successfully!';
  const errorMsg = form.dataset.errorMsg ?? 'Error sending message. Please try again.';

  form.addEventListener('submit', async (e: Event) => {
    e.preventDefault();

    submitBtn.disabled = true;
    submitText?.classList.add('hidden');
    submitLoading?.classList.remove('hidden');
    formMessage?.classList.add('hidden');

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        if (formMessage) {
          formMessage.textContent = successMsg;
          formMessage.className = 'mt-4 text-center text-green-500 font-medium';
          formMessage.classList.remove('hidden');
        }
        form.reset();
      } else {
        throw new Error('Error sending');
      }
    } catch {
      if (formMessage) {
        formMessage.textContent = errorMsg;
        formMessage.className = 'mt-4 text-center text-red-500 font-medium';
        formMessage.classList.remove('hidden');
      }
    } finally {
      submitBtn.disabled = false;
      submitText?.classList.remove('hidden');
      submitLoading?.classList.add('hidden');
    }
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initContactForm);
} else {
  initContactForm();
}
