import { TMDBService } from "../api/tmdb-service.js";
import { createMovieDetailsCard } from "../components/movie-details-card.js";

// Display movie details
export async function renderMovieDetails() {
  const movieId = window.location.search.split("=")[1];
  const movie = await TMDBService.fetchMovieDetailsById(movieId);

  const movieDetailsCard = createMovieDetailsCard(movie);
  document.querySelector(".movie-details").appendChild(movieDetailsCard);
}
