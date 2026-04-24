import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildMetadata, services } from "@/data/site";

export const metadata = buildMetadata(
  "Service Offerings",
  "Service overview for Transez Nigeria Limited covering EPC and electrical power quality solutions.",
  "/services/"
);

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Service Offerings"
        title="Engineering services focused on reliable power, safe facilities, and coordinated delivery"
        description="Explore Transez's service offering across EPC delivery, electrical power quality, and technical support for commercial and industrial operations."
        image="/assets/gallery/freedom-park.png"
      />

      <section className="section section-light">
        <div className="shell card-grid three-up">
          {services.map((service) => (
            <article className="feature-card" key={service.title}>
              <img src={service.image} alt="" />
              <div className="feature-card-body">
                <h2>{service.title}</h2>
                <p>{service.summary}</p>
                <ul className="feature-list">
                  {service.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Link href={service.href}>Explore service</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
