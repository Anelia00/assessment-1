import SocialIcons from './SocialIcons'
import { authorBio } from '../data/content'
import './Author.css'

/* Author section with a short bio, round photo and social media icons */
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
