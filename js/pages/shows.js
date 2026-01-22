import { TMDBService } from "../api/tmdb-service.js";
import { createTvShowCard } from "../components/tv-cards.js";

export async function renderShowPage() {
  const container = document.querySelector("#popular-shows");
  if (!container) return;

  const { results } = await TMDBService.fetchPopularTvShows();

  results.forEach((show) => {
    const showCard = createTvShowCard(show);
    container.appendChild(showCard);
  });
}
