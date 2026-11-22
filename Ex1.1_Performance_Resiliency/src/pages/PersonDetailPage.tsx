
import { Link, useParams } from "react-router";
import { people } from "../data/people";

export default function PersonDetailPage() {
  const { id } = useParams<{ id: string }>();

  const person = people.find((item) => item.id === id);

  if (!person) {
    return (
      <section className="detail-card detail-empty" role="status">
        <h1>Không tìm thấy người dùng</h1>
        <p>ID không hợp lệ hoặc người dùng không tồn tại.</p>

        <Link className="btn" to="/">
          Quay lại danh sách
        </Link>
      </section>
    );
  }

  const initials = person.name
    .split(" ")
    .slice(-2)
    .map((part) => part[0])
    .join("");

  return (
    <article className="detail-card" aria-labelledby="detail-title">
      <Link className="back-link" to="/">
        ← Quay lại danh sách
      </Link>

      <div className="detail-header">
        <div className="avatar avatar-large" aria-hidden="true">
          {initials}
        </div>

        <div>
          <span className="eyebrow">PERSON DETAIL</span>
          <h1 id="detail-title">{person.name}</h1>
          <p className="job-title">{person.role}</p>
        </div>
      </div>

      <dl className="detail-grid">
        <div>
          <dt>Phòng ban</dt>
          <dd>{person.department}</dd>
        </div>

        <div>
          <dt>Địa điểm</dt>
          <dd>{person.location}</dd>
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
          <dt>Mã nhân sự</dt>
          <dd>{person.id}</dd>
        </div>
      </dl>

      <div className="detail-section">
        <h2>Giới thiệu</h2>
        <p>{person.bio}</p>
      </div>

      <div className="detail-section">
        <h2>Kỹ năng</h2>
        <ul className="skill-list">
          {person.skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
