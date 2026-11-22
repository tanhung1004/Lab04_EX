
import PersonCard from "../components/PersonCard";
import { people } from "../data/people";

export default function PeopleListPage() {
  return (
    <section aria-labelledby="people-title">
      <div className="page-heading">
        <span className="eyebrow">
          EXERCISE 1.1 / CODE SPLITTING
        </span>

        <h1 id="people-title">People Directory</h1>

        <p>
          Chọn một người để tải trang chi tiết.
          Code trang chi tiết được tách thành một chunk
          và chỉ tải khi bạn truy cập route đó.
        </p>
      </div>

      <div className="people-grid">
        {people.map((person) => (
          <PersonCard key={person.id} person={person} />
        ))}
      </div>
    </section>
  );
}
