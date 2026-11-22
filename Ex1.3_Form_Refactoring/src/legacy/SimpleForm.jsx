
import { useState } from "react";
import InputField from "./InputField";

export default function SimpleForm() {
  // Parent form state
  const [formData, setFormData] = useState({
    username: "",
    email: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleValueChange(name, value) {
    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="form-card">
      <h2>Legacy SimpleForm</h2>

      <p className="form-description">
        Demonstrating state synchronization between
        InputField and SimpleForm.
      </p>

      <form onSubmit={handleSubmit} noValidate>
        <InputField
          name="username"
          label="Username"
          placeholder="Enter your username"
          onValueChange={handleValueChange}
        />

        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="Enter your email"
          onValueChange={handleValueChange}
        />

        <button className="submit-btn" type="submit">
          Submit Form
        </button>
      </form>

      <div className="form-state">
        <h3>Current Parent State</h3>

        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>

      {submitted && (
        <p className="submit-message" role="status">
          Form submitted successfully!
        </p>
      )}
    </section>
  );
}
