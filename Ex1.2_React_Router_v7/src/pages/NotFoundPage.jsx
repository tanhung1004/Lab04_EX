
import { Link } from "react-router";

export default function NotFoundPage({ personId }) {
  const isPersonNotFound = Boolean(personId);

  return (
    <section
      className="detail-panel not-found-page"
      role="status"
      aria-labelledby="not-found-title"
    >
      <span className="error-code">404</span>

      <h2 id="not-found-title">
        {isPersonNotFound
          ? "Person Not Found"
          : "Page Not Found"}
      </h2>

      <p>
        {isPersonNotFound
          ? `No person exists with ID: ${personId}`
          : "The requested page does not exist."}
      </p>

      <Link
        to={isPersonNotFound ? "/people" : "/"}
        className="back-button"
      >
        {isPersonNotFound
          ? "Back to People List"
          : "Back to Home"}
      </Link>
    </section>
  );
}
