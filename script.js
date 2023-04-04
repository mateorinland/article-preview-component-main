const shareButton = document.querySelector(".share-button");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  shareContainer.classList.toggle("toggle");
  shareButton.setAttribute("aria-expanded", `${!(shareButton.getAttribute('aria-expanded'))}`)
});