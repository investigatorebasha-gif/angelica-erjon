import { timelineMoments } from "../data/storyPages";

function Timeline() {
  return (
    <section className="timeline-section section-pad" id="momenti" aria-labelledby="moments-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-kicker">I nostri momenti</p>
          <h2 id="moments-title">Date che hanno cambiato il peso delle giornate.</h2>
        </div>
        <div className="timeline">
          {timelineMoments.map((moment) => (
            <article className="timeline-card" key={`${moment.date}-${moment.title}`}>
              <div className="timeline-photo" aria-label={`Spazio foto: ${moment.photoLabel}`}>
                <span>{moment.photoLabel}</span>
              </div>
              <div>
                <time>{moment.date}</time>
                <h3>{moment.title}</h3>
                <p>{moment.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
