export function createTvShowCard(show) {
  const img = show.poster_path
    ? `https://image.tmdb.org/t/p/w500${show.poster_path}`
    : "images/no-image.jpg";
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card">
      <a href="tv-details.html?id=${show.id}">
        <img src="${img}" class="car-img-top" alt="${show.name}" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text"><small class="text-muted">${show.first_air_date}</small></p>
      </div>
    </div>
  `;
  return div;
}
