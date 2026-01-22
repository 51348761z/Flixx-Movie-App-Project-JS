export function createTvShowDetailsCard(show) {
  const img = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : "images/no-image.jpg";
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
              <i class="fas fastart text-primary">${show.vote_average.toFixed(1)} / 10</i>
            </p>
            <p class="text-muted">Last Air Date: ${show.last_air_date}</p>
            <p>${show.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${show.genres.map((genre) => `<li>${genre.name}<li/>`).join("")}
            </ul>
            <a href="${show.homepage}" target="_blank" class="btn">Visit Showshow Homepage</a>
          </div>
        </div>

        <div class="details-bottom">
          <h2>Show info</h2>
          <ul>
            <li><span class="text-secondary">Number of Episodes:</span> ${show.number_of_episodes}</li>
            <li><span class="text-secondary">Last Episode To Air:</span> ${show.last_episode_to_air.air_date}</li>
            <li><span class="text-secondary">Status:</span> ${show.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${show.production_companies.map((company) => company.name).join(", ")}</div>
        </div>
      `;
  return div;
}

function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
