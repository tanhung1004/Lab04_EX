
import SimpleForm from "./legacy/SimpleForm";

export default function App() {
  return (
    <main className="app">
      <div className="container">
        <span className="label">
          LAB 04 / EXERCISE 1.3
        </span>

        <h1>Legacy Validation Anti-Patterns</h1>

        <p className="description">
          Analyzing state synchronization and
          cascading re-renders in React forms.
        </p>

        <SimpleForm />
      </div>
    </main>
  );
}
