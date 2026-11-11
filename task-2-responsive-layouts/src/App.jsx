import Header from './components/Header'
import MovieCard from './components/MovieCard'
import { movies } from './data/movies'
import './App.css'

// Decides how each movie card should look on desktop.
// The first movie is featured, the next two are standard,
// and the last three use a wider layout.
function getVariant(index) {
  if (index === 0) return 'feature'
  if (index <= 2) return 'standard'
  return 'wide'
}

function App() {
  return (
    <>
      {/* Header with the watch.it logo and navigation */}
      <Header />

      {/* Display all movies using the same MovieCard component */}
      <main className="movie-list">
        {movies.map((movie, index) => (
          <MovieCard key={movie.id} movie={movie} variant={getVariant(index)} />
        ))}
      </main>
    </>
  )
}

export default App
