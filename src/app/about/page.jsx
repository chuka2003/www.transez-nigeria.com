import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { aboutStory, buildMetadata } from "@/data/site";

export const metadata = buildMetadata(
  "About Transez",
  "Meet Transez Engineering Ltd, RC 9734675: electromechanical, power quality, EPC, and facility engineering in Nigeria.",
  "/about/"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Transez"
        title="A new chapter for Transez engineering"
        description="Transez Engineering Ltd brings a clear focus to commercial and industrial engineering: reliable systems, coordinated delivery, and responsive technical support."
        image="/assets/gallery/engineering-team.jpg"
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          <SectionIntro
            eyebrow="Our company"
            title="Engineering for the way your business operates"
            text="Incorporated on 3 August 2026 as Transez Engineering Ltd, RC 9734675, we are focused on the power and facility systems that support our clients' operations."
          />
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
