import PageHero from "@/components/PageHero";
import { buildMetadata, faqItems } from "@/data/site";

export const metadata = buildMetadata(
  "FAQs",
  "Frequently asked questions about Transez Nigeria Limited services and contact details.",
  "/faqs/"
);

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title="Key questions about Transez's services, sectors, and contact details"
        description="Find quick answers about the company's engineering focus, service areas, and how to get in touch."
        image="/assets/gallery/system-sensor.png"
        compact
      />

      <section className="section section-light">
        <div className="shell faq-list">
          {faqItems.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
