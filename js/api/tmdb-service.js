import { Spinner } from "../components/spiner.js";

const API_URL = "https://api.themoviedb.org/3";
const AUTH_HEADER = `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTNkYjk2Njk2NWFlYmM4MWY0ZTMxMTMxZGQzNDFkMCIsIm5iZiI6MTc2OTA2OTI4NS45OTcsInN1YiI6IjY5NzFkYWU1ZmYzYjUzMWYyMWUzNmI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PTkwN6qn-KSDjnmk9_irv9eSaIxvVG_iuZM2StRZkTc`;
const DEFAULT_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: AUTH_HEADER,
  },
};

export class TMDBService {
  static async fetchPopularMovies() {
    return this.fetchApiData("movie/popular");
  }

  static async fetchPopularTvShows() {
    return this.fetchApiData("tv/popular");
  }

  static async fetchMovieDetailsById(id) {
    return this.fetchApiData(`movie/${id}`);
  }

  static async fetchTvShowDetailsById(id) {
    return this.fetchApiData(`tv/${id}`);
  }

  static async fetchNowPlayingMovies() {
    return this.fetchApiData("movie/now_playing");
  }

  static async fetchApiData(endpoint) {
    Spinner.showSpinner();

    try {
      const response = await fetch(
        `${API_URL}/${endpoint}?language=en-US&page=1`,
        DEFAULT_OPTIONS,
      );

      if (!response.ok) {
        throw new Error(`API request failed: ${response.status}`);
      }

      return response.json();
    } finally {
      Spinner.hideSpinner();
    }
  }
}
