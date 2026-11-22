
import { useState } from "react";

export default function InputField({
  name,
  label,
  type = "text",
  placeholder,
  onValueChange,
}) {
  // Local state of InputField
  const [localValue, setLocalValue] = useState("");

  function handleChange(event) {
    const newValue = event.target.value;

    // Update local state
    setLocalValue(newValue);

    // Synchronize with parent directly (M14)
    onValueChange(name, newValue);
  }

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>

      <input
        id={name}
        name={name}
        type={type}
        value={localValue}
        placeholder={placeholder}
        onChange={handleChange}
        autoComplete="off"
      />
    </div>
  );
}
