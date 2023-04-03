const shareButton = document.querySelector(".share-button");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  shareContainer.classList.toggle("toggle");
});