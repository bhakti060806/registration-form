// Reusable input component. Everything it needs comes in through props.
export default function FormField({
  label,
  name,
  type = "text",
  value,
  error,
  touched,
  onChange,
  onBlur,
}) {
  const showError = touched && error;
  const isCheckbox = type === "checkbox";
  const stateClass = showError ? "invalid" : touched ? "valid" : "";

  return (
    <div className={`field ${isCheckbox ? "field-checkbox" : ""}`}>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        {...(isCheckbox ? { checked: value } : { value })}
        onChange={onChange}
        onBlur={onBlur}
        className={stateClass}
      />
      {showError && <span className="error">{error}</span>}
    </div>
  );
}
