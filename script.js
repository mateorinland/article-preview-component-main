const shareButton = document.querySelector(".share-button");
const shareContainer = document.querySelector(".share-container");

shareButton.addEventListener("click", () => {
  shareContainer.classList.toggle("toggle");
  let expandedValue = shareButton.getAttribute("aria-expanded");
  if (expandedValue == "true") {
    expandedValue = "false";
  } else {
    expandedValue = "true";
  }
  shareButton.setAttribute("aria-expanded", expandedValue);
});
