# Flixx Movie App 🍿

Static frontend that showcases movies and TV shows from TMDB. Deployed on Vercel: <https://flixx-movie-app-project-js.vercel.app/>

## Features

- 🏠 Home: now playing slider, popular movies grid
- 📺 TV: popular TV shows grid
- 🎬 Details: movie and TV detail pages with backdrop overlay
- 🔍 Search: movie/TV search with pagination
- ⏳ Global loading spinner and inline alerts

## Tech Stack

- 🧱 HTML, CSS (base/layout/components/pages), vanilla JS
- 🌀 Swiper for carousel
- ⭐ Font Awesome icons
- ▲ Vercel static hosting

## Project Structure

```
js/
  api/        # HTTP wrapper and TMDB service
  components/ # UI components (cards, details, spinner, alert)
  pages/      # Page controllers (home, shows, search, details)
  utils/      # dom helpers, formatting
  config/     # constants (API URL, auth header, image base)
css/
  base.css layout.css components.css spinner.css alert.css
  pages/     # page-specific styles
public root: html pages, images/, lib/ (swiper, fontawesome)
```

## Local Setup

1) Clone the repo
2) Run with any static server (e.g. `npx serve .` or VS Code Live Server)
3) Open <http://localhost:3000> (or the port your server prints)

> The TMDB bearer token is embedded for demo purposes. Replace it via `js/config/constants.js` if needed.

## Development Notes

- Entry: `js/script.js` routes by pathname
- API mapping cleans TMDB responses (poster/backdrop URLs, ratings, dates)
- Components are render-only; pages handle data fetching and DOM mounting
- Pagination is wired in search page; sync URL page param if you need shareable deep links

## Deployment

- Static export: any static host works. Current live version on Vercel.
