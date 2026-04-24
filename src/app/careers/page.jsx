import PageHero from "@/components/PageHero";
import { buildMetadata, careers, company } from "@/data/site";

export const metadata = buildMetadata(
  "Careers",
  "Career information for Transez Nigeria Limited.",
  "/careers/"
);

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Engineering and operations roles tied to facility performance and project delivery"
        description="Explore career opportunities with Transez across engineering, operations, and project-focused roles."
        image="/assets/gallery/engineering-team.jpg"
        compact
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          <article className="value-card">
            <h2>Career enquiries</h2>
            <p>{careers.intro}</p>
            <p>Candidates can share their CV and relevant details directly by email.</p>
            <a href={`mailto:${company.email}`}>Send CV by email</a>
          </article>

          <article className="value-card">
            <p className="eyebrow">Example role</p>
            <h2>{careers.opening.title}</h2>
            <p>{careers.opening.summary}</p>
          </article>
        </div>
      </section>
    </>
  );
}
