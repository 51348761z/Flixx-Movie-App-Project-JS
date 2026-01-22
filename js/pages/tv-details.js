import { TMDBService } from "../api/tmdb-service.js";
import { createTvShowDetailsCard } from "../components/tv-details-card.js";

// Display show details
export async function renderTvShowDetails() {
  const showId = new URLSearchParams(window.location.search).get("id");
  if (!showId) return;

  const show = await TMDBService.fetchTvShowDetailsById(showId);

  // Overlay for background image
  if (show.backdrop) {
    displayBackgroundImage("show", show.backdrop);
  }

  const tvShowDetailsCard = createTvShowDetailsCard(show);
  const container = document.querySelector(".show-details");
  if (!container) return;
  container.appendChild(tvShowDetailsCard);
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
