
import { useParams } from "react-router";
import { people } from "../data/people";
import NotFoundPage from "./NotFoundPage";

export default function PersonDetailPage() {
  // Get ID from the dynamic route
  const { id } = useParams();

  // Find the matching person
  const person = people.find(
    (item) => item.id === id
  );

  // Handle invalid person ID
  if (!person) {
    return <NotFoundPage personId={id} />;
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

      {/* Semantic HTML Definition List */}
      <dl className="detail-definition-list">
        <div>
          <dt>Person ID</dt>
          <dd>{person.id}</dd>
        </div>

        <div>
          <dt>Full Name</dt>
          <dd>{person.name}</dd>
        </div>

        <div>
          <dt>Role</dt>
          <dd>{person.role}</dd>
        </div>

        <div>
          <dt>Department</dt>
          <dd>{person.department}</dd>
        </div>

        <div>
          <dt>Email</dt>
          <dd>
            <a href={`mailto:${person.email}`}>
              {person.email}
            </a>
          </dd>
        </div>

        <div>
          <dt>Location</dt>
          <dd>{person.location}</dd>
        </div>
      </dl>
    </section>
  );
}
