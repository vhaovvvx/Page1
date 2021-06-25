const $$ = document.querySelector.bind(document);
const $$$ = document.querySelectorAll.bind(document);

const btnsActive = [...$$$(".product__menu--btn")];
btnsActive.forEach((btn) => {
  btn.addEventListener("click", function () {
    let current = $$(".actived");
    current.className = current.className.replace(" actived", "");
    this.className += " actived";
  });
});

function translateItem() {
  function openNavbar() {
    const overlay = $$(".overlay");

    const navMobiElement = $$(".header__user--bar-nav");
    const btnToggleNavMobi = navMobiElement.classList.toggle("show");
    if (btnToggleNavMobi) {
      navMobiElement.style.transform = "translateX(0%)";
      overlay.classList.add("open");
    } else {
      overlay.classList.remove("open");

      navMobiElement.style.transform = "translateX(100%)";
    }
  }
  const btnNavMobiElement = [...$$$(".items-show")];
  btnNavMobiElement.forEach((element) => {
    element.addEventListener("click", () => {
      openNavbar();
    });
  });
}
translateItem();
