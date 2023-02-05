(() => {
  "use strict";

  /**
   * Back to top button
   */
  let backtop = document.querySelector(".back-to-top");
  if (backtop) {
    const toggleActive = () => {
      if (window.screenY > 100) {
        backtop.classList.add("active");
      } else {
        backtop.classList.remove("active");
      }
    }; // end of toggle active function
    window.addEventListener("load", toggleActive);
  }
  /**
   * animation
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  /**
   * hero section
   */
  let typed = new Typed(".typed", {
    strings: ["Front-end Develpoer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
  });
  /**
   * nav active li
   */
  const sections = document.querySelectorAll("section");
  const navLis = document.querySelectorAll("nav ul li");
  window.onscroll = () => {
    let current = "";
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      if (scrollY >= sectionTop - 60) {
        current = section.getAttribute("id");
      }
    });
    navLis.forEach((li) => {
      li.classList.remove("active");
      if (li.classList.contains(current)) {
        li.classList.add("active");
      }
    });
  };
})();
