const slider = document.getElementById("showCaseSlider");
const slides = slider.querySelectorAll(".item");
const dotContainer = document.querySelector(".dot-container");

/** @type {HTMLDivElement[]} */
let dots = [];

const autoSlideInterval = 3000;
let index = 0;
let sliding = false;
let timer = null;

/** Go to a slide
 * @param {number} go - The index of the slide to go to
 **/
async function slideTo(go) {
  if (sliding || go === index) return;
  sliding = true;
  clearInterval(timer);

  slides[index].classList.remove("active");
  dots[index].classList.remove("active");

  // Ensure index is in range
  index = (go + slides.length) % slides.length;
  if (index < 0) index = slides.length - 1;

  slides[index].classList.add("active");
  dots[index].classList.add("active");

  await new Promise((resolve) => setTimeout(resolve, 500));

  sliding = false;
  autoSlide();
}

/** Start auto slide timer **/
function autoSlide() {
  timer = setInterval(() => {
    slideTo(index + 1);
  }, autoSlideInterval);
}

// Create dots
if (slides.length > 1) {
  for (let i = 0; i < slides.length; i++) {
    const dot = document.createElement("div");

    dot.classList.add("dot");
    dotContainer.appendChild(dot);

    dots.push(dot);
    dot.addEventListener("click", () => slideTo(i));
  }
  dots[0].classList.add("active");
}

// On ready
document.addEventListener("DOMContentLoaded", () => {
  if (slides.length <= 1) return;

  const hammer = new Hammer(slider);
  hammer.on("swipeleft", () => slideTo(index + 1));
  hammer.on("swiperight", () => slideTo(index - 1));

  autoSlide();
});

// Optional: Clear interval on unload
window.addEventListener("beforeunload", () => clearInterval(timer));

// Optional: Pause on hover
slider.addEventListener("mouseenter", () => clearInterval(timer));
slider.addEventListener("mouseleave", autoSlide);
