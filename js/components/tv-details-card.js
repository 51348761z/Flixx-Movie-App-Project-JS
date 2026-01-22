export function createTvShowDetailsCard(show) {
  const img = show.poster || "images/no-image.jpg";
  const rating = show.rating || "0.0";
  const lastAirDate = show.last_air_date || "N/A";
  const lastEpisodeDate = show.last_episode_to_air?.air_date || "N/A";
  const genres = show.genres || [];
  const companies = show.production_companies || [];
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="details-top">
          <div>
            <img
              src="${img}"
              alt="${show.name}"
              class="card-img-top"
            />
          </div>
          <div>
            <h2>${show.name}</h2>
            <p>
              <i class="fas fastart text-primary">${rating} / 10</i>
            </p>
            <p class="text-muted">Last Air Date: ${lastAirDate}</p>
            <p>${show.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${genres.map((genre) => `<li>${genre.name}</li>`).join("")}
            </ul>
            <a href="${show.homepage || "#"}" target="_blank" class="btn">Visit Showshow Homepage</a>
          </div>
        </div>

        <div class="details-bottom">
          <h2>Show info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes ?? 0}</li>
            <li><span class="text-secondary">Last Episode To Air:</span> ${lastEpisodeDate}</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${companies.map((company) => company.name).join(", ")}</div>
        </div>
      `;
  return div;
}
