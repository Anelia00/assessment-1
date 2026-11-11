import { articleSections } from '../articleData';
import './Article.css';

/**
 * Article Component
 *
 * Displays the main blog article about Erased Tapes Records.
 * Organises the article content into sections to match
 * the supplied website layout.
 */
function Article() {
  return (
    <article className="article">
      <h1 className="article__title">
        Erased Tapes:
        <span className="article__subtitle">
          Exploring the Sonic Frontier
        </span>
      </h1>

      <p className="article__intro">
        Lorem ipsum odor amet, consectetuer adipiscing elit.
        Mi eu scelerisque turpis posuere tempor? Leo
        condimentum himenaeos molestie elit; maximus
        iaculis proin nulla. Ullamcorper nibh cras conubia
        suscipit dapibus sagittis, facilisi habitant vivamus.
        Etiam fusce posuere himenaeos ipsum commodo
        sollicitudin himenaeos nec.
      </p>

      <div className="article__columns">
        {articleSections.map((section, index) => {
          const headingAfter = index === 0 ? 0 : 1;

          return (
            <section
              key={index}
              className={`article-column article-column-${index + 1}`}
            >
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <div key={paragraphIndex}>
                  {paragraphIndex === headingAfter && (
                    <h2>{section.heading}</h2>
                  )}
                  <p>{paragraph}</p>
                </div>
              ))}
            </section>
          );
        })}
      </div>
    </article>
  );
}

export default Article;
