import { useState, useEffect } from "react";
import FormField from "./FormField";
import { validate } from "../utils/validators";

const initialValues = {
  name: "",
  email: "",
  phone: "",
  password: "",
  confirm: "",
  terms: false,
};

const fields = [
  { name: "name", label: "Full Name" },
  { name: "email", label: "Email", type: "email" },
  { name: "phone", label: "Mobile Number" },
  { name: "password", label: "Password", type: "password" },
  { name: "confirm", label: "Confirm Password", type: "password" },
  { name: "terms", label: "I accept the terms and conditions", type: "checkbox" },
];

export default function RegistrationForm() {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  // Real-time validation: runs every time any value changes
  useEffect(() => {
    setErrors(validate(values));
  }, [values]);

  // Controlled inputs: React state is the single source of truth
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setValues((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
    setSuccess(false);
  };

  // Mark a field as touched when the user leaves it
  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const isValid = Object.keys(errors).length === 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
    setSuccess(true);
    setValues(initialValues);
    setTouched({});
  };

  return (
    <form onSubmit={handleSubmit} noValidate>
      <h2>Create Account</h2>

      {fields.map((f) => (
        <FormField
          key={f.name}
          {...f}
          value={values[f.name]}
          error={errors[f.name]}
          touched={touched[f.name]}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      ))}

      <button type="submit" disabled={!isValid}>
        Register
      </button>

      {success && <p className="success">Registration successful!</p>}
    </form>
  );
}
