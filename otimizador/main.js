(() => {
  "use strict";
  var e, t;
  (e = document.querySelector(".buttonMenu")),
    (t = document.querySelector(".header-menu")),
    e.addEventListener("click", function () {
      t.classList.contains("active")
        ? (t.classList.remove("active"),
          (document.querySelector(".icon").src = "img/buttonMenu.svg"))
        : (t.classList.add("active"),
          (document.querySelector(".icon").src = "img/closeMenu.svg"));
    }),
    (function () {
      function e(e) {
        e.preventDefault();
        var t = e.currentTarget.getAttribute("href");
        document
          .querySelector(t)
          .scrollIntoView({ behavior: "smooth", block: "start" });
      }
      document.querySelectorAll('a[href^="#"]').forEach(function (t) {
        t.addEventListener("click", e);
      });
    })(),
    (function () {
      var e = document.querySelectorAll(".js-scroll"),
        t = 0.9 * window.innerHeight;
      function n() {
        e.forEach(function (e) {
          e.getBoundingClientRect().top - t < 0 && e.classList.add("ativo");
        });
      }
      e.length && (n(), window.addEventListener("scroll", n));
    })();
})();
