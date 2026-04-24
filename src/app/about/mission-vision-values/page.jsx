import SectionIntro from "@/components/SectionIntro";
import PageHero from "@/components/PageHero";
import { buildMetadata, values } from "@/data/site";

export const metadata = buildMetadata(
  "Mission, Vision & Values",
  "Transez Nigeria Limited mission, vision, and guiding principles.",
  "/about/mission-vision-values/"
);

export default function MissionVisionValuesPage() {
  return (
    <>
      <PageHero
        eyebrow="Mission, Vision & Values"
        title="Guided by energy performance, professionalism, and customer focus"
        description="The company's mission, vision, and guiding principles reflect its long-term commitment to service quality, energy performance, and professional delivery."
        image="/assets/gallery/power-distribution.jpg"
        compact
      />

      <section className="section section-light">
        <div className="shell">
          <div className="card-grid two-up statement-grid">
            <article className="statement-card">
              <p className="eyebrow">Vision</p>
              <h2>To be the number one utility solutions provider in sub-Saharan Africa.</h2>
            </article>
            <article className="statement-card">
              <p className="eyebrow">Mission</p>
              <h2>To guarantee uninterrupted, clean and efficient use of energy in Africa.</h2>
            </article>
          </div>

          <SectionIntro
            eyebrow="Guiding principles"
            title="The principles that shape how Transez works and delivers"
          />

          <div className="card-grid two-up">
            {values.map((value) => (
              <article className="value-card" key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
