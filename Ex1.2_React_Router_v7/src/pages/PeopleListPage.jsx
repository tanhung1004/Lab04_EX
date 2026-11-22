
import PersonCard from "../components/PersonCard";
import { people } from "../data/people";

export default function PeopleListPage() {
  return (
    <section className="people-page">
      <h1>People Directory</h1>

      <p>
        Exercise 1.2.2 - Master Detail View
      </p>

      <div className="people-grid">
        {people.map((person) => (
          <PersonCard
            key={person.id}
            person={person}
          />
        ))}
      </div>
    </section>
  );
}
