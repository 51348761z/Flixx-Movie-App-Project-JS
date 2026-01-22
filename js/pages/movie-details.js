import { TMDBService } from "../api/tmdb-service.js";
import { createMovieDetailsCard } from "../components/movie-details-card.js";

// Display movie details
export async function renderMovieDetails() {
  const movieId = window.location.search.split("=")[1];
  const movie = await TMDBService.fetchMovieDetailsById(movieId);

  // Overlay for background image
  displayBackgroundImage("movie", movie.backdrop_path);

  const movieDetailsCard = createMovieDetailsCard(movie);
  document.querySelector(".movie-details").appendChild(movieDetailsCard);
}

// Display Backdrop On Details Page
function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
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
    document.querySelector("#show-details").appendChild(overlayDiv);
  }
}
