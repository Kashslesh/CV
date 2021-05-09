jQuery(document).ready(function () {
  let typed = new Typed(".hero", {
    strings: [
      "Développeur Web.",
      "Développeur JavaScript.",
      "Développeur PHP.",
    ],
    typeSpeed: 130,
    backSpeed: 40,
    loop: true,
  });
});
const start = document.querySelector("#cv");
const end = document.querySelector("#contact");
const navigation = document.querySelector(".blocknav");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset;
  let navigationPosition = navigation.offsetHeight;
  // console.log(scrollTop);
  // console.log(navigationPosition);
  // console.log(finishPosition);
  let startBox = start.getBoundingClientRect();
  let startPoint = startBox.top + pageYOffset;
  let finishBox = end.getBoundingClientRect();
  let finishPoint = finishBox.top + pageYOffset;
  // console.log(finishPoint);
  //   (scrollTop>=navigationPosition ) ? navigation.classList.add('fixed-position') : navigation.classList.remove('fixed-position')
  if (scrollTop >= startPoint && scrollTop <= finishPoint) {
    navigation.classList.add("fixed-position");
  } else {
    navigation.classList.remove("fixed-position");
  }
});
const pageWidth = document.documentElement.scrollWidth;
// console.log(pageWidth);
const sr = ScrollReveal();
if (pageWidth >= 700) {
  sr.reveal(
    ".text-animation",
    {
      origin: "right",
      distance: "40px",
    },
    1000
  );
  sr.reveal(
    "#photo",
    {
      origin: "left",
      distance: "70px",
    },
    1000
  );
}
