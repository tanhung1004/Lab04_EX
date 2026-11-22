
/* ==========================================
   M15 - FORM VALIDATION RULES
========================================== */

export function validateForm(formData) {
  const errors = {};

  const username = formData.username.trim();
  const email = formData.email.trim();

  // Username validation
  if (!username) {
    errors.username = "Username is required.";
  } else if (username.length < 3) {
    errors.username = "Username must have at least 3 characters.";
  }

  // Email validation
  if (!email) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  return errors;
}
