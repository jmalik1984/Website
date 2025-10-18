# YRJ Beauty Services Website

This project contains a static, single-page marketing website for **YRJ Beauty Services**.

## Prerequisites
- A modern desktop or mobile web browser (Chrome, Firefox, Edge, or Safari recommended)
- Optionally, a simple HTTP server such as Python's `http.server` module for local hosting

## Running the Site Locally

### Option 1: Open the HTML File Directly
1. Download or clone this repository to your machine.
2. Locate the `index.html` file.
3. Double-click `index.html` to open it in your preferred browser.
4. Verify that the navigation links, appointment form, and interactive elements respond as expected.

> **Note:** Some browsers apply stricter security policies to files opened directly from disk, which can affect loading of fonts or scripts. If you encounter issues, use Option 2.

### Option 2: Serve the Site via a Local HTTP Server
1. Ensure you have Python 3 installed (most systems do).
2. Open a terminal and navigate to the project directory:
   ```bash
   cd path/to/Website
   ```
3. Start a lightweight web server:
   ```bash
   python3 -m http.server 8000
   ```
4. Visit `http://localhost:8000/index.html` in your browser.
5. Interact with the page to confirm animations, smooth scrolling, and appointment confirmation messages work correctly.
6. When finished, stop the server with `Ctrl+C` in the terminal.

## Project Structure
- `index.html` – Main page markup with hero, services, packages, appointment, location, and contact sections.
- `styles.css` – Global styles, responsive layout rules, and interactive visual states.
- `script.js` – JavaScript behaviors for mobile navigation, smooth scrolling, form feedback, and package quick-fill buttons.

## Testing Checklist
- Confirm the navigation menu toggles on mobile viewports.
- Submit the appointment form and observe the confirmation banner.
- Use package quick-fill buttons to populate the appointment form.
- Ensure contact links (phone, email, WhatsApp) open the appropriate applications.
- Resize the browser window to verify responsive design and readability.

## Deployment
Because the site is fully static, it can be hosted on any static file hosting service (e.g., GitHub Pages, Netlify, Vercel, AWS S3). Simply upload the three files (`index.html`, `styles.css`, `script.js`).
