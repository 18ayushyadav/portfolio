# Professional Portfolio Website

A modern, responsive portfolio website showcasing my skills and projects as a full-stack developer.

## Features

- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern UI**: Clean and professional design with smooth animations
- **Sections**:
  - Hero section with call-to-action
  - About me section
  - Technical skills showcase
  - Featured projects
  - Contact information with social links
  - Smooth navigation with active link highlighting

- **Technology Stack**:
  - HTML5 for semantic markup
  - CSS3 with gradients, animations, and flexbox/grid
  - Vanilla JavaScript for interactivity
  - Font Awesome icons for visual elements

## Skills Highlighted

- **C**: Systems programming, algorithms, data structures
- **Python**: Web development, automation, data analysis
- **Java**: Object-oriented design, enterprise applications
- **HTML**: Semantic markup, responsive design
- **CSS**: Styling, layouts, animations
- **XML**: Data markup, configuration files

## How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Open `index.html` in your web browser, or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js
   npx http-server
   ```

3. Visit `http://localhost:8000` (or the port shown) in your browser

## Customization

### Update Personal Information
- Edit the contact links in the "Contact" section (email, GitHub, LinkedIn, Twitter)
- Update the name in the footer

### Add Projects
- Modify the project cards in the "Projects" section with your actual projects
- Update project titles, descriptions, technologies used, and links

### Change Colors
Edit the CSS variables in `style.css`:
```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    /* ... other variables ... */
}
```

### Add More Skills
Duplicate a skill-card div in the "Skills" section and update the icon, title, and description

## Deployment Options

### GitHub Pages
1. Push your code to a GitHub repository
2. Go to repository Settings → Pages
3. Select `main` branch as source
4. Your site will be live at `https://yourusername.github.io/portfolio`

### Other Hosting
- Netlify: Connect your GitHub repo for automatic deployments
- Vercel: Similar to Netlify with easy setup
- Traditional hosting: Upload files via FTP to your web server

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## File Structure

```
portfolio/
├── index.html       # Main HTML file
├── style.css        # Styling
└── README.md        # This file
```

## Features Explained

### Smooth Scrolling
Navigation links smoothly scroll to sections with `scroll-behavior: smooth`

### Active Navigation
JavaScript tracks the current scroll position and highlights the active navigation link

### Responsive Grid
CSS Grid and Flexbox ensure the layout adapts to all screen sizes

### Hover Effects
Cards and buttons have smooth hover animations for better user interaction

## Tips for Enhancement

- Add a blog section with your latest articles
- Include a download CV/Resume button
- Add GitHub activity feed or latest projects from API
- Implement a dark mode toggle
- Add a contact form with email notifications
- Include testimonials or recommendations
- Add a timeline for work experience

## License

This project is open source and available under the MIT License.

## Contact

For questions or feedback, feel free to reach out through the contact section on the website!

---

**Note**: Replace placeholder information (email, social links, project descriptions) with your actual details before deploying.
