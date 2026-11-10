import { comments } from '../data/content';
import './Comments.css';

function Comments() {
  return (
    <section className="comments">
      <h2>Comments</h2>

      {comments.map((comment, index) => (
        <article key={index} className="comment">
          <h3 className="comment__username">
            {comment.name}
          </h3>

          <p className="comment__text">
            {comment.text}
          </p>
        </article>
      ))}
    </section>
  );
}

export default Comments;
