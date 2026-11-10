import SocialIcons from './SocialIcons'
import { authorBio } from '../data/content'
import './Author.css'

/**
 * Author Profile Component
 *
 * Displays information about the blog article's author.
 * Includes the author's profile picture, biography,
 * and related profile information.
 */
function Author() {
  return (
    <section className="author">
      <div className="author__bio">
        <h2>The Author</h2>
        <p>{authorBio}</p>
      </div>
      <img
        className="author__photo"
        src="/images/profile_picture.jpg"
        alt="Photo of the author"
      />
      <SocialIcons direction="column" />
    </section>
  )
}

export default Author
