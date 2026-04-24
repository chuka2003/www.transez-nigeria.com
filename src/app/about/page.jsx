import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { aboutStory, buildMetadata } from "@/data/site";

export const metadata = buildMetadata(
  "About Transez",
  "Background, evolution, and present-day positioning of Transez Nigeria Limited.",
  "/about/"
);

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Transez"
        title="Built in Nigeria and shaped by decades of engineering and technical delivery"
        description="Learn how Transez evolved from maintenance support into a broader electromechanical, power quality, and project delivery company."
        image="/assets/gallery/engineering-team.jpg"
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          <SectionIntro
            eyebrow="Background"
            title="From maintenance vendor to electromechanical and power quality specialist"
          />
          {aboutStory.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </section>
    </>
  );
}
