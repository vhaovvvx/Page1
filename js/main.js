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

const a = $$(".footer__slogan--content");
console.log(a);
