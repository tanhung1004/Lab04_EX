
import { useEffect, useRef, useState } from "react";

export default function InputField({
  name,
  label,
  type = "text",
  placeholder,
  onValueChange,
  error = "",
  submitAttempted = false,
  scrollToError = false,
}) {
  // Local input state
  const [localValue, setLocalValue] = useState("");
  const [localError, setLocalError] = useState("");

  const inputRef = useRef(null);

  /* ==========================================
     useEffect #1 - syncToParent()
     Local state -> Parent state
  ========================================== */

  useEffect(() => {
    console.log(
      `[Effect #1] syncToParent(${name})`,
      localValue
    );

    onValueChange(name, localValue);
  }, [localValue, name, onValueChange]);

  /* ==========================================
     useEffect #4 - syncErrorsToChild()
     Parent validation error -> Child state
  ========================================== */

  useEffect(() => {
    console.log(
      `[Effect #4] syncErrorsToChild(${name})`,
      error
    );

    setLocalError(error);
  }, [error, name]);

  /* ==========================================
     useEffect #5 - autoScrollToError()
     Scroll to the first invalid field
  ========================================== */

  useEffect(() => {
    if (!scrollToError || !localError) {
      return;
    }

    console.log(
      `[Effect #5] autoScrollToError(${name})`
    );

    inputRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [scrollToError, localError, name]);

  function handleChange(event) {
    // Only update local state.
    // Parent sync is delayed to Effect #1.
    setLocalValue(event.target.value);
  }

  const showError =
    Boolean(localError) &&
    (submitAttempted || localValue.length > 0);

  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}
      </label>

      <input
        ref={inputRef}
        id={name}
        name={name}
        type={type}
        value={localValue}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
        aria-invalid={showError}
        aria-describedby={
          showError ? `${name}-error` : undefined
        }
      />

      {showError && (
        <p
          id={`${name}-error`}
          className="field-error"
          role="alert"
        >
          {localError}
        </p>
      )}
    </div>
  );
}
