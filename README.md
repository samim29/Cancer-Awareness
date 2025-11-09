# Cancer Awareness & Support

A small, static website to share cancer awareness information, provide a contact form (no backend), and show rotating inspirational quotes. This repository contains the source HTML, CSS and JavaScript for a minimal informational site suitable for local hosting or simple static deployment.

## Features

- Responsive, mobile-friendly layout
- Contact form (client-side only; no backend) with inline validation message
- Rotating inspirational quotes (tries remote APIs and falls back to local quotes when remote fetch fails)
- Lightweight, dependency-free (vanilla HTML/CSS/JS)


## Project structure

- `index.html` — main page markup
- `style.css` — site styling and responsive rules
- `script.js` — client-side JS: contact form handling and quote fetching logic
- `README.md` — this file

## Notes about quotes and offline behavior

The application attempts to fetch quotes from public quote APIs. If remote fetches fail (for example due to network issues or certificate errors), the script falls back to a small set of built-in quotes so the UI still displays content. The site no longer shows an on-page offline banner; failures are logged to the browser console.

## Development ideas / next steps

- Add a backend to accept contact form submissions (email or database)
- Add accessibility improvements (ARIA landmarks, improved focus states)
- Include additional content pages (resources, support links, donation/contact info)
- Add tests or a simple GitHub Pages deployment workflow

## Contributing

Contributions are welcome. Open an issue or submit a pull request with a brief description of your change.

## License

This repository does not include a license file by default. If you'd like to apply a license (MIT, Apache, etc.), add a `LICENSE` file to the repository and update this section.

---

Recent change: removed the visible offline status/banner UI; the quote fetching logic still falls back to local quotes and logs failures to the console.