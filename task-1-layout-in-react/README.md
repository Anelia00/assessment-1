# Clone Task 1: Layout in React

## Project Overview

This project was developed for **Web Development II – Assessment 1, Clone Task 1**.

The aim of this task is to recreate the supplied **Erased Tapes Records** blog webpage using React, JavaScript and CSS, following the provided wireframe and design specifications.

The website is designed to be responsive across desktop, tablet and mobile screen sizes.

## Technologies Used

- React – for building reusable components.
- JavaScript – for application logic and content organisation.
- CSS3 – for layout, typography and responsive styling.
- Vite – for project development and building.
- HTML5 – for the webpage structure.

## How to Run the Project

1. Download or clone this GitHub repository.
2. Open the project folder in Visual Studio Code.
3. Open a terminal inside the project folder.
4. Install the required dependencies:

   `npm install`

5. Start the development server:

   `npm run dev`

6. Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

To create a production build, run:

`npm run build`

To check the code using ESLint, run:

`npm run lint`

## Project Structure

The project is organised into reusable React components, with separate CSS files for styling.

- `src/App.jsx` – combines the main webpage components.
- `src/App.css` – contains the main application styling.
- `src/index.css` – defines global styles and typography.
- `src/main.jsx` – renders the React application.
- `src/articleData.js` – stores article-related data.
- `src/data/content.js` – contains website content data.
- `src/components/` – contains the individual React components and their stylesheets.
- `public/images/` – contains the images, logos and social media icons used by the website.

### React Components

- **Header** – displays the website logo and navigation.
- **NavLinks** – manages the navigation links.
- **Article** – displays the main blog article.
- **AlbumGrid** – presents the featured album artwork.
- **Author** – displays the author's profile information.
- **Comments** – contains the reader comments section.
- **Footer** – displays the footer content and navigation.
- **SocialIcons** – provides reusable social media icons.

All components use function-based React components.

## Layout and Responsive Design

The website uses several CSS techniques to recreate the supplied design.

**CSS Flexbox**

Used to organise navigation links, header elements, author information and social media icons.

**CSS Grid**

Used to arrange album artwork into a structured gallery, including a large featured image and smaller album covers.

**CSS Columns**

Used to display the article text in multiple columns on larger screens, with fewer columns on smaller devices.

**CSS Media Queries**

Used to adapt the layout for desktop, tablet and mobile screen sizes.

## Typography and Styling

The website follows the visual requirements provided in the assessment specification.

- **Protest Guerrilla** – used for headings.
- **Josefin Sans** – used for body text.
- **White** – main content background.
- **#e9e9e9** – page background.
- **#14181d** – footer background.
- **200px** – specified width for the logo and author image.
- **50px** – specified width for social media icons.

Spacing and typography have been adjusted to improve readability while maintaining the supplied design.

## Code Organisation

The project uses reusable React components to keep different sections of the webpage separate.

Component-specific stylesheets help organise the CSS and make the code easier to maintain.

Comments have been included throughout the source files to explain the purpose of components, layout sections and styling decisions.

## Additional Notes

The article content and images are based on the materials provided for the assessment.

Navigation links direct users to relevant sections of the webpage. Social media icons link to the corresponding platforms.

The responsive layout has been tested using browser developer tools at different screen sizes.

## Testing

The following checks have been completed:

- The React application runs successfully using `npm run dev`.
- ESLint completes without reported errors.
- The production build succeeds using `npm run build`.
- The project runs successfully after being downloaded from GitHub and installing its dependencies.
- Desktop, tablet and mobile layouts have been reviewed.

## Submission

This project forms part of **Web Development II – Assessment 1**.

The source code is maintained in GitHub and includes the React components, CSS stylesheets, project assets and setup instructions.

