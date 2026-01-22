import { renderHomePage } from "./pages/home.js";
import { renderMovieDetails } from "./pages/movie-details.js";
import { renderSearchPage } from "./pages/search.js";
import { renderShowPage } from "./pages/shows.js";
import { renderTvShowDetails } from "./pages/tv-details.js";

const global = {
  currentPage: window.location.pathname,
};

const routes = {
  "/": renderHomePage,
  "/index.html": renderHomePage,
  "/shows.html": renderShowPage,
  "/movie-details.html": renderMovieDetails,
  "/tv-details.html": renderTvShowDetails,
  "/search.html": renderSearchPage,
};

// Highlight active link
function highlightActiveLink() {
  const links = document.querySelectorAll(".nav-link");
  links.forEach((link) => {
    if (link.getAttribute("href") === global.currentPage) {
      link.classList.add("active");
    }
  });
}

// Init App
function init() {
  const routeHandler = routes[global.currentPage];
  if (routeHandler) {
    routeHandler();
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
