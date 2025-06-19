const shareDiv = document.getElementById("shareOverlay");
const shareButton = document.getElementById("shareButton");
const shareImage = document.querySelector(".shareImg");

function toggleShare() {
  shareDiv.classList.toggle("active");
  shareButton.classList.toggle("active");
  shareImage.classList.toggle("active");
}

shareButton.addEventListener("click", toggleShare);

document.addEventListener("click", (event) => {
  if (
    !shareDiv.contains(event.target) &&
    !shareButton.contains(event.target) &&
    !shareImage.contains(event.target) &&
    shareDiv.classList.contains("active")
  ) {
    shareDiv.classList.remove("active");
    shareButton.classList.remove("active");
    shareImage.classList.remove("active");
  }
});
