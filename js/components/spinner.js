export class Spinner {
  static show() {
    const el = document.querySelector(".spinner");
    if (!el) return;
    el.classList.add("show");
  }

  static hide() {
    const el = document.querySelector(".spinner");
    if (!el) return;
    el.classList.remove("show");
  }
}
