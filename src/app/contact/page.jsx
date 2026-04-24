import PageHero from "@/components/PageHero";
import { buildMetadata, company } from "@/data/site";

export const metadata = buildMetadata(
  "Contact Us",
  "Contact details for Transez Nigeria Limited in Lagos, Nigeria.",
  "/contact/"
);

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Reach Transez to discuss engineering, power quality, and facility support needs"
        description="Contact Transez to discuss electromechanical engineering, power quality, EPC delivery, and facility support requirements."
        image="/assets/gallery/freedom-park.png"
        compact
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          <article className="value-card">
            <h2>Office</h2>
            <p>{company.address}</p>
            <a
              href="https://maps.google.com/?q=Ibusa+House,+5+Chief+Sunday+Ogunyade+Street,+Gbagada,+Lagos,+Nigeria"
              target="_blank"
              rel="noreferrer"
            >
              View map
            </a>
          </article>

          <article className="value-card">
            <h2>Contact details</h2>
            <a href={`mailto:${company.email}`}>{company.email}</a>
            {company.phones.map((phone) => (
              <a href={`tel:${phone.replace(/\s+/g, "")}`} key={phone}>
                {phone}
              </a>
            ))}
          </article>
        </div>
      </section>
    </>
  );
}
