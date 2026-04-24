import Link from "next/link";
import PageHero from "@/components/PageHero";
import SectionIntro from "@/components/SectionIntro";
import { buildMetadata, epcServicePages } from "@/data/site";

export const metadata = buildMetadata(
  "Engineering, Procurement & Construction",
  "Integrated mechanical and electrical EPC capabilities from Transez Nigeria Limited.",
  "/services/epc/"
);

export default function EpcPage() {
  return (
    <>
      <PageHero
        eyebrow="Engineering, Procurement & Construction"
        title="Coordinated mechanical and electrical delivery for demanding facilities"
        description="Transez brings experienced engineers, integrated coordination, and support from design through commissioning."
        image="/assets/gallery/freedom-park.png"
      />

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="M & E Services Menu"
            title="Mechanical and electrical services across design, delivery, protection, and support"
            text="Explore the EPC service areas within Transez's mechanical and electrical offering, each supported with a dedicated service page."
          />

          <div className="card-grid three-up">
            {epcServicePages.map((service) => (
              <article className="feature-card" key={service.slug}>
                <img src={service.image} alt="" />
                <div className="feature-card-body">
                  <h3>{service.menuLabel}</h3>
                  <p>{service.summary}</p>
                  <Link href={`/services/epc/${service.slug}/`}>Explore service</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
