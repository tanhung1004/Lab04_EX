
import { useCallback, useEffect, useState } from "react";
import InputField from "./InputField";
import { validateForm } from "../validation/formValidation";
import RenderCounter from "../components/RenderCounter";

export default function SimpleForm() {
  // Parent form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  // Legacy derived states
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /* ==========================================
     Callback used by InputField Effect #1
  ========================================== */

  const handleValueChange = useCallback((name, value) => {
    setFormData((previous) => {
      if (previous[name] === value) {
        return previous;
      }

      return {
        ...previous,
        [name]: value,
      };
    });

    setSubmitted(false);
  }, []);

  /* ==========================================
     useEffect #2 - validateField()
     Parent form data -> Validation errors
  ========================================== */

  useEffect(() => {
    console.log(
      "[Effect #2] validateField()",
      formData
    );

    const nextErrors = validateForm(formData);

    setErrors(nextErrors);
  }, [formData]);

  /* ==========================================
     useEffect #3 - calcFormValidity()
     Form data + Errors -> Validity state
  ========================================== */

  useEffect(() => {
    const hasValues = Object.values(formData).every(
      (value) => value.trim().length > 0
    );

    const hasErrors = Object.keys(errors).length > 0;
    const valid = hasValues && !hasErrors;

    console.log(
      "[Effect #3] calcFormValidity()",
      valid
    );

    setIsFormValid(valid);
  }, [formData, errors]);

  /* ==========================================
     Submit handling
  ========================================== */

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitAttempted(true);

    // Synchronous validation prevents invalid submission
    // while legacy derived state is still updating.
    const currentErrors = validateForm(formData);

    if (Object.keys(currentErrors).length > 0) {
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
  }

  const firstErrorField = ["username", "email"].find(
    (field) => errors[field]
  );

  return (
    <section className="form-card">
      <h2>Legacy SimpleForm</h2>

      <p className="form-description">
        Demonstrating chained useEffect hooks
        and redundant state synchronization.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* ==========================================
            Username - Profiler
        ========================================== */}

        <RenderCounter id="InputField-username">
          <InputField
            name="username"
            label="Username"
            placeholder="Enter your username"
            onValueChange={handleValueChange}
            error={errors.username || ""}
            submitAttempted={submitAttempted}
            scrollToError={
              submitAttempted &&
              firstErrorField === "username"
            }
          />
        </RenderCounter>

        {/* ==========================================
            Email - Profiler
        ========================================== */}

        <RenderCounter id="InputField-email">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            onValueChange={handleValueChange}
            error={errors.email || ""}
            submitAttempted={submitAttempted}
            scrollToError={
              submitAttempted &&
              firstErrorField === "email"
            }
          />
        </RenderCounter>

        <button
          className="submit-btn"
          type="submit"
        >
          Submit Form
        </button>
      </form>

      {/* ==========================================
          Current Parent State
      ========================================== */}

      <div className="form-state">
        <h3>Current Parent State</h3>

        <pre>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      {/* ==========================================
          Validation State
      ========================================== */}

      <div className="validation-state">
        <h3>Validation State</h3>

        <p>
          Form Validity:
          <strong
            className={
              isFormValid
                ? "valid-text"
                : "invalid-text"
            }
          >
            {isFormValid ? " Valid" : " Invalid"}
          </strong>
        </p>

        <pre>
          {JSON.stringify(errors, null, 2)}
        </pre>
      </div>

      {submitted && (
        <p className="submit-message" role="status">
          Form submitted successfully!
        </p>
      )}
    </section>
  );
}
