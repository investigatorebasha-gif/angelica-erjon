import { useEffect, useState } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#libro", label: "Libro" },
  { href: "#storia", label: "Storia" },
  { href: "#momenti", label: "Momenti" },
  { href: "#speciale", label: "Angelica" },
  { href: "#futuro", label: "Futuro" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Vai alla home">
        <span className="brand-mark" aria-hidden="true">
          <span>A</span>
          <span>&amp;</span>
          <span>E</span>
        </span>
        <span className="brand-name">
          <span>ANGELICA</span>
          <span>&amp;</span>
          <span>ERJON</span>
        </span>
      </a>
      <nav className="nav-links" aria-label="Sezioni principali">
        {links.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
