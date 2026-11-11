# Clone Task 2: Responsive Layouts

## Project Overview

This project was developed for **Web Development II – Assessment 1, Clone Task 2**.

The aim is to recreate the supplied **watch.it** movie streaming website using React, JavaScript and CSS, following the provided mobile, tablet and desktop wireframes.

The website displays six movies with their posters, titles, descriptions and Watch Now buttons.

## Technologies Used

- React (function-based components)
- JavaScript (JSX)
- HTML5
- CSS3
- Vite
- Google Fonts (Teko and Lato)

## Responsive Design

The website uses CSS Flexbox, Grid and Media Queries to adapt its layout to different screen sizes.

### Mobile (360px–719px)

- Single-column movie layout
- Navigation links hidden
- Movie posters displayed above descriptions
- Watch Now buttons below each description
- 16px standard spacing

### Tablet (720px–1023px)

- Two-column movie layout
- Navigation links displayed
- Movie posters above descriptions
- 16px small spacing and 32px large spacing

### Desktop (1024px and above)

- Maximum content width of 900px
- Featured movie displayed horizontally across the full content width
- Two-column layout for the next two movies
- Remaining movies displayed horizontally
- 16px small spacing and 48px large spacing

## Styling

The website uses the watch.it brand colour palette:

- `#070410` – Dark background
- `#231651` – Purple
- `#4DCCBD` – Turquoise
- `#EEF36A` – Yellow
- `#FFFFFF` – White

The **Teko** font is used for headings and buttons, while **Lato** is used for other text.

## Project Structure

- `src/App.jsx` – Main application component
- `src/App.css` – Application layout and responsive styles
- `src/index.css` – Global styling and typography
- `src/components/` – Reusable React components
- `src/data/` – Movie information
- `assets/` – Supplied movie poster images
- `index.html` – HTML entry point

## How to Run

1. Open the project folder in Visual Studio Code.
2. Open a terminal in the project directory.
3. Install dependencies:

   `npm install`

4. Start the development server:

   `npm run dev`

5. Open the local URL displayed in the terminal.

## Testing

The website was tested using Chrome Developer Tools at mobile, tablet and desktop viewport sizes.

The following commands were also used to check the project:

- `npm run lint`
- `npm run build`

Both completed successfully.

## Assessment Information

**Module:** Web Development II (CCO5104-20P)

**Assessment:** Assessment 1

**Task:** Clone Task 2 – Responsive Layouts

**Academic Year:** 2026–2027