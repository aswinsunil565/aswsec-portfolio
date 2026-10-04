export default function SectionHead({ num, label, title, sub }) {
  return (
    <div className="section-head">
      {num && (
        <span>
          {num} / {label}
        </span>
      )}
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
