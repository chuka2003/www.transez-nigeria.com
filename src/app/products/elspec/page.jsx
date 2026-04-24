import PageHero from "@/components/PageHero";
import { buildMetadata, elspecProducts } from "@/data/site";

export const metadata = buildMetadata(
  "Elspec",
  "Elspec power quality technologies presented by Transez Nigeria Limited.",
  "/products/elspec/"
);

export default function ElspecPage() {
  return (
    <>
      <PageHero
        eyebrow="Elspec"
        title="Power quality analysis, monitoring, and compensation technologies"
        description="Explore key Elspec product families for power quality analysis, system monitoring, and compensation."
        image="/assets/products/elspec-equalizer.jpg"
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          {elspecProducts.map((product) => (
            <article className="value-card" key={product.title}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
