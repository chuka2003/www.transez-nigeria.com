import Link from "next/link";
import ClientGrid from "@/components/ClientGrid";
import ProjectGallery from "@/components/ProjectGallery";
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
            src="/assets/projects/field-engineering-works.jpg"
            alt="Transez field engineer working inside a facility equipment room"
          />
        </div>
        <div className="shell home-hero-grid">
          <div className="home-hero-copy">
            <p className="eyebrow">Transez Engineering Ltd</p>
            <h1>Engineering reliability. Powering progress.</h1>
            <p>
              {company.name} delivers electromechanical, power quality, and EPC solutions
              for commercial and industrial operations across Nigeria. From design to
              commissioning and maintenance, we help you build, protect, and sustain the
              systems your business depends on.
            </p>
            <div className="hero-actions">
              <Link href="/contact/" className="button button-primary">
                Discuss your project
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
            title="Power, systems, and facilities that work together"
            text="Bring your mechanical, electrical, and power quality requirements together with coordinated engineering, procurement, installation, and technical support."
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
              title="The next chapter of Transez"
              text="Transez Engineering Ltd has acquired Transez Nigeria Limited, opening a new chapter focused on the engineering needs of commercial and industrial clients."
            />
          </div>
          <div className="story-stack">
            {aboutStory.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <Link href="/about/" className="button button-secondary">
              About Transez
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="Partners & products"
            title="Understand your power. Protect your operations."
            text="Explore power quality monitoring, compensation, and backup power technologies, and discuss the right equipment for your operating requirements."
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
            eyebrow="Project photos"
            title="Engineering in the field"
            text="Explore the Transez business's project history through site coordination, equipment rooms, water systems, and power infrastructure work."
          />
          <ProjectGallery limit={6} />
          <div className="section-link">
            <Link href="/projects/" className="button button-primary">
              View project photos
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="shell">
          <SectionIntro
            eyebrow="Clients"
            title="A history of serving demanding environments"
            text="Selected client references from Transez Nigeria Limited's engineering and technical support history across finance, telecommunications, and infrastructure."
          />
          <ClientGrid />
        </div>
      </section>

      <section className="section cta-section">
        <div className="shell cta-box">
          <div>
            <p className="eyebrow">Your next project</p>
            <h2>Tell us what your operation needs to achieve</h2>
          </div>
          <div className="cta-actions">
            <Link href="/contact/" className="button button-primary">
              Discuss your project
            </Link>
            <Link href="/about/team/" className="button button-secondary">
              Meet our team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
