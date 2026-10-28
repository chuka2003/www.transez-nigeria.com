import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { aboutStory, buildMetadata, heritageMilestones } from "@/data/site";

export const metadata = buildMetadata(
  "About Transez",
  "Discover Transez Engineering Ltd and the engineering heritage of Transez Nigeria Limited, established in 1989, across maintenance, power quality, and EPC services.",
  "/about/"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Transez"
        title="Rooted in 1989. Engineering the next chapter."
        description="Transez Engineering Ltd builds on the heritage of Transez Nigeria Limited: decades of maintenance, electromechanical engineering, power quality, and project delivery for Nigerian businesses."
        image="/assets/gallery/engineering-team.jpg"
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          <SectionIntro
            eyebrow="Our story"
            title="A practical foundation. An enduring engineering purpose."
            text="Our heritage is built on understanding how businesses operate and delivering the technical support their facilities need."
          />
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="section trust-section">
        <div className="shell">
          <SectionIntro
            eyebrow="Our journey"
            title="The milestones behind the Transez name"
            text="A history of practical engineering, from our predecessor's maintenance roots to the next phase of the Transez business."
          />
          <div className="card-grid three-up">
            {heritageMilestones.map((milestone) => (
              <article className="value-card" key={milestone.year}>
                <p className="eyebrow">{milestone.year}</p>
                <h3>{milestone.title}</h3>
                <p>{milestone.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
