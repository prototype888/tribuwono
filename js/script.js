// toggle icon navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// scroll section
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
      // active section for animations on scroll
      sec.classList.add("show-animate");
    }
    // if want  to use animation that repeat on scroll use this
    else {
      sec.classList.remove("show-animate");
    }
  });

  // sticky header
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  // remove toggle icon and navbar when click navbar link (scroll)
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");

  // animation footer on scroll
  let footer = document.querySelector("footer");

  footer.classList.toggle(
    "show-animate",
    this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight
  );
};

// show project view
const slides = document.querySelectorAll(".swiper-slide");
const projectView = document.querySelector(".project-view");

slides.forEach((slide, index) => {
  slide.addEventListener("click", (event) => {
    if (!event.target.classList.contains("link-view-project")) { // Tambahkan kondisi ini
      const imageUrl = slide.querySelector("img").getAttribute("src");
      const projectViewImg = document.querySelector(".project-view-img");
      projectViewImg.setAttribute("src", imageUrl);
      projectView.style.display = "flex";
    }
  });
});

// Close project view when clicking outside the project view image
projectView.addEventListener("click", (event) => {
  if (event.target.classList.contains("project-view")) {
    projectView.style.display = "none";
  }
});

// Close project view when clicking the close button
const closeButton = document.querySelector(".close-project-view");
closeButton.addEventListener("click", () => {
  projectView.style.display = "none";
});

// Prevent project view from showing when clicking on the "Lihat Website" link inside swiper-slide
const viewWebsiteLinks = document.querySelectorAll(".swiper-slide .view-website");
viewWebsiteLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior
    const url = link.getAttribute("href");
    window.location.href = url; // Redirect to the link destination
  });
});
