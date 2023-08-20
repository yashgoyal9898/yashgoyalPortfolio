const menuIcon = document.querySelector(".menu-icons");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const menuContainer = document.querySelector(".mobile-menu-container");

menuIcon.addEventListener("click", ()=> {
  menuContainer.classList.add("active");
} );

closeIcon.addEventListener("click", ()=> {
  menuContainer.classList.remove("active");
} );