import {
  BACKDROP_SIZE,
  IMG_BASE,
  PLACEHOLDER,
  POSTER_SIZE,
} from "../config/constants.js";

export function buildPoster(path) {
  if (!path) return PLACEHOLDER;
  return `${IMG_BASE}/${POSTER_SIZE}${path}`;
}

export function buildBackdrop(path) {
  if (!path) return "";
  return `${IMG_BASE}/${BACKDROP_SIZE}${path}`;
}

export function formatRating(value) {
  return Number(value ?? 0).toFixed(1);
}

export function formatDate(date) {
  return date || "N/A";
}

export function formatCurrency(num) {
  const value = Number(num || 0);
  return value.toLocaleString("en-US", { maximumFractionDigits: 0 });
}
