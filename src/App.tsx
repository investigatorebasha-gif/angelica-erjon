import Footer from "./components/Footer";
import FutureSection from "./components/FutureSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SpecialSection from "./components/SpecialSection";
import Timeline from "./components/Timeline";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <section className="story-section section-pad" id="storia" aria-labelledby="story-title">
          <div className="section-shell story-grid">
            <div>
              <p className="section-kicker">La nostra storia</p>
              <h2 id="story-title">Una storia nata tra nero, verde e destino.</h2>
            </div>
            <div className="story-copy">
              <p>
                Questo sito custodisce il percorso di Angelica ed Erjon: la sagra del
                2022, il profilo ritrovato nel 2025, i messaggi, gli incontri, le
                prove difficili e la scelta di restare una squadra.
              </p>
              <blockquote>Tra tutti i colori del mondo, io sceglierei sempre te.</blockquote>
              <p>
                Il libro digitale raccoglie una versione elegante e pubblicabile della
                storia scritta da Angelica, con pagine pensate per essere sostituite o
                ampliate facilmente quando vorrete aggiungere nuove parole.
              </p>
            </div>
          </div>
        </section>
        <Timeline />
        <SpecialSection />
        <FutureSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
