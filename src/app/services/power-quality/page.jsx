import PageHero from "@/components/PageHero";
import { buildMetadata, powerQualitySolutions } from "@/data/site";

export const metadata = buildMetadata(
  "Electrical Power Quality",
  "Power quality services from Transez Nigeria Limited including harmonics filtration, voltage control, and surge protection.",
  "/services/power-quality/"
);

export default function PowerQualityPage() {
  return (
    <>
      <PageHero
        eyebrow="Electrical Power Quality"
        title="Solutions that support cleaner, more stable, and more efficient electrical performance"
        description="Power quality is a core Transez specialization for industrial and commercial operations that depend on electrical stability and performance."
        image="/assets/products/elspec-g4400.jpg"
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          {powerQualitySolutions.map((item) => (
            <article className="value-card" key={item.title}>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
