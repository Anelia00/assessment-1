/**
 * Album Gallery Component
 *
 * Displays the album artwork featured in the blog.
 * Uses a reusable React component to organise the images.
 * The gallery layout adapts to different screen sizes.
 */
import './AlbumGrid.css';

// Album images are saved in the public/images folder
const albums = [
  {
    src: '/images/all-encores.jpg',
    alt: 'All Encores album cover'
  },
  {
    src: '/images/articulation.jpg',
    alt: 'Articulation album cover'
  },
  {
    src: '/images/blurred.jpg',
    alt: 'Blurred album cover'
  },
  {
    src: '/images/eulogy-for-evolution.jpg',
    alt: 'Eulogy for Evolution album cover'
  },
  {
    src: '/images/the-cell.jpg',
    alt: 'The Cell album cover'
  }
];

// Show one large album next to four smaller ones
function AlbumGrid() {
  return (
    <section className="album-grid" aria-label="Featured albums">
      {albums.map((album, index) => (
        <img
          key={album.alt}
          className={index === 0 ? 'album-grid__featured' : ''}
          src={album.src}
          alt={album.alt}
        />
      ))}
    </section>
  );
}

export default AlbumGrid;
