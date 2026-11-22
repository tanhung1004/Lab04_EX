
import { useState } from "react";

import LegacySimpleForm from "./legacy/SimpleForm";
import RefactoredSimpleForm from "./refactored/SimpleForm";
import RenderCounter from "./components/RenderCounter";
import RaceConditionDemo from "./components/RaceConditionDemo";

/* ==========================================
   M18 - LEGACY VS REFACTORED COMPARISON
========================================== */

export default function App() {
  const [mode, setMode] = useState("legacy");

  const isLegacy = mode === "legacy";

  return (
    <main className="app">
      <div className="container">
        <span className="label">
          LAB 04 / EXERCISE 1.3
        </span>

        <h1>Legacy Validation Anti-Patterns</h1>

        <p className="description">
          Comparing legacy useEffect chaining with
          refactored form validation architecture.
        </p>

        {/* Form Version Selection */}

        <div
          className="form-mode-switch"
          role="group"
          aria-label="Choose form implementation"
        >
          <button
            type="button"
            className={isLegacy ? "selected" : ""}
            aria-pressed={isLegacy}
            onClick={() => setMode("legacy")}
          >
            Legacy Form
          </button>

          <button
            type="button"
            className={!isLegacy ? "selected" : ""}
            aria-pressed={!isLegacy}
            onClick={() => setMode("refactored")}
          >
            Refactored Form
          </button>
        </div>

        {/* Render Selected Form */}

        <RenderCounter
          key={mode}
          id={
            isLegacy
              ? "LegacySimpleForm"
              : "RefactoredSimpleForm"
          }
        >
          {isLegacy ? (
            <LegacySimpleForm />
          ) : (
            <RefactoredSimpleForm />
          )}
        </RenderCounter>

        {/* Race Condition Demo from M17 */}

        <RaceConditionDemo />
      </div>
    </main>
  );
}
