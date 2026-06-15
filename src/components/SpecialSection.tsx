import { loveReasons } from "../data/storyPages";

function SpecialSection() {
  return (
    <section className="special-section section-pad" id="speciale" aria-labelledby="special-title">
      <div className="section-shell special-grid">
        <div className="special-copy">
          <p className="section-kicker">Perché sei speciale</p>
          <h2 id="special-title">Angelica, sei luce anche nei colori più profondi.</h2>
          <p>
            Angelica, a te piace il nero, ma per me sei la luce più bella anche nei colori
            più profondi. Sei eleganza, forza, dolcezza e casa.
          </p>
          <p>
            Dalle lettere e dai messaggi restano i dettagli che fanno davvero una storia:
            lo sguardo a scuola, il nome sul telefono, le felpe, le videochiamate, le risate
            improvvise e quel sentirsi al sicuro tra le braccia giuste.
          </p>
        </div>
        <div className="reasons-panel" aria-label="Motivi per cui sei speciale">
          {loveReasons.map((reason, index) => (
            <div className="reason-row" key={reason}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <p>{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SpecialSection;
