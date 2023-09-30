const about = document.querySelector(".about");
const home = document.querySelector(".home");
const latest_news = document.querySelector(".latest_news");
const contact = document.querySelector(".contact");
const homeb = document.querySelector(".homeb");
const aboutb = document.querySelector(".aboutb");
const latestb = document.querySelector(".latestb");
const contactb = document.querySelector(".contactb");

home.classList.remove("hidden");
about.classList.add("hidden");
latest_news.classList.add("hidden");
contact.classList.add("hidden");

homeb.addEventListener("click", function (e) {
  e.preventDefault();
  home.classList.remove("hidden");
  about.classList.add("hidden");
  contact.classList.add("hidden");
  latest_news.classList.add("hidden");
});
// home.addEventListener("click", openhome);
aboutb.addEventListener("click", function (e) {
  e.preventDefault();
  about.classList.remove("hidden");
  home.classList.add("hidden");
  contact.classList.add("hidden");
  latest_news.classList.add("hidden");
});

latestb.addEventListener("click", function (e) {
  e.preventDefault();
  latest_news.classList.remove("hidden");
  home.classList.add("hidden");
  about.classList.add("hidden");
  contact.classList.add("hidden");
});
contactb.addEventListener("click", function (e) {
  e.preventDefault();
  contact.classList.remove("hidden");
  latest_news.classList.add("hidden");
  home.classList.add("hidden");
  about.classList.add("hidden");
});
