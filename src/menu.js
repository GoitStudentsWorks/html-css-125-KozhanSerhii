const mobMenu = document.querySelector("[data-menu]");
const openBtn = document.querySelector("[data-menu-open]");
const closeBtn = document.querySelector("[data-menu-close]");

openBtn.addEventListener("click", () => {
  mobMenu.classList.add("is-open");
});

closeBtn.addEventListener("click", () => {
  mobMenu.classList.remove("is-open");
});
