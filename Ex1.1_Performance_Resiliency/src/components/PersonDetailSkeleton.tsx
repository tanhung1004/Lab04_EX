
export default function PersonDetailSkeleton() {
  return (
    <section
      className="detail-card detail-skeleton"
      role="status"
      aria-busy="true"
      aria-live="polite"
      aria-label="Đang tải thông tin chi tiết"
    >
      <span className="sr-only">
        Đang tải thông tin người dùng...
      </span>

      <div aria-hidden="true">
        <div className="skeleton skeleton-back" />

        <div className="detail-header">
          <div className="skeleton skeleton-avatar" />

          <div className="skeleton-header-text">
            <div className="skeleton skeleton-eyebrow" />
            <div className="skeleton skeleton-title" />
            <div className="skeleton skeleton-subtitle" />
          </div>
        </div>

        <div className="detail-grid">
          {Array.from({ length: 4 }, (_, index) => (
            <div className="skeleton-field" key={index}>
              <div className="skeleton skeleton-label" />
              <div className="skeleton skeleton-value" />
            </div>
          ))}
        </div>

        <div className="detail-section">
          <div className="skeleton skeleton-section-title" />
          <div className="skeleton skeleton-paragraph" />
        </div>
      </div>
    </section>
  );
}
