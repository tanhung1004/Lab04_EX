
import SimpleForm from "./legacy/SimpleForm";
import RenderCounter from "./components/RenderCounter";
import RaceConditionDemo from "./components/RaceConditionDemo";

export default function App() {
  return (
    <main className="app">
      <div className="container">
        <span className="label">
          LAB 04 / EXERCISE 1.3
        </span>

        <h1>Legacy Validation Anti-Patterns</h1>

        <p className="description">
          Analyzing state synchronization,
          cascading re-renders, race conditions,
          and infinite loop risks.
        </p>

        {/* Legacy Form from M15 + Profiler M16 */}
        <RenderCounter id="LegacySimpleForm">
          <SimpleForm />
        </RenderCounter>

        {/* Independent async race simulation */}
        <RaceConditionDemo />
      </div>
    </main>
  );
}
