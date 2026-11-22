
import { useCallback, useRef, useState } from "react";
import InputField from "./InputField";
import { validateForm } from "../validation/formValidation";
import RenderCounter from "../components/RenderCounter";

/* ==========================================
   M18 - REFACTORED SIMPLE FORM
========================================== */

export default function SimpleForm() {
  /* ==========================================
     1. Single Source of Truth
  ========================================== */

  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [submitAttempted, setSubmitAttempted] =
    useState(false);

  const [submitted, setSubmitted] = useState(false);

  const usernameRef = useRef(null);
  const emailRef = useRef(null);

  /* ==========================================
     2. Derived Validation
     No errors state and no useEffect
  ========================================== */

  const errors = validateForm(formData);

  const isFormValid =
    Object.keys(errors).length === 0;

  /* ==========================================
     3. Direct State Updates
     No syncToParent useEffect
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
     4. Submit Handling
     Validate and focus invalid input
  ========================================== */

  function handleSubmit(event) {
    event.preventDefault();

    setSubmitAttempted(true);

    const currentErrors = validateForm(formData);

    if (Object.keys(currentErrors).length > 0) {
      setSubmitted(false);

      const firstErrorField = ["username", "email"].find(
        (field) => currentErrors[field]
      );

      const fieldRefs = {
        username: usernameRef,
        email: emailRef,
      };

      const target = fieldRefs[firstErrorField]?.current;

      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });

        target.focus({ preventScroll: true });
      }

      return;
    }

    setSubmitted(true);
  }

  /* ==========================================
     5. Render Form
  ========================================== */

  return (
    <section className="form-card">
      <h2>Refactored SimpleForm</h2>

      <p className="form-description">
        Controlled inputs, derived validation,
        and reduced effect dependencies.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        {/* Username */}

        <RenderCounter id="RefactoredInputField-username">
          <InputField
            name="username"
            label="Username"
            placeholder="Enter your username"
            value={formData.username}
            error={errors.username || ""}
            submitAttempted={submitAttempted}
            onValueChange={handleValueChange}
            inputRef={usernameRef}
          />
        </RenderCounter>

        {/* Email */}

        <RenderCounter id="RefactoredInputField-email">
          <InputField
            name="email"
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            error={errors.email || ""}
            submitAttempted={submitAttempted}
            onValueChange={handleValueChange}
            inputRef={emailRef}
          />
        </RenderCounter>

        <button
          className="submit-btn"
          type="submit"
        >
          Submit Form
        </button>
      </form>

      {/* Parent State */}

      <div className="form-state">
        <h3>Current Parent State</h3>

        <pre>
          {JSON.stringify(formData, null, 2)}
        </pre>
      </div>

      {/* Validation State */}

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
