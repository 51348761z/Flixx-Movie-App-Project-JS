import { renderHomePage } from "./pages/home.js";
import { renderMovieDetails } from "./pages/movie-details.js";
import { renderShowPage } from "./pages/shows.js";
import { renderTvShowDetails } from "./pages/tv-details.js";

const global = { currentPage: window.location.pathname };

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
  switch (global.currentPage) {
    case "/":
    case "/index.html":
      console.log("Home");
      renderHomePage();
      break;
    case "/shows.html":
      console.log("Shows");
      renderShowPage();
      break;
    case "/movie-details.html":
      console.log("Movie Details");
      renderMovieDetails();
      break;
    case "/tv-details.html":
      console.log("TV Details");
      renderTvShowDetails();
      break;
    case "/search.html":
      console.log("Search");
      break;
  }

  highlightActiveLink();
}

document.addEventListener("DOMContentLoaded", init);
