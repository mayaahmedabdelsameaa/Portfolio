(() => {
  "use strict";

  /**
   * Back to top button
   */
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    const aboutSection = document.getElementById("about");
    const aboutSectionPosition =
      aboutSection.getBoundingClientRect().top + scrollPosition;
    if (scrollPosition >= aboutSectionPosition) {
      backToTopBtn.classList.add("show");
    } else {
      backToTopBtn.classList.remove("show");
    }
  });
  /**
   * animation
   */
  window.addEventListener("load", () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  /**
   * hero section
   */
  let typed = new Typed(".typed", {
    strings: ["Full-stack Developer", ".Net full-stack Developer", "Freelancer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
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
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
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

  toggle.addEventListener("click", () => {
    header.style.left = "0rem";
    main.style.left = "20rem";
    hero.style.left = "20rem";
    toggle.style.display = "none";
    close.style.display = "inline-block";
  });
  close.addEventListener("click", () => {
    header.style.left = "-20rem";
    main.style.left = "0rem";
    hero.style.left = "0rem";
    close.style.display = "none";
    toggle.style.display = "inline-block";
  });

  // sending Email

  // getting sender data
  let senderEmail = document.getElementById("exampleInputEmail1");
  let senderSubject = document.getElementById("exampleInputSubject");
  let senderMessage = document.getElementById("exampleInputMessage");
  // submit button
  let submit = document.getElementById("btn-submit");
  submit.addEventListener("click", sendEmail);
  function sendEmail(e) {
    let email = senderEmail.value,
      subject = senderSubject.value,
      message = senderMessage.value;
    // console.log("containers",senderEmail,senderSubject, senderMessage);
    // console.log("Data",email,subject, message);
    if (email != "" && subject != "" && message != "") {
      e.preventDefault();
      Email.send({
        SecureToken: "7d499b9e-7101-425b-923c-c8fe6fcaeac9",
        To: "",
        From: `${email}`,
        Subject: `${subject}`,
        Body: `${message}`,
      }).then(alert("congratulations your email has been sent"));
    } else {
      e.preventDefault();
      alert("Enter all the data to be able to send the email");
    }
  }
})();
