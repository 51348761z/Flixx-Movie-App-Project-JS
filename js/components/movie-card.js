export function createMovieCard(movie) {
  const img = movie.poster || "images/no-image.jpg";
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card">
      <a href="movie-details.html?id=${movie.id}">
        <img src="${img}" class="card-img-top" alt="${movie.title}" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text"><small class="text-muted">${movie.subtitle}</small></p>
      </div>
    </div>
  `;
  return div;
}
