import Header from './components/Header';
import Article from './components/Article';
import AlbumGrid from './components/AlbumGrid';
import Author from './components/Author';
import Comments from './components/Comments';
import Footer from './components/Footer';
import './App.css';

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
