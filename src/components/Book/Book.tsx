import { useEffect, useMemo, useRef, useState } from "react";
import type { TouchEvent } from "react";
import { storyPages } from "../../data/storyPages";
import BookControls from "./BookControls";
import BookPage from "./BookPage";

type FlipDirection = "next" | "prev";

type TurningState = {
  direction: FlipDirection;
  targetPage: number;
};

const FLIP_DURATION = 860;

function useSinglePageLayout() {
  const [isSinglePage, setIsSinglePage] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 720px)");
    const update = () => setIsSinglePage(mediaQuery.matches);
    update();
    mediaQuery.addEventListener("change", update);
    return () => mediaQuery.removeEventListener("change", update);
  }, []);

  return isSinglePage;
}

function Book() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [turning, setTurning] = useState<TurningState | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const touchStartRef = useRef<number | null>(null);
  const isSinglePage = useSinglePageLayout();

  const step = isSinglePage ? 1 : 2;
  const maxPage = useMemo(() => {
    if (isSinglePage) {
      return storyPages.length - 1;
    }

    return Math.max(0, Math.ceil(storyPages.length / 2) * 2 - 2);
  }, [isSinglePage]);

  useEffect(() => {
    if (!isSinglePage) {
      setCurrentPage((page) => Math.min(Math.floor(page / 2) * 2, maxPage));
    }
  }, [isSinglePage, maxPage]);

  useEffect(() => {
    const openFromHero = () => setIsOpen(true);
    window.addEventListener("angelica-erjon:open-book", openFromHero);
    return () => window.removeEventListener("angelica-erjon:open-book", openFromHero);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) {
        return;
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        turnPage("next");
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        turnPage("prev");
      }
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        window.clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const displayPage = turning ? turning.targetPage : currentPage;
  const canGoPrev = isOpen && !turning && currentPage > 0;
  const canGoNext = isOpen && !turning && currentPage < maxPage;
  const progress = isOpen ? ((Math.min(currentPage + step, storyPages.length) / storyPages.length) * 100) : 0;
  const pageLabel = isSinglePage
    ? `Pagina ${Math.min(currentPage + 1, storyPages.length)} di ${storyPages.length}`
    : `Pagine ${currentPage + 1}-${Math.min(currentPage + 2, storyPages.length)} di ${storyPages.length}`;

  function turnPage(direction: FlipDirection) {
    if (!isOpen || turning) {
      return;
    }

    const targetPage =
      direction === "next" ? Math.min(currentPage + step, maxPage) : Math.max(currentPage - step, 0);

    if (targetPage === currentPage) {
      return;
    }

    setTurning({ direction, targetPage });
    timeoutRef.current = window.setTimeout(() => {
      setCurrentPage(targetPage);
      setTurning(null);
    }, FLIP_DURATION);
  }

  function handleTouchStart(event: TouchEvent<HTMLDivElement>) {
    touchStartRef.current = event.touches[0]?.clientX ?? null;
  }

  function handleTouchEnd(event: TouchEvent<HTMLDivElement>) {
    if (touchStartRef.current === null) {
      return;
    }
    const delta = (event.changedTouches[0]?.clientX ?? touchStartRef.current) - touchStartRef.current;
    touchStartRef.current = null;
    if (Math.abs(delta) < 42) {
      return;
    }
    turnPage(delta < 0 ? "next" : "prev");
  }

  const leftPage = storyPages[displayPage];
  const rightPage = isSinglePage ? undefined : storyPages[displayPage + 1];
  const turningFront = turning
    ? turning.direction === "prev"
      ? storyPages[currentPage]
      : storyPages[isSinglePage ? currentPage : currentPage + 1]
    : undefined;
  const turningBack = turning
    ? turning.direction === "prev"
      ? storyPages[isSinglePage ? turning.targetPage : turning.targetPage + 1]
      : storyPages[turning.targetPage]
    : undefined;

  return (
    <section className="book-shell" id="libro" aria-label="Libro digitale interattivo">
      <div
        className={`book-stage ${isOpen ? "book-stage-open" : "book-stage-closed"} ${
          isSinglePage ? "book-stage-single" : ""
        }`}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {!isOpen ? (
          <button className="book-cover" type="button" onClick={() => setIsOpen(true)} aria-label="Apri il libro">
            <span className="cover-monogram" aria-hidden="true">
              A<span>&amp;</span>E
            </span>
            <span className="cover-ornament" aria-hidden="true" />
            <span className="cover-title">La nostra storia</span>
            <span className="cover-names">Angelica &amp; Erjon</span>
            <span className="cover-ribbon" aria-hidden="true" />
          </button>
        ) : (
          <div className="book-open" aria-live="polite">
            <div className="book-spine" aria-hidden="true" />
            <BookPage page={leftPage} pageNumber={displayPage + 1} side={isSinglePage ? "single" : "left"} />
            {!isSinglePage ? <BookPage page={rightPage} pageNumber={displayPage + 2} side="right" /> : null}

            {turning ? (
              <div
                className={`turning-page turning-${turning.direction} ${
                  isSinglePage ? "turning-single" : ""
                }`}
                aria-hidden="true"
              >
                <div className="turning-face turning-front">
                  <BookPage
                    page={turningFront}
                    pageNumber={turning.direction === "prev" ? currentPage + 1 : currentPage + step}
                    side={isSinglePage ? "single" : turning.direction === "prev" ? "left" : "right"}
                  />
                </div>
                <div className="turning-face turning-back">
                  <BookPage
                    page={turningBack}
                    pageNumber={turning.direction === "prev" ? turning.targetPage + step : turning.targetPage + 1}
                    side={isSinglePage ? "single" : turning.direction === "prev" ? "right" : "left"}
                  />
                </div>
              </div>
            ) : null}

            <button
              className="corner-hit corner-hit-left"
              type="button"
              onClick={() => turnPage("prev")}
              disabled={!canGoPrev}
              aria-label="Sfoglia alla pagina precedente"
            />
            <button
              className="corner-hit corner-hit-right"
              type="button"
              onClick={() => turnPage("next")}
              disabled={!canGoNext}
              aria-label="Sfoglia alla pagina successiva"
            />
          </div>
        )}
      </div>
      <BookControls
        isOpen={isOpen}
        canGoPrev={canGoPrev}
        canGoNext={canGoNext}
        pageLabel={pageLabel}
        progress={progress}
        onOpen={() => setIsOpen(true)}
        onClose={() => {
          setIsOpen(false);
          setCurrentPage(0);
          setTurning(null);
        }}
        onPrev={() => turnPage("prev")}
        onNext={() => turnPage("next")}
      />
    </section>
  );
}

export default Book;
