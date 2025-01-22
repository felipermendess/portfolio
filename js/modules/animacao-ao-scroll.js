export default function animacaoAoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowMetade = window.innerHeight * 0.9;

  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSection = sectionTop - windowMetade < 0;

      if (isSection) {
        section.classList.add("ativo");
      }
    });
  }

  if (sections.length) {
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
}
