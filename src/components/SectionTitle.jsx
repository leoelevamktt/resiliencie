export default function SectionTitle({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`section-heading ${centered ? 'section-heading--center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
