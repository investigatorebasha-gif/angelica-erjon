type BookControlsProps = {
  isOpen: boolean;
  canGoPrev: boolean;
  canGoNext: boolean;
  pageLabel: string;
  progress: number;
  onOpen: () => void;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
};

function BookControls({
  isOpen,
  canGoPrev,
  canGoNext,
  pageLabel,
  progress,
  onOpen,
  onClose,
  onPrev,
  onNext,
}: BookControlsProps) {
  return (
    <div className="book-controls" aria-label="Controlli del libro">
      {!isOpen ? (
        <button className="book-control book-control-wide" type="button" onClick={onOpen}>
          Apri
        </button>
      ) : (
        <>
          <button
            className="book-control"
            type="button"
            onClick={onPrev}
            disabled={!canGoPrev}
            aria-label="Pagina precedente"
          >
            ‹
          </button>
          <div className="book-progress-wrap" aria-live="polite">
            <span>{pageLabel}</span>
            <div className="book-progress" aria-hidden="true">
              <span style={{ width: `${progress}%` }} />
            </div>
          </div>
          <button
            className="book-control"
            type="button"
            onClick={onNext}
            disabled={!canGoNext}
            aria-label="Pagina successiva"
          >
            ›
          </button>
          <button className="book-control book-control-wide" type="button" onClick={onClose}>
            Copertina
          </button>
        </>
      )}
    </div>
  );
}

export default BookControls;
