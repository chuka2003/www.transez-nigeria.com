import ClientGrid from "@/components/ClientGrid";
import PageHero from "@/components/PageHero";
import { buildMetadata } from "@/data/site";

export const metadata = buildMetadata(
  "Clients",
  "Client references for Transez Nigeria Limited.",
  "/about/clients/"
);

export default function ClientsPage() {
  return (
    <>
      <PageHero
        eyebrow="Clients"
        title="Client relationships across finance, telecoms, infrastructure, and commercial sectors"
        description="A selection of organizations associated with Transez's engineering and technical support work."
        image="/assets/gallery/freedom-park.png"
        compact
      />

      <section className="section section-light">
        <div className="shell">
          <ClientGrid />
        </div>
      </section>
    </>
  );
}
