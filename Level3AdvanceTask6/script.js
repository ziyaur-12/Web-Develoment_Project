// Form validation logic
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const feedback = document.getElementById('formFeedback');

  if (name === '' || email === '' || message === '') {
    feedback.textContent = 'Please fill in all fields.';
    feedback.style.color = 'red';
    return;
  }

  // Simple email format check
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email address.';
    feedback.style.color = 'red';
    return;
  }

  // Success message
  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = 'green';

  // Optionally clear form
  document.getElementById('contactForm').reset();
});
