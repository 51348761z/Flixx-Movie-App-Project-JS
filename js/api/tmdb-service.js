import { Spinner } from "../components/spiner.js";

export class TMDBService {
  static async fetchPopularMovies() {
    return this.fetchApiData("movie/popular");
  }

  static async fetchApiData(endpoint) {
    const API_URL = "https://api.themoviedb.org/3";

    Spinner.showSpinner();
    const response = await fetch(
      `${API_URL}/${endpoint}?language=en-US&page=1`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZTNkYjk2Njk2NWFlYmM4MWY0ZTMxMTMxZGQzNDFkMCIsIm5iZiI6MTc2OTA2OTI4NS45OTcsInN1YiI6IjY5NzFkYWU1ZmYzYjUzMWYyMWUzNmI5ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PTkwN6qn-KSDjnmk9_irv9eSaIxvVG_iuZM2StRZkTc`,
        },
      },
    );

    Spinner.hideSpinner();

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    return response.json();
  }
}
