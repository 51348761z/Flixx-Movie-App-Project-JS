export function showAlert(
  message,
  container = document.querySelector("#alert"),
  className = "alert-error",
) {
  if (!container) return;

  container.innerHTML = "";

  const alertEl = document.createElement("div");
  alertEl.classList.add("alert", className);
  alertEl.textContent = message;

  container.appendChild(alertEl);

  setTimeout(() => {
    alertEl.remove();
  }, 3000);
}
