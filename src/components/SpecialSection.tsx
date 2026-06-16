import { loveReasons } from "../data/storyPages";

function SpecialSection() {
  return (
    <section className="special-section section-pad" id="speciale" aria-labelledby="special-title">
      <div className="section-shell special-grid">
        <div className="special-copy">
          <p className="section-kicker">Perché sei speciale</p>
          <h2 id="special-title">Come una promessa scritta piano, resti nel cuore.</h2>
          <p>
            Ci sono amori che non hanno bisogno di fare rumore: vivono nei silenzi dolci,
            nei pensieri che tornano la sera e in quella tenerezza che sa restare anche
            quando il mondo sembra lontano.
          </p>
          <p>
            Tu sei il verso più delicato della mia storia, la carezza nascosta tra le pagine,
            il profumo di un futuro immaginato a bassa voce. Se l'amore fosse una poesia
            francese, avrebbe il tuo nome scritto tra luce, pelle e destino.
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
