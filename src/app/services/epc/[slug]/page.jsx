import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildMetadata, epcServicePages } from "@/data/site";

export function generateStaticParams() {
  return epcServicePages.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = epcServicePages.find((entry) => entry.slug === params.slug);

  return buildMetadata(
    service.title,
    service.summary,
    `/services/epc/${service.slug}/`
  );
}

export default function EpcServiceDetailPage({ params }) {
  const service = epcServicePages.find((entry) => entry.slug === params.slug);

  return (
    <>
      <PageHero
        eyebrow="Engineering, Procurement & Construction"
        title={service.title}
        description={service.summary}
        image={service.image}
        compact
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          {service.content.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}

          <Link href="/services/epc/" className="button button-secondary">
            Back to EPC services
          </Link>
        </div>
      </section>
    </>
  );
}
