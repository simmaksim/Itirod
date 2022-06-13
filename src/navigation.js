const homeButton = document.querySelector(".home-btn");
const searchButton = document.querySelector(".search-btn");
const libButton = document.querySelector(".lib-btn");

//const router = Router(routes);
const home_page = document.getElementById("home_page");
const search = document.getElementById("search_page");
const library = document.getElementById("library_page");

const notActive = "not-active";

homeButton.onclick = () => {
  history.pushState(null, null , "home");
  search.classList.add(notActive);
  library.classList.add(notActive);
  home_page.classList.remove(notActive);
};

searchButton.onclick = () => {
  history.pushState(null, null, "search");
  library.classList.add(notActive);
  home_page.classList.add(notActive);
  search.classList.remove(notActive);
};

libButton.onclick = () => {
  history.pushState(null, null, "lib");
  search.classList.add(notActive);
  home_page.classList.add(notActive);
  library.classList.remove(notActive);
};
