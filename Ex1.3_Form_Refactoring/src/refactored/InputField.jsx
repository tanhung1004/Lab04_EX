
import { memo } from "react";

/* ==========================================
   M18 - REFACTORED INPUT FIELD
========================================== */

const InputField = memo(function InputField({
  name,
  label,
  type = "text",
  placeholder,
  value,
  error = "",
  submitAttempted = false,
  onValueChange,
  inputRef,
}) {
  /* ==========================================
     Derived validation display
     No local state and no useEffect
  ========================================== */

  const showError =
    Boolean(error) &&
    (submitAttempted || value.length > 0);

  function handleChange(event) {
    onValueChange(name, event.target.value);
  }

  return (
    <div className="form-field">
      <label htmlFor={`refactored-${name}`}>
        {label}
      </label>

      <input
        ref={inputRef}
        id={`refactored-${name}`}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        aria-invalid={showError}
        aria-describedby={
          showError
            ? `refactored-${name}-error`
            : undefined
        }
      />

      {showError && (
        <p
          id={`refactored-${name}-error`}
          className="field-error"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
});

export default InputField;
