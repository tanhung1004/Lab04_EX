
export default function PersonCard({ person }) {
  const initials = person.name
    .split(" ")
    .slice(-2)
    .map((word) => word[0])
    .join("");

  return (
    <article className="people-card">
      <div className="person-avatar" aria-hidden="true">
        {initials}
      </div>

      <div className="person-info">
        <h2>{person.name}</h2>
        <p>{person.role}</p>
        <span>{person.department}</span>
      </div>
    </article>
  );
}
