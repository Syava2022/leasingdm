const filterBtns = document.querySelectorAll(".car__types-link");
const worksList = document.querySelector(".cars");

filterBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterBtns.forEach((filterBtn) => {
      filterBtn.classList.remove("is-active");
    });
    btn.classList.add("is-active");

    const filterValue = btn.getAttribute("data-filter");

    for (const item of worksList.children) {
      if (filterValue === "all") {
        item.classList.remove("hide");
        item.classList.add("show");
      } else if (item.classList.contains(filterValue)) {
        item.classList.remove("hide");
        item.classList.add("show");
      } else {
        item.classList.remove("show");
        item.classList.add("hide");
      }
    }
  });
});

const burger = document.querySelector(".burger");
const mainMenu = document.querySelector(".header__list");

burger.addEventListener("click", () => {
  burger.classList.toggle("menu--active");
  mainMenu.classList.toggle("open");
});


const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },
  effect: "fade",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});
