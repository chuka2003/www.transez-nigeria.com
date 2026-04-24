import PageHero from "@/components/PageHero";
import ProjectGallery from "@/components/ProjectGallery";
import SectionIntro from "@/components/SectionIntro";
import { buildMetadata } from "@/data/site";

export const metadata = buildMetadata(
  "Project Photos",
  "Project photos from Transez Nigeria Limited electromechanical, EPC, power, and facility engineering assignments.",
  "/projects/"
);

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Project photos"
        title="Field evidence from engineering and facility projects"
        description="Selected images from Transez's project archive, showing practical delivery across electromechanical works, power infrastructure, water systems, and site support."
        image="/assets/projects/facility-installation-works.jpg"
      />

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="Archive"
            title="Past project media"
            text="These photos bring more of the company's real field work into the site, replacing generic presentation with practical project context."
          />
          <ProjectGallery />
        </div>
      </section>
    </>
  );
}
