import Link from "next/link";
import PageHero from "@/components/PageHero";
import { buildMetadata, products } from "@/data/site";

export const metadata = buildMetadata(
  "Products",
  "Product partners and power technology offerings highlighted by Transez Nigeria Limited.",
  "/products/"
);

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Product lines centered on power quality visibility and resilient backup power"
        description="Elspec and Su-Kam are key product categories within Transez's power quality and backup power offering."
        image="/assets/products/sukam-banner.jpg"
      />

      <section className="section section-light">
        <div className="shell card-grid two-up">
          {products.map((product) => (
            <article className="product-card" key={product.title}>
              <img src={product.image} alt="" />
              <div>
                <h2>{product.title}</h2>
                <p>{product.summary}</p>
                <Link href={product.href}>Explore product</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
