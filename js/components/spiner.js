export class Spinner {
  static showSpinner() {
    document.querySelector(".spinner").classList.add("show");
  }

  static hideSpinner() {
    document.querySelector(".spinner").classList.remove("show");
  }
}
