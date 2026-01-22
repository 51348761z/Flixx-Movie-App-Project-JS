export class Spinner {
  static showSpinner() {
    const el = document.querySelector(".spinner");
    if (!el) return;
    el.classList.add("show");
  }

  static hideSpinner() {
    const el = document.querySelector(".spinner");
    if (!el) return;
    el.classList.remove("show");
  }
}
