/* ===============================
   NAVBAR SCROLL
================================ */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 80) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ===============================
   MOBILE MENU
================================ */

const hamburger = document.querySelector(".hamburger");

const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
});

/* ===============================
   CLOSE MENU AFTER CLICK
================================ */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
  });
});

/* ===============================
   TESTIMONIAL DATA
================================ */

const testimonials = [
  {
    text: `"Konsep coffee on wheels ini benar-benar memudahkan. Kopinya enak dan saya tidak perlu jauh-jauh mencari coffee shop."`,
    name: "— ANDI PRATAMA",
  },

  {
    text: `"Pelayanannya cepat dan baristanya ramah. Sekarang jadi lebih mudah mendapatkan kopi favorit setiap hari."`,
    name: "— SINTA MAHARANI",
  },

  {
    text: `"Harga terjangkau tetapi kualitas kopinya tetap terasa premium. Sangat cocok untuk anak muda yang aktif."`,
    name: "— RIZKY RAMADHAN",
  },
];

/* ===============================
   TESTIMONIAL ELEMENT
================================ */

let currentTestimonial = 0;

const testimonialText = document.getElementById("testimonial-text");

const testimonialName = document.getElementById("testimonial-name");

const nextButton = document.getElementById("nextTestimonial");

const prevButton = document.getElementById("prevTestimonial");

/* ===============================
   SHOW TESTIMONIAL
================================ */

function showTestimonial() {
  testimonialText.style.opacity = "0";

  testimonialName.style.opacity = "0";

  setTimeout(function () {
    testimonialText.innerText = testimonials[currentTestimonial].text;

    testimonialName.innerText = testimonials[currentTestimonial].name;

    testimonialText.style.opacity = "1";

    testimonialName.style.opacity = "1";
  }, 300);
}

/* ===============================
   NEXT BUTTON
================================ */

nextButton.addEventListener("click", function () {
  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  showTestimonial();
});

/* ===============================
   PREVIOUS BUTTON
================================ */

prevButton.addEventListener("click", function () {
  currentTestimonial--;

  if (currentTestimonial < 0) {
    currentTestimonial = testimonials.length - 1;
  }

  showTestimonial();
});

/* ===============================
   AUTO SLIDER
================================ */

setInterval(function () {
  currentTestimonial++;

  if (currentTestimonial >= testimonials.length) {
    currentTestimonial = 0;
  }

  showTestimonial();
}, 5000);

/* ===============================
   TRANSITION
================================ */

testimonialText.style.transition = "opacity 0.3s ease";

testimonialName.style.transition = "opacity 0.3s ease";
