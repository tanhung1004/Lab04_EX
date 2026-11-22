
import { NavLink, Outlet } from "react-router";
import PersonCard from "../components/PersonCard";
import { people } from "../data/people";

export default function PeopleListPage() {
  return (
    <section className="people-page">
      <h1>People Directory</h1>

      <p>
        Exercise 1.2.2 - Master Detail View
      </p>

      <div className="master-detail">
        {/* Master: People List */}
        <aside className="master-panel">
          <h2>People List</h2>

          <div className="people-grid">
            {people.map((person) => (
              <NavLink
                key={person.id}
                to={`/people/${person.id}`}
                className={({ isActive }) =>
                  isActive
                    ? "person-select selected"
                    : "person-select"
                }
              >
                <PersonCard person={person} />
              </NavLink>
            ))}
          </div>
        </aside>

        {/* Detail: Selected Person */}
        <div className="detail-content">
          <Outlet />
        </div>
      </div>
    </section>
  );
}
