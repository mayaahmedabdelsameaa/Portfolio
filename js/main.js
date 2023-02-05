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
  /**
   * toogle icon, display the navbar 
  */
  let toggle = document.querySelector(".toggle-icon");
  let header = document.querySelector("#header");
  let main = document.querySelector("#main");
  let hero = document.querySelector("#hero");
  let close = document.querySelector(".toggle-icon-1");

  toggle.addEventListener("click",()=>{
    header.style.left = "0rem";
    main.style.left = "20rem";
    hero.style.left = "20rem";
    toggle.style.display= "none"
    close.style.display= "inline-block"
  });
  close.addEventListener("click",()=>{
    header.style.left = "-20rem";
    main.style.left = "0rem";
    hero.style.left = "0rem";
    close.style.display="none";
    toggle.style.display= "inline-block"
  });
})();
