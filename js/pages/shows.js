import { TMDBService } from "../api/tmdb-service.js";
import { createTvShowCard } from "../components/tv-cards.js";

export async function renderShowPage() {
  const { results } = await TMDBService.fetchPopularTvShows();

  const container = document.querySelector("#popular-shows");
  results.forEach((show) => {
    const showCard = createTvShowCard(show);
    container.appendChild(showCard);
  });
}
