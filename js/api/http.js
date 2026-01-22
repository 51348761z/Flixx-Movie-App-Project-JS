import { Spinner } from "../components/spinner.js";
import { AUTH_HEADER } from "../config/constants.js";

const DEFAULT_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: AUTH_HEADER,
  },
};

export async function getJSON(url, options = {}) {
  Spinner.show();
  try {
    const response = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return response.json();
  } finally {
    Spinner.hide();
  }
}
