const homeButton = document.querySelector(".home-btn");
const searchButton = document.querySelector(".search-btn");
const libButton = document.querySelector(".lib-btn");

const home_page = document.getElementById("home_page");
const search = document.getElementById("search_page");
const library = document.getElementById("library_page");

const notActive = "not-active";

homeButton.onclick = () => {
  search.classList.add(notActive);
  library.classList.add(notActive);
  home_page.classList.remove(notActive);
};

searchButton.onclick = () => {
  library.classList.add(notActive);
  home_page.classList.add(notActive);
  search.classList.remove(notActive);
};

libButton.onclick = () => {
  search.classList.add(notActive);
  home_page.classList.add(notActive);
  library.classList.remove(notActive);
};
