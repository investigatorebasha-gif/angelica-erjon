import type { StoryPage } from "../../data/storyPages";

type BookPageProps = {
  page?: StoryPage;
  pageNumber?: number;
  side: "left" | "right" | "single";
};

function BookPage({ page, pageNumber, side }: BookPageProps) {
  if (!page) {
    return (
      <article className={`book-page book-page-${side} book-page-blank`} aria-hidden="true">
        <div className="paper-grain" />
      </article>
    );
  }

  return (
    <article className={`book-page book-page-${side}`}>
      <div className="paper-grain" aria-hidden="true" />
      <header className="book-page-header">
        <span>{page.date ?? "Angelica & Erjon"}</span>
        <span aria-hidden="true">✦</span>
      </header>
      <div className="book-page-body">
        <h3>{page.title}</h3>
        <p>{page.text}</p>
        {page.highlight ? <blockquote>{page.highlight}</blockquote> : null}
      </div>
      {pageNumber ? <footer className="book-page-number">{pageNumber}</footer> : null}
    </article>
  );
}

export default BookPage;
