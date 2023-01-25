"use strict";

// Constants

const heroHeading = document.querySelector(".hero-heading-box");
const heroParagraph = document.querySelector(".hero-paragraph-box");
const heroGrid3 = document.querySelector(".hero-grid-3");
const heroFinal = document.querySelector(".hero-final-box");
const authorContainer = document.querySelector(".author-container");
const authorContainer2 = document.querySelector(".author-container-2");
const authorImg = document.querySelector(".author-img-2");
const authorImgWhite = document.querySelector(".author-box");
const nav = document.querySelector(".main-nav");
const navList = document.querySelector(".main-nav-list");

// Functions

const hideHeroText = function () {
  heroHeading.style.transform = "translateX(-200%)";
  heroParagraph.style.transform = "translateX(200%)";
};

const startHeroHeadingTimer = setTimeout(() => {
  heroHeading.style.transform = "translateX(0)";
}, "750");

const startHeroParagraphTimer = setTimeout(() => {
  heroParagraph.style.transform = "translateX(0)";
}, "1250");

const startHeroFinalTimer = setTimeout(() => {
  // heroFinal.classList.remove("hidden");
  heroFinal.style.opacity = 1;
  // heroGrid3.style.marginTop = "13rem";
}, "2000");

const startHeroTimer = function () {
  startHeroHeadingTimer;
  startHeroParagraphTimer;
  startHeroFinalTimer;
};

const authorSlide = function () {
  authorImg.style.transform = "translateX(-100%)";
  authorImgWhite.style.transform = "translateX(100%)";
};

const authorSlideTimer = function (time) {
  setTimeout(() => {
    // Slide
    authorImg.style.transform = "translateX(-100%)";
    authorImgWhite.style.transform = "translateX(50%)";

    // Straighten corners
    authorImg.style.borderBottomRightRadius = 0;
    authorImg.style.borderTopRightRadius = 0;
    authorImgWhite.style.borderBottomLeftRadius = 0;
    authorImgWhite.style.borderTopLeftRadius = 0;
  }, time * 1000);
};

// Animate Author

// const animateAuthor = function (entries, observer) {
//   const [entry] = entries;
//   console.log(entry.target);

//   //guard clause
//   if (!entry.isIntersecting === true) return;

//   authorSlideTimer(0.5);
//   observer.unobserve(entry.target);
// };

// const authorObserver = new IntersectionObserver(animateAuthor, {
//   root: null,
//   threshold: 0.7,
// });

// Navigation Fading

nav.addEventListener("mouseover", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");

    siblings.forEach((el) => {
      if (el !== link && !el.classList.contains("nav-cta")) {
        el.style.opacity = 0.5;
      }
    });
  }
});

nav.addEventListener("mouseout", function (e) {
  if (e.target.classList.contains("main-nav-link")) {
    const link = e.target;
    const siblings = link
      .closest(".main-nav")
      .querySelectorAll(".main-nav-link");

    siblings.forEach((el) => {
      if (el !== link) {
        el.style.opacity = 1;
      }
    });
  }
});

// Event Handlers

hideHeroText();
startHeroTimer;
// authorObserver.observe(authorImgWhite);

const map = L.map("map", {
  dragging: false,
  boxZoom: false,
  doubleClickZoom: false,
  scrollWheelZoom: false,
  touchZoom: false,
}).setView([52.37019, 4.9007], 17);
const marker = L.marker([52.370198, 4.9008532]).addTo(map);

L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

marker
  .bindPopup(
    `<span class="popup"><b>Luthier van Harten</b><br>Sint Antoniesbreestraat 368, Amsterdam.</span>`
  )
  .openPopup();

// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(
//     function (position) {
//       console.log(position);
//       const { latitude } = position.coords;
//       const { longitude } = position.coords;
//       console.log(latitude, longitude);
//       // console.log(`https://www.google.com/maps/@${longitude}},${latitude}z`);

//       const coords = [latitude, longitude];

//       const map = L.map("map").setView(coords, 17);

//       L.tileLayer("https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
//         attribution:
//           '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//       }).addTo(map);

//       L.marker(coords)
//         .addTo(map)
//         .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
//         .openPopup();
//     },
//     function () {
//       alert("Could not get your position");
//     }
//   );
// }

///////////////////////////////////////////////////////////
// Make mobile Nav work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");
const sectionHero = document.querySelector(".section-hero");
const container = document.querySelector(".container");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
  heroParagraph.classList.toggle("hidden");
  heroFinal.classList.toggle("hidden");
  heroHeading.classList.toggle("hidden");
  container.classList.toggle("vh100");
});

///////////////////////////////////////////////////////////
// Changing from layout in section-how at 544px query

const containerDiensten2 = document.querySelector(".container-diensten-2");
const containerDiensten3 = document.querySelector(".container-diensten-3");
const hidden2 = document.querySelector(".hidden-2");

// define a function that adds/removes the class based on the viewport width
function updateSectionHow() {
  if (window.innerWidth < 545) {
    containerDiensten2.classList.add("hidden-2");
    containerDiensten3.classList.remove("hidden-2");
  } else {
    containerDiensten3.classList.add("hidden-2");
    containerDiensten2.classList.remove("hidden-2");
  }
}

// call the function on page load
updateSectionHow();

// add an event listener that calls the function on resize
window.addEventListener("resize", updateSectionHow);

///////////////////////////////////////////////////////////
// Smooth Scrolling

const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");
    console.log(href);

    // scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});
