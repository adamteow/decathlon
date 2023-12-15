let filterToggle = document.querySelector('.filter-toggle-button');

filterToggle.onclick = function () {
  
  let filterSideBar = document.querySelector('.sidebar-filter')
  filterSideBar.classList.toggle("active");
  event.preventDefault();
}

