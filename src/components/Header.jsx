"use client";

import Link from "next/link";
import { useState } from "react";
import { company, navigation } from "@/data/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="engineering-wordmark" aria-label={`${company.name}, RC ${company.registrationNumber}`}>
            Transez<span>ENGINEERING LTD</span>
            <span>RC {company.registrationNumber}</span>
          </span>
          <span className="brand-copy">
            <strong>{company.name}</strong>
            <span>Engineering reliability. Powering progress.</span>
          </span>
        </Link>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">Toggle navigation</span>
        </button>

        <nav id="site-nav" className={`site-nav ${open ? "is-open" : ""}`} aria-label="Primary">
          <Link href="/" className="nav-home" onClick={() => setOpen(false)}>
            Home
          </Link>
          {navigation.map((item) => (
            <div className="nav-group" key={item.href}>
              <Link href={item.href} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
              {item.children ? (
                <div className="nav-dropdown">
                  {item.children.map((child) => (
                    <Link href={child.href} key={child.href} onClick={() => setOpen(false)}>
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}
