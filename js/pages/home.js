import { TMDBService } from "../api/tmdb-service.js";
import { createMovieCard } from "../components/movie-card.js";

export async function renderHomePage() {
  const { results } = await TMDBService.fetchPopularMovies();

  const container = document.querySelector("#popular-movies");
  results.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
  });
}
