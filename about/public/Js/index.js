// responsive menu
const checkbox = document.getElementById("checkbox");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.body.classList.add("menu-active");
    document.querySelector(".navLInks").style.opacity = "100%";
  } else {
    document.body.classList.remove("menu-active");
    document.querySelector(".navLInks").style.opacity = "0%";
  }
});

// scroll nav changes
let change = 5;
const navb = document.getElementById("navbar");
window.addEventListener("scroll", function () {
  if (this.document.body.className == "crazy") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledCrazy");
      navb.style.position = "fixed";
      if (navb.classList == "scrolledDark") {
        navb.classList.remove("scrolledDark");
      }
      if (navb.classList == "scrolledLight") {
        navb.classList.remove("scrolledLight");
      }
    } else {
      navb.classList.remove("scrolledCrazy");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }

  if (this.document.body.className == "dark") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledDark");
      navb.style.position = "fixed";

      if (navb.classList == "scrolledCrazy") {
        navb.classList.remove("scrolledCrazy");
      }
      if (navb.classList == "scrolledLight") {
        navb.classList.remove("scrolledLight");
      }
    } else {
      navb.classList.remove("scrolledDark");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }

  if (this.document.body.className == "light") {
    if (window.scrollY > 150) {
      navb.classList.add("scrolledLight");
      navb.style.position = "fixed";

      if (navb.classList == "scrolledCrazy") {
        navb.classList.remove("scrolledCrazy");
      }
      if (navb.classList == "scrolledDark") {
        navb.classList.remove("scrolledDark");
      }
    } else {
      navb.classList.remove("scrolledLight");
      navb.style.opacity = "100%";
      navb.style.position = "relative";
    }
  }
});

// // stack changes
// const optionOne = document.getElementById("StackGallery");
// const optiontwo = document.getElementById("StackAnimation");

// const img_cont = document.getElementById("stackImage");
const anim_cont = document.getElementById("animContainer");
// const gallery_filter = document.getElementById("stack_gallery_filter");

// optionOne.addEventListener("click", showOptionOne);
// optiontwo.addEventListener("click", showOptionTwo);

// function showOptionTwo() {
//   gallery_filter.style.display = "none";

//   anim_cont.style.display = "block";
//   img_cont.style.display = "block";
// }

// function showOptionOne() {
//   gallery_filter.style.display = "block";

//   anim_cont.style.display = "none";
//   img_cont.style.display = "none";
// }
// showOptionOne();

// setTimeout(() => {
//   showOptionTwo();
// }, 3000);

// Go Up button
const goUp = document
  .querySelector(".goUpButton")
  .addEventListener("click", goUpp);

function goUpp() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
goUpp();
