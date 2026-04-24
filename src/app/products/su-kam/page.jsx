import PageHero from "@/components/PageHero";
import { buildMetadata, sukamProducts } from "@/data/site";

export const metadata = buildMetadata(
  "Su-Kam",
  "Su-Kam inverter solutions presented by Transez Nigeria Limited.",
  "/products/su-kam/"
);

export default function SuKamPage() {
  return (
    <>
      <PageHero
        eyebrow="Su-Kam"
        title="Pure sinewave inverter solutions positioned as a quieter alternative to generators"
        description="The Su-Kam range is suited to commercial applications that require reliable, regulated, and stabilized power."
        image="/assets/products/sukam-banner.jpg"
      />

      <section className="section section-light">
        <div className="shell narrow-flow">
          <p>
            Su-Kam's DSP sine wave inverter range is suited to powering
            everything from lights and office equipment to larger commercial loads in a more
            cost-effective and equipment-friendly way than many traditional backup options.
          </p>

          <div className="bullet-panel">
            <h2>Product range</h2>
            <ul className="feature-list">
              {sukamProducts.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
