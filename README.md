# Ezra Nkala's Portfolio Website

<!-- ![Screenshot of the Website](images/screenshot.png) Add a screenshot if available -->

A modern, responsive portfolio website built with **HTML**, **CSS**, and **JavaScript**. The website features a clean design, dark/light theme toggling, smooth scrolling, and a mobile-friendly layout.

---

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices.
- **Dark/Light Mode**: Automatically adapts to the user's system preference or allows manual toggling.
- **Smooth Scrolling**: Smooth navigation to different sections of the page.
- **Font Switcher**: Toggle between monospace and standard fonts for a personalized experience.
- **Project Showcase**: Display projects with links to learn more or visit external resources.
- **Social Media Integration**: Links to email, Twitter, GitHub, HackerRank, Reddit, and Duolingo.
- **Dynamic Footer**: Automatically updates the current year in the footer.

---

## How to Use

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ezrankala/portfolio-website.git
   cd portfolio-website
   ```

2. **Open the Project**:
   - Open the `index.html` file in your browser to view the website.

3. **Customize**:
   - Replace the `profile_black_v0.png` image in the `images/profile/` folder with your own profile picture.
   - Update the social media links in the `index.html` file to point to your profiles.
   - Modify the project details in the `Projects` section to showcase your work.

4. **Deploy**:
   - Host the website on platforms like GitHub Pages, Netlify, or Vercel for free.

---

## Code Overview

### HTML Structure
- **Header**: Includes a logo, navigation links, and a theme switcher.
- **Hero Section**: Displays a profile image and a tagline.
- **About Me**: A brief introduction about yourself.
- **Projects**: Showcases your projects with links to details or external resources.
- **Contact**: Links to your social media profiles and email.
- **Footer**: Displays the current year dynamically and includes a font switcher.

### CSS Styling
- **Variables**: Uses CSS variables for colors, fonts, and themes.
- **Responsive Design**: Media queries ensure the website looks great on all devices.
- **Dark/Light Mode**: Switches between themes based on user preference or manual selection.
- **Animations**: Smooth transitions for theme toggling and hover effects.

### JavaScript Functionality
- **Theme Toggling**: Switches between dark and light modes and saves the preference in `localStorage`.
- **Font Switcher**: Toggles between monospace and standard fonts and saves the preference in `localStorage`.
- **Smooth Scrolling**: Enables smooth scrolling for navigation links.
- **Mobile Menu**: Handles the display of the navigation menu on mobile devices.
- **Dynamic Year**: Updates the footer with the current year automatically.

---

## Folder Structure

```
portfolio-website/
├── index.html
├── styles/
│   └── styles.css
├── scripts/
│   └── script.js
├── images/
│   ├── profile/
│   │   └── profile_black_v0.png
│   ├── icons/
│   │   ├── sun.svg
│   │   ├── moon.svg
│   │   ├── email_icon.svg
│   │   ├── twitter_icon2.svg
│   │   ├── github_icon2.svg
│   │   ├── hackerrank_icon2.svg
│   │   ├── reddit_icon2.svg
│   │   └── duolingo-icon.svg
└── README.md
```

---

## Dependencies

- **Fonts**: Uses system fonts (`Segoe UI` for standard and `Courier` for monospace).
- **Icons**: SVG icons for social media and theme toggling.

---

## License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute it as needed.

---

## Credits

- **Ezra Nkala**: Project creator and developer.
- **Icons**: SVG icons from [FlatIcon](https://www.flaticon.com/) or similar sources.

---