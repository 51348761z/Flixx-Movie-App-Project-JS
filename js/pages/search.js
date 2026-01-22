import { TMDBService } from "../api/tmdb-service.js";
import { createMovieCard } from "../components/movie-card.js";
import { createTvShowCard } from "../components/tv-cards.js";
import { showAlert } from "../utils/alert.js";

export async function renderSearchPage() {
  const { term, type } = parseSearchParams();
  await renderPage({ term, type, page: 1 });
}

async function renderPage({ term, type, page }) {
  const { resultsContainer, alertContainer, headingEl, paginationContainer } =
    getDomRefs();

  if (!resultsContainer || !headingEl || !paginationContainer) return;

  resetView(resultsContainer, headingEl, paginationContainer);

  if (!term) {
    showAlert("Please enter a search term", alertContainer);
    return;
  }

  const {
    results = [],
    page: currentPage = 1,
    total_pages = 1,
    total_results = 0,
  } = await TMDBService.fetchSearch({
    type,
    query: term,
    page,
  });

  if (!results.length) {
    showAlert("No results found", alertContainer);
    return;
  }

  renderHeading(headingEl, {
    term,
    totalResults: total_results,
    count: results.length,
  });
  renderSearchResults(results, type, resultsContainer);
  renderPagination(paginationContainer, currentPage, total_pages, (nextPage) =>
    renderPage({ term, type, page: nextPage }),
  );
}

function parseSearchParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    term: params.get("search-term")?.trim() || "",
    type: params.get("type") || "movie",
  };
}

function getDomRefs() {
  return {
    resultsContainer: document.querySelector("#search-results"),
    alertContainer: document.querySelector("#alert"),
    headingEl: document.querySelector("#search-results-heading"),
    paginationContainer: document.querySelector("#pagination"),
  };
}

function resetView(resultsContainer, headingEl, paginationContainer) {
  resultsContainer.innerHTML = "";
  headingEl.innerHTML = "";
  paginationContainer.innerHTML = "";
}

function renderHeading(headingEl, { term, totalResults, count }) {
  headingEl.innerHTML = `<h2>${count} of ${totalResults} results for <i>${term}</i></h2>`;
}

function renderSearchResults(results, type, container) {
  results.forEach((item) => {
    const card = type === "tv" ? createTvShowCard(item) : createMovieCard(item);
    container.appendChild(card);
  });
}

function renderPagination(container, page, totalPages, onPageChange) {
  if (totalPages <= 1) return;

  const div = document.createElement("div");
  div.classList.add("pagination");

  div.innerHTML = `
  <div>
    <button class="btn btn-primary" id="prev">Prev</button>
    <button class="btn btn-primary" id="next">Next</button>
  </div>
    <div class="page-counter">Page ${page} of ${totalPages}</div>`;

  container.appendChild(div);

  const prevBtn = div.querySelector("#prev");
  const nextBtn = div.querySelector("#next");

  if (page === 1) {
    prevBtn.disabled = true;
  }
  if (page === totalPages) {
    nextBtn.disabled = true;
  }

  prevBtn.addEventListener("click", () => {
    if (page > 1) onPageChange(page - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (page < totalPages) onPageChange(page + 1);
  });
}
