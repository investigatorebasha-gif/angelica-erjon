import Book from "./Book/Book";
import heroAtmosphere from "../assets/hero-atmosphere.png";
import brandLogo from "../assets/brand-logo-dark.png";
import type { CSSProperties } from "react";

const particles = [
  ["8%", "22%", "0s"],
  ["16%", "68%", "-2s"],
  ["24%", "36%", "-4s"],
  ["31%", "76%", "-1s"],
  ["39%", "18%", "-5s"],
  ["46%", "58%", "-3s"],
  ["52%", "28%", "-6s"],
  ["58%", "72%", "-2.4s"],
  ["63%", "43%", "-4.5s"],
  ["69%", "16%", "-1.8s"],
  ["74%", "64%", "-5.4s"],
  ["82%", "32%", "-2.8s"],
  ["88%", "74%", "-6.4s"],
  ["12%", "48%", "-3.5s"],
  ["28%", "12%", "-1.3s"],
  ["35%", "54%", "-4.8s"],
  ["43%", "82%", "-2.2s"],
  ["55%", "10%", "-5.8s"],
  ["67%", "84%", "-3.2s"],
  ["78%", "52%", "-6.8s"],
  ["91%", "20%", "-4.2s"],
  ["94%", "60%", "-1.6s"],
];

function Hero() {
  const openBook = () => {
    document.getElementById("libro")?.scrollIntoView({ behavior: "smooth", block: "center" });
    window.dispatchEvent(new Event("angelica-erjon:open-book"));
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <img className="hero-image" src={heroAtmosphere} alt="" aria-hidden="true" />
      <div className="hero-vignette" aria-hidden="true" />
      <div className="particle-field" aria-hidden="true">
        {particles.map(([left, top, delay], index) => (
          <span key={index} style={{ left, top, "--delay": delay } as CSSProperties} />
        ))}
      </div>
      <div className="hero-content section-shell">
        <div className="hero-copy">
          <p className="section-kicker">Libro digitale d'amore</p>
          <h1 id="hero-title" className="hero-logo-title">
            <img src={brandLogo} alt="ANGELICA & ERJON" />
          </h1>
          <p className="hero-subtitle">Ti amerò sempre, per sempre.</p>
          <button className="premium-button" type="button" onClick={openBook}>
            Apri il nostro libro
          </button>
        </div>
        <Book />
      </div>
      <div className="next-section-hint" aria-hidden="true" />
    </section>
  );
}

export default Hero;
