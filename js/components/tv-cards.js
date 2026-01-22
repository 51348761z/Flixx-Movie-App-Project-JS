export function createTvShowCard(show) {
  const img = show.poster || "images/no-image.jpg";
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card">
      <a href="tv-details.html?id=${show.id}">
        <img src="${img}" class="card-img-top" alt="${show.name}" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.title || show.name}</h5>
        <p class="card-text"><small class="text-muted">${show.subtitle}</small></p>
      </div>
    </div>
  `;
  return div;
}
