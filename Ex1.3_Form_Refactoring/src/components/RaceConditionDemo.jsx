
import { useEffect, useRef, useState } from "react";

/* ==========================================
   M17 - ASYNC VALIDATION SIMULATION
========================================== */

function validateAsync(value) {
  const delay = value === "a" ? 900 : 150;

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        value,
        valid: value.length >= 3,
      });
    }, delay);
  });
}

export default function RaceConditionDemo() {
  const [inputValue, setInputValue] = useState("");
  const [unsafeResult, setUnsafeResult] = useState("Not tested");
  const [safeResult, setSafeResult] = useState("Not tested");
  const [logs, setLogs] = useState([]);

  const runIdRef = useRef(0);
  const timerRef = useRef(null);

  /* ==========================================
     ASYNC VALIDATION EFFECT
  ========================================== */

  useEffect(() => {
    if (!inputValue) return;

    const runId = runIdRef.current;
    let ignore = false;

    validateAsync(inputValue).then((result) => {
      if (runId !== runIdRef.current) return;

      const message =
        `${result.value}: ${result.valid ? "Valid" : "Invalid"}`;

      // Unsafe: stale results can overwrite newer results
      setUnsafeResult(message);

      // Safe: ignore outdated validation results
      if (!ignore) {
        setSafeResult(message);
      }

      setLogs((previous) => [
        ...previous.slice(-7),
        `${message} | ${ignore ? "STALE" : "CURRENT"}`,
      ]);

      console.log("[M17] Async validation:", {
        message,
        stale: ignore,
      });
    });

    return () => {
      ignore = true;
    };
  }, [inputValue]);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  /* ==========================================
     RAPID INPUT SIMULATION
  ========================================== */

  function runSimulation() {
    runIdRef.current += 1;
    clearTimeout(timerRef.current);

    setLogs([]);
    setUnsafeResult("Waiting...");
    setSafeResult("Waiting...");

    setInputValue("a");

    timerRef.current = setTimeout(() => {
      setInputValue("abc");
    }, 80);
  }

  return (
    <section className="race-demo">
      <h2>M17 - Race Condition Simulation</h2>

      <p>
        Simulate rapid input changes with asynchronous
        validation responses arriving out of order.
      </p>

      <button
        className="submit-btn"
        type="button"
        onClick={runSimulation}
      >
        Run Race Condition Test
      </button>

      <p className="race-current">
        Latest Input: <strong>{inputValue || "-"}</strong>
      </p>

      <div className="race-results">
        <div className="race-result">
          <h3>Unsafe Validation</h3>
          <p>{unsafeResult}</p>
        </div>

        <div className="race-result">
          <h3>Safe Validation</h3>
          <p>{safeResult}</p>
        </div>
      </div>

      <div className="race-log">
        <h3>Execution Log</h3>

        {logs.length === 0 ? (
          <p>No results yet.</p>
        ) : (
          <ol>
            {logs.map((log, index) => (
              <li key={index}>{log}</li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}
