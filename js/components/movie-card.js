export function createMovieCard(movie) {
  const img = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "images/no-image.jpg";
  const div = document.createElement("div");
  div.className = "card";
  div.innerHTML = `
    <div class="card">
      <a href="movie-details.html?id=${movie.id}">
        <img src="${img}" class="car-img-top" alt="${movie.title}" />
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text"><small class="text-muted">${movie.release_date}</small></p>
      </div>
    </div>
  `;
  return div;
}
