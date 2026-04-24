import PageHero from "@/components/PageHero";
import { buildMetadata, team } from "@/data/site";

export const metadata = buildMetadata(
  "Meet Our Team",
  "Leadership and management profiles for Transez Nigeria Limited.",
  "/about/team/"
);

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet Our Team"
        title="Leadership spanning engineering, operations, logistics, and administration"
        description="Meet the leadership and management team supporting Transez's engineering delivery, operations, logistics, and administration."
        image="/assets/gallery/mechanical-electrical.png"
        compact
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          {team.map((person) => (
            <article className="team-card" key={person.name}>
              <p className="eyebrow">{person.role}</p>
              <h2>{person.name}</h2>
              <p>{person.bio}</p>
              <p>{person.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
