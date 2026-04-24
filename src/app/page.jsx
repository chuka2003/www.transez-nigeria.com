import Link from "next/link";
import ClientGrid from "@/components/ClientGrid";
import SectionIntro from "@/components/SectionIntro";
import {
  aboutStory,
  buildMetadata,
  company,
  homeHighlights,
  products,
  services
} from "@/data/site";

export const metadata = buildMetadata(
  "Home",
  "Electromechanical, EPC, facility engineering, and power quality solutions for industrial and commercial clients in Nigeria.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media">
          <img
            src="/assets/gallery/freedom-park.png"
            alt="Large-scale facility development supported by engineering infrastructure"
          />
        </div>
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Engineering confidence for critical operations</p>
            <h1>Electromechanical, power quality, and EPC solutions for critical industrial and commercial operations</h1>
            <p>
              {company.name} supports clients across Nigeria with engineering expertise, product
              support, and project delivery focused on uptime, safety, and energy performance.
            </p>
            <div className="hero-actions">
              <Link href="/contact/" className="button button-primary">
                Contact Transez
              </Link>
              <Link href="/services/" className="button button-secondary">
                Explore services
              </Link>
            </div>
          </div>

          <div className="hero-panel">
            {homeHighlights.map((item) => (
              <article className="hero-panel-card" key={item.title}>
                <p className="eyebrow">{item.eyebrow}</p>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="What we do"
            title="Engineering services built around operational reliability, technical discipline, and energy performance"
            text="Transez delivers power quality solutions, electromechanical systems, facility engineering, and project execution for demanding commercial and industrial environments."
          />

          <div className="card-grid three-up">
            {services.map((service) => (
              <article className="feature-card" key={service.title}>
                <img src={service.image} alt="" />
                <div className="feature-card-body">
                  <h3>{service.title}</h3>
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
        </div>
      </section>

      <section className="section section-dark">
        <div className="shell split-layout">
          <div>
            <SectionIntro
              eyebrow="Who we are"
              title="A Nigerian engineering company focused on uptime, protection, and efficient energy use"
              text="The company has expanded from maintenance support into a broader specialist portfolio covering power quality, facility engineering, and project delivery."
            />
          </div>
          <div className="story-stack">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/about/" className="button button-secondary">
              Explore company
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="Partners & products"
            title="Technology partnerships aligned with power quality and resilient backup power"
            text="Elspec and Su-Kam remain central to the company's product offering in power quality, monitoring, and backup power solutions."
          />

          <div className="card-grid two-up">
            {products.map((product) => (
              <article className="product-card" key={product.title}>
                <img src={product.image} alt="" />
                <div>
                  <h3>{product.title}</h3>
                  <p>{product.summary}</p>
                  <Link href={product.href}>Explore product</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section trust-section">
        <div className="shell">
          <SectionIntro
            eyebrow="Clients"
            title="Client relationships spanning finance, telecoms, infrastructure, and utility-adjacent sectors"
            text="These logos reflect organizations associated with Transez's engineering and technical support work."
          />
          <ClientGrid />
        </div>
      </section>

      <section className="section cta-section">
        <div className="shell cta-box">
          <div>
            <p className="eyebrow">Start a conversation</p>
            <h2>Discuss power quality, EPC delivery, facility engineering, or product support with Transez</h2>
          </div>
          <div className="cta-actions">
            <Link href="/contact/" className="button button-primary">
              Contact Transez
            </Link>
            <Link href="/about/team/" className="button button-secondary">
              Explore team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
