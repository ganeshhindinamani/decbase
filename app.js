const navImage = document.querySelector(".nav-img");
const navLinks = document.querySelector(".nav-links");

navImage.addEventListener("click", () => {
  navImage.classList.toggle("active");
});

navImage.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// const links = document.querySelectorAll(".nav-links a");

// links.forEach((link) => {
//   link.addEventListener("click", () => {
//     links.forEach((link2) => {
//       if (link2.classList[0] !== "active-link") {
//         console.log("hello");
//         link2.classList.add("active-link");
//       } else {
//         link2.classList.remove("active-link");
//       }
//     });
//   });
// });

// console.log(links[0].classList);

// const currentLocation = location.href;
// const links = document.querySelectorAll(".nav-links a");

// const linksLength = links.length;
// for (let i = 0; i < linksLength; i++) {
//   console.log(currentLocation);
//   if (links[i].href === currentLocation) {
//     links[i].className = "active";
//   }
// }
