import { TMDBService } from "../api/tmdb-service.js";
import { createMovieCard } from "../components/movie-card.js";

export async function renderHomePage() {
  const container = document.querySelector("#popular-movies");
  if (!container) return;

  const { results } = await TMDBService.fetchPopularMovies();

  await displaySlider();

  results.forEach((movie) => {
    const movieCard = createMovieCard(movie);
    container.appendChild(movieCard);
  });
}

// Display Slider Movies
async function displaySlider() {
  const { results } = await TMDBService.fetchNowPlayingMovies();
  const wrapper = document.querySelector(".swiper-wrapper");
  if (!wrapper || !results?.length) return;

  wrapper.innerHTML = "";

  const slides = results
    .map((movie) => {
      return `
        <div class="swiper-slide">
          <a href="movie-details.html?id=${movie.id}">
            <img src="${movie.poster}" alt="${movie.title}" />
          </a>
          <h4 class="swiper-rating">
            <i class="fas fa-star text-secondary"> ${movie.rating} / 10</i>
          </h4>
        </div>`;
    })
    .join("");

  wrapper.insertAdjacentHTML("beforeend", slides);
  initSwiper();
}

function initSwiper() {
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    breakpoints: {
      500: {
        slidesPerView: 2,
      },
      700: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}
