export default function PageHero({ eyebrow, title, description, image, compact = false }) {
  return (
    <section className={`page-hero ${compact ? "compact" : ""}`}>
      <div className="page-hero-media">
        <img src={image} alt="" />
      </div>
      <div className="shell page-hero-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p className="hero-text">{description}</p>
      </div>
    </section>
  );
}
