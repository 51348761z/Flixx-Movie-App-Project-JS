import { API_URL } from "../config/constants.js";
import {
  buildBackdrop,
  buildPoster,
  formatCurrency,
  formatDate,
  formatRating,
} from "../utils/format.js";
import { getJSON } from "./http.js";

export class TMDBService {
  static async fetchPopularMovies() {
    const data = await this.fetchApiData("movie/popular");
    return {
      ...data,
      results: data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        subtitle: formatDate(movie.release_date),
        poster: buildPoster(movie.poster_path),
        rating: formatRating(movie.vote_average),
      })),
    };
  }

  static async fetchPopularTvShows() {
    const data = await this.fetchApiData("tv/popular");
    return {
      ...data,
      results: data.results.map((show) => ({
        id: show.id,
        title: show.name,
        subtitle: formatDate(show.first_air_date),
        poster: buildPoster(show.poster_path),
        rating: formatRating(show.vote_average),
      })),
    };
  }

  static async fetchMovieDetailsById(id) {
    const movie = await this.fetchApiData(`movie/${id}`);
    return {
      ...movie,
      poster: buildPoster(movie.poster_path),
      backdrop: buildBackdrop(movie.backdrop_path),
      rating: formatRating(movie.vote_average),
      release_date: formatDate(movie.release_date),
      budget: formatCurrency(movie.budget),
      revenue: formatCurrency(movie.revenue),
      runtime: movie.runtime || 0,
    };
  }

  static async fetchTvShowDetailsById(id) {
    const show = await this.fetchApiData(`tv/${id}`);
    return {
      ...show,
      poster: buildPoster(show.poster_path),
      backdrop: buildBackdrop(show.backdrop_path),
      rating: formatRating(show.vote_average),
      last_air_date: formatDate(show.last_air_date),
      last_episode_to_air: show.last_episode_to_air || {},
    };
  }

  static async fetchNowPlayingMovies() {
    const data = await this.fetchApiData("movie/now_playing");
    return {
      ...data,
      results: data.results.map((movie) => ({
        id: movie.id,
        title: movie.title,
        poster: buildPoster(movie.poster_path),
        rating: formatRating(movie.vote_average),
      })),
    };
  }

  static async fetchSearch({ type = "movie", query = "", page = 1 }) {
    const searchType = type === "tv" ? "tv" : "movie";
    const params = new URLSearchParams({ query, page, language: "en-US" });

    const data = await this.fetchApiData(
      `search/${searchType}?${params.toString()}`,
    );

    return {
      ...data,
      results: data.results.map((item) => ({
        id: item.id,
        title: item.title || item.name,
        subtitle: formatDate(item.release_date || item.first_air_date),
        poster: buildPoster(item.poster_path),
        rating: formatRating(item.vote_average),
      })),
    };
  }

  static async fetchApiData(endpoint) {
    return getJSON(`${API_URL}/${endpoint}`);
  }
}
