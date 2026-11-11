import './SocialIcons.css';

/**
 * Social Icons Component
 *
 * Displays social media icons linking to external platforms.
 * Keeps the icons in a reusable React component so they
 * can be displayed consistently across the website.
 */
function SocialIcons({ direction = 'row' }) {
  return (
    <div className={`social-icons ${direction}`}>
      <a href="https://www.facebook.com/" aria-label="Facebook">
        <img src="/images/facebook-icon.png" alt="Facebook" />
      </a>

      <a href="https://www.instagram.com/" aria-label="Instagram">
        <img src="/images/instagram-icon.svg" alt="Instagram" />
      </a>

      <a href="https://x.com/" aria-label="X">
  <svg
    width="50"
    height="50"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.828L0 1.154h7.594l5.243 6.932 6.064-6.933Zm-1.29 19.49h2.039L6.486 3.24H4.298l13.313 17.403Z"
    />
  </svg>
</a> 
    </div>
  );
}

export default SocialIcons;
