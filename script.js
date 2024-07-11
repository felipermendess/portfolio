function initAtivaScrollSuave(){
  const linksInternos = document.querySelectorAll('a[href^="#"]');
  
  function ativaScrollSuave(e){
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
  
  linksInternos.forEach(link => {
    link.addEventListener('click', ativaScrollSuave)
  })
}
initAtivaScrollSuave();