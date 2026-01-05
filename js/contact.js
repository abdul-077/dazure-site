// Contact Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Validate form
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      
      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData);
      
      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      
      setTimeout(function() {
        // Show success modal
        openModal('success-modal');
        
        // Reset form
        form.reset();
        
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }, 1500);
    });
  }
});

// Close modal function for contact page
function closeModal() {
  const modal = document.querySelector('.modal.open');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}
