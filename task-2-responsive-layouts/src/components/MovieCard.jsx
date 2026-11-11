import Button from './Button'
import './MovieCard.css'

// Reusable movie card showing the poster, title, description and button
// The variant decides which layout to use on desktop
function MovieCard({ movie, variant }) {
  return (
    <article className={`movie-card movie-card--${variant}`}>
      <img className="movie-card__poster" src={movie.poster} alt={`${movie.title} poster`} />
      <div className="movie-card__body">
        <div className="movie-card__text">
          <h2 className="movie-card__title">{movie.title}</h2>
          <p className="movie-card__description">{movie.description}</p>
        </div>
        <Button className="movie-card__button">Watch now</Button>
      </div>
    </article>
  )
}

export default MovieCard
