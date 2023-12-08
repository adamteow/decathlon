function openTab(event, tabName) {
  // Hide all tab contents
  var tabContents = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = "none";
  }
  
  // Remove "active" class from all tab buttons
  var tabButtons = document.getElementsByClassName("tab-button");
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].classList.remove("active");
  }
  
  // Show the selected tab content and mark the button as active
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}
