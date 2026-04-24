import Link from "next/link";
import { company, navigation } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div>
          <p className="footer-kicker">Transez Nigeria Limited</p>
          <h2>Engineering solutions built around uptime, safety, and operational confidence.</h2>
          <p>{company.tagline}</p>
        </div>

        <div>
          <p className="footer-kicker">Explore</p>
          <div className="footer-links">
            <Link href="/">Home</Link>
            {navigation.map((item) => (
              <Link href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
            <Link href="/faqs/">FAQs</Link>
          </div>
        </div>

        <div>
          <p className="footer-kicker">Contact</p>
          <p>{company.address}</p>
          <a href={`mailto:${company.email}`}>{company.email}</a>
          {company.phones.map((phone) => (
            <a href={`tel:${phone.replace(/\s+/g, "")}`} key={phone}>
              {phone}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
