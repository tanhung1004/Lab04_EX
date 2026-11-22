
import { Link } from "react-router";
import type { Person } from "../types/person";

type Props = {
  person: Person;
};

export default function PersonCard({ person }: Props) {
  const initials = person.name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="person-card">
      <div className="avatar avatar-small" aria-hidden="true">
        {initials}
      </div>

      <div className="person-card-content">
        <h2>{person.name}</h2>
        <p>{person.role}</p>
        <span className="muted">{person.department}</span>
      </div>

      <Link className="btn btn-outline" to={`/people/${person.id}`}>
        Xem chi tiết <span aria-hidden="true">→</span>
      </Link>
    </article>
  );
}
