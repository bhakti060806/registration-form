// Returns an object of errors. Empty object = form is valid.
export const validate = (v) => {
  const e = {};

  if (!v.name.trim()) e.name = "Name is required";
  else if (v.name.trim().length < 3) e.name = "Name must be at least 3 characters";

  if (!v.email) e.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "Enter a valid email address";

  if (!v.phone) e.phone = "Mobile number is required";
  else if (!/^[6-9]\d{9}$/.test(v.phone)) e.phone = "Enter a valid 10-digit Indian mobile number";

  if (!v.password) e.password = "Password is required";
  else if (!/^(?=.*[A-Z])(?=.*\d).{8,}$/.test(v.password))
    e.password = "Min 8 characters, one uppercase letter and one digit";

  if (!v.confirm) e.confirm = "Please confirm your password";
  else if (v.confirm !== v.password) e.confirm = "Passwords do not match";

  if (!v.terms) e.terms = "You must accept the terms";

  return e;
};
