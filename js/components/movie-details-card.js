export function createMovieDetailsCard(movie) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "images/no-image.jpg";
  const rating = Number(movie.vote_average ?? 0).toFixed(1);
  const releaseDate = movie.release_date || "N/A";
  const genres = movie.genres || [];
  const companies = movie.production_companies || [];
  const div = document.createElement("div");
  div.innerHTML = `
        <div class="details-top">
          <div>
            <img
              src="${img}"
              alt="${movie.title}"
              class="card-img-top"
            />
          </div>
          <div>
            <h2>${movie.title}</h2>
            <p>
              <i class="fas fastart text-primary">${rating} / 10</i>
            </p>
            <p class="text-muted">Release Date: ${releaseDate}</p>
            <p>${movie.overview}</p>
            <h5>Genres</h5>
            <ul class="list-group">
              ${genres.map((genre) => `<li>${genre.name}</li>`).join("")}
            </ul>
            <a href="${movie.homepage || "#"}" target="_blank" class="btn">Visit Movie Homepage</a>
          </div>
        </div>

        <div class="details-bottom">
          <h2>Movie info</h2>
          <ul>
            <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget || 0)}</li>
            <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue || 0)}</li>
            <li><span class="text-secondary">Runtime:</span> ${addCommasToNumber(movie.runtime || 0)} minutes</li>
            <li><span class="text-secondary">Status:</span> ${movie.status}</li>
          </ul>
          <h4>Production Companies</h4>
          <div class="list-group">${companies.map((company) => company.name).join(", ")}</div>
        </div>
      `;
  return div;
}

function addCommasToNumber(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
