import { futureCards } from "../data/storyPages";

function FutureSection() {
  return (
    <section className="future-section section-pad" id="futuro" aria-labelledby="future-title">
      <div className="section-shell">
        <div className="future-intro">
          <p className="section-kicker">Il nostro futuro</p>
          <h2 id="future-title">Non sappiamo tutto, ma sappiamo chi vogliamo accanto.</h2>
          <p>Non sappiamo ogni cosa che ci aspetta, ma sappiamo che vogliamo viverla insieme.</p>
        </div>
        <div className="future-grid">
          {futureCards.map((card) => (
            <article className="future-card" key={card.title}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FutureSection;
