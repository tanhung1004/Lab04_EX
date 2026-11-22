
import { useParams } from "react-router";
import { people } from "../data/people";

export default function PersonDetailPage() {
  // Extract dynamic ID from URL
  const { id } = useParams();

  // Find the selected person
  const person = people.find(
    (item) => item.id === id
  );

  // Temporary fallback - improved in M11
  if (!person) {
    return (
      <section className="detail-panel">
        <h2>Person Not Found</h2>
        <p>No person exists with ID: {id}</p>
      </section>
    );
  }

  return (
    <section
      className="detail-panel"
      aria-labelledby="person-name"
    >
      <span className="label">
        PERSON DETAILS
      </span>

      <h2 id="person-name">
        {person.name}
      </h2>

      <p className="detail-role">
        {person.role}
      </p>

      <div className="detail-fields">
        <p>
          <strong>ID:</strong> {person.id}
        </p>

        <p>
          <strong>Department:</strong> {person.department}
        </p>

        <p>
          <strong>Email:</strong> {person.email}
        </p>

        <p>
          <strong>Location:</strong> {person.location}
        </p>
      </div>
    </section>
  );
}
