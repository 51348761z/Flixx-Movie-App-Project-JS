import { TMDBService } from "../api/tmdb-service.js";
import { createMovieDetailsCard } from "../components/movie-details-card.js";

// Display movie details
export async function renderMovieDetails() {
  const movieId = new URLSearchParams(window.location.search).get("id");
  if (!movieId) return;

  const movie = await TMDBService.fetchMovieDetailsById(movieId);

  // Overlay for background image
  if (movie.backdrop) {
    displayBackgroundImage("movie", movie.backdrop);
  }

  const movieDetailsCard = createMovieDetailsCard(movie);
  const container = document.querySelector(".movie-details");
  if (!container) return;
  container.appendChild(movieDetailsCard);
}

// Display Backdrop On Details Page
function displayBackgroundImage(type, backgroundUrl) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.backgroundImage = `url(${backgroundUrl})`;
  overlayDiv.style.backgroundSize = "cover";
  overlayDiv.style.backgroundPosition = "center";
  overlayDiv.style.backgroundRepeat = "no-repeat";
  overlayDiv.style.width = "100vw";
  overlayDiv.style.height = "100vh";
  overlayDiv.style.position = "absolute";
  overlayDiv.style.top = "0";
  overlayDiv.style.left = "0";
  overlayDiv.style.zIndex = "-1";
  overlayDiv.style.opacity = "0.15";

  if (type === "movie") {
    document.querySelector(".movie-details").appendChild(overlayDiv);
  } else {
    document.querySelector(".show-details").appendChild(overlayDiv);
  }
}
