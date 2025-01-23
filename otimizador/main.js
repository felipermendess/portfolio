(() => {
  "use strict";
  !(function () {
    const e = document.querySelector(".buttonMenu"),
      t = document.querySelector(".header-menu");
    e.addEventListener("click", function () {
      t.classList.contains("active")
        ? (t.classList.remove("active"),
          (document.querySelector(".icon").src = "img/buttonMenu.svg"))
        : (t.classList.add("active"),
          (document.querySelector(".icon").src = "img/closeMenu.svg"));
    });
  })(),
    (function () {
      function e(e) {
        e.preventDefault();
        const t = e.currentTarget.getAttribute("href");
        document
          .querySelector(t)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.querySelectorAll('a[href^="#"]').forEach(t => {
        t.addEventListener("click", e);
      });
    })(),
    (function () {
      const e = document.querySelectorAll(".js-scroll"),
        t = 0.9 * window.innerHeight;
      function c() {
        e.forEach(e => {
          e.getBoundingClientRect().top - t < 0 && e.classList.add("ativo");
        });
      }
      e.length && (c(), window.addEventListener("scroll", c));
    })();
})();
