"use strict";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav ul");
const text = document.querySelector(".name");
const email = document.querySelector(".email");
const comment = document.querySelector(".input-message");

const header = document.querySelector(".header");
const main = document.querySelector(".main");
const section = document.querySelector(".section");
const aside = document.querySelector(".aside");

const address = document.querySelector(".address");
const footer = document.querySelector(".footer");

const send = document.querySelector(".button-container");
const popUp = document.querySelector(".pop-up");
const backHome = document.querySelector(".back-home");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

function hiddenFeatures() {
  header.classList.add("hidden");
  main.classList.add("hidden");
  section.classList.add("hidden");
  aside.classList.add("hidden");
  address.classList.add("hidden");
  footer.classList.add("hidden");
}

function noHiddenFeatures() {
  header.classList.remove("hidden");
  main.classList.remove("hidden");
  section.classList.remove("hidden");
  aside.classList.remove("hidden");
  address.classList.remove("hidden");
  footer.classList.remove("hidden");
}

send.addEventListener("click", function (e) {
  e.preventDefault();
  const emailValue = email.value.trim();
  const nameValue = text.value;
  const message = comment.value;

  if (!(emailValue && nameValue && message)) {
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(3, 33%, 87%)";
    text.style.borderColor = "hsl(4, 100%, 67%)";
    text.style.color = "hsl(4, 100%, 67%)";
    text.style.backgroundColor = "hsl(3, 33%, 87%)";
    comment.style.borderColor = "hsl(4, 100%, 67%)";
    comment.style.color = "hsl(4, 100%, 67%)";
    comment.style.backgroundColor = "hsl(3, 33%, 87%)";

    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(emailValue)) {
    email.style.borderColor = "hsl(4, 100%, 67%)";
    email.style.color = "hsl(4, 100%, 67%)";
    email.style.backgroundColor = "hsl(3, 33%, 87%)";
  } else {
    popUp.classList.remove("pop-up--notActive");
    hiddenFeatures();
    console.log("done");
  }
});

console.log(text.value);

backHome.addEventListener("click", function (e) {
  e.preventDefault;
  noHiddenFeatures();
  popUp.classList.add("pop-up--notActive");
  text.value = " ";
  email.value = " ";
  comment.value = " ";
  email.removeAttribute("style");
  text.removeAttribute("style");
  comment.removeAttribute("style");
});
// Get the navbar
// const header = document.getElementById("header");

// // Get the offset position of the navbar
// const sticky = header.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position
// // Remove "sticky" when you leave the scroll position
// window.onscroll = function () {
//   if (window.pageYOffset >= sticky) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// };

// const headerEl = document.querySelector(".header");

// const obs = new IntersectionObserver(
//   function (entries) {
//     const ent = entries[0];

//     if (ent.isIntersecting === false) {
//       document.body.classList.add("sticky");
//     }

//     if (ent.isIntersecting === true) {
//       document.body.classList.remove("sticky");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// obs.observe(headerEl);
// document.getElementsById('myform').addEventListener('submit', function(event){
//     event.preventDefault();

//     var name = document.getElementById('name').value;
//     var email = document.getElementById('email').value;
//     var comment = document.getElementById('comment').value;

//     if (name.trim() === ''){
//         alert('Please enter your name.');
//     }
//     else if (email.trim() === ''){
//         alert('Please enter your email address.');
//     }
//     else if (comment.trim() === ''){
//         alert('Please enter your feedback.');
//     }
//     else{
//         alert('Your records submitted successfully');
//     }
// });
