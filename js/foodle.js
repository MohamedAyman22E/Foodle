// icon in search
let headerSearch = document.querySelector(".search i");
let fixedSearch = document.querySelector(".fixed-search");
let closeSearch = document.querySelector(".close-icon i");
headerSearch.addEventListener("click", () => {
  fixedSearch.classList.toggle("active");
});
closeSearch.addEventListener("click", () => {
  fixedSearch.classList.remove("active");
});

// header

window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  header.classList.toggle("activeTwo", scrollY > 100);
});

// icon top

let iconTop = document.querySelector(".icon-top");
window.addEventListener("scroll", () => {
  iconTop.classList.toggle("active", window.scrollY > 100);
});
iconTop.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

// change active link
let links = document.querySelectorAll(".menu-popular li");

links.forEach(e => {
  e.addEventListener("click", () => {
    links.forEach(ele => {
      ele.classList.remove("activeLink");
      e.classList.add("activeLink");
    });
  });
});

// navList in media
let menuBtn = document.querySelector(".menu-btn");
let navlist = document.querySelector(".navlist");
menuBtn.addEventListener("click", () => {
  navlist.classList.toggle("active");
  menuBtn.classList.toggle("active");
});
