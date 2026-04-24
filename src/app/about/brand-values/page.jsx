import PageHero from "@/components/PageHero";
import { buildMetadata, values } from "@/data/site";

export const metadata = buildMetadata(
  "Our Brand & Values",
  "Transez brand values and engineering positioning.",
  "/about/brand-values/"
);

export default function BrandValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Brand & Values"
        title="A brand shaped by technical credibility, responsiveness, and disciplined delivery"
        description="Transez's brand is grounded in customer focus, professionalism, technical confidence, and dependable service delivery."
        image="/assets/gallery/engineering-team.jpg"
        compact
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          {values.map((value) => (
            <article className="value-card" key={value.title}>
              <h2>{value.title}</h2>
              <p>{value.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
