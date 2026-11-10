import Header from './components/Header';
import Article from './components/Article';
import AlbumGrid from './components/AlbumGrid';
import Author from './components/Author';
import Comments from './components/Comments';
import Footer from './components/Footer';
import './App.css';

/**
 * Main Application Component
 *
 * Acts as the entry point for the website's page layout.
 * Combines the header, article, album gallery, author
 * profile, comments section, and footer.
 *
 * Uses separate React components to keep the application
 * organised, readable, and easier to maintain.
 */
function App() {
  return (
    <>
      <Header />

      <main id="blog" className="content">
        <Article />
        <AlbumGrid />
        <Author />
        <Comments />
      </main>

      <Footer />
    </>
  );
}

export default App;
