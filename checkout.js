const checkoutBtn = document.getElementById("checkoutBtn");

checkoutBtn.addEventListener("click", function() {
  // Perform checkout actions here
  // For example, redirect to a payment page or trigger an API call
});

const showPopupBtn = document.getElementById("showPopupBtn");
const popupContainer = document.getElementById("popupContainer");
const popupOverlay = document.getElementById("popupOverlay");

showPopupBtn.addEventListener("click", function() {
  popupContainer.style.display = "block";
  popupOverlay.style.display = "block";
});

popupOverlay.addEventListener("click", function() {
  popupContainer.style.display = "none";
  popupOverlay.style.display = "none";
});

// Add event listener to close button if you have one
// const closeButton = document.getElementById("closeButton");
// closeButton.addEventListener("click", function() {
//   popupContainer.style.display = "none";
//   popupOverlay.style.display = "none";
// });

