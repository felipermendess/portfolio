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

function ativeHandleClickBickraft(){
  const linkBikcraft = document.querySelector('.bikcraft');

  function handleClickBickcraft(event){
    event.preventDefault();
    alert('Projeto em andamento!');
  }

  linkBikcraft.addEventListener('click', handleClickBickcraft);
}
ativeHandleClickBickraft();

function animacaoAoScrollFormacao(){
  const formacao = document.querySelector('.formacao-conteudo');
  
    const windowMetade = window.innerHeight * 0.6;
    function animaAoScrollFormacao(){
      const formacaoTop = formacao.getBoundingClientRect().top;
      const isFormacao = (formacaoTop - windowMetade) < 0;
      if(isFormacao){
        formacao.classList.add('ativo');
      }
    }
    animaAoScrollFormacao();
  
    window.addEventListener('scroll', animaAoScrollFormacao);
  
}
animacaoAoScrollFormacao();

function animacaoAoScrollFooter(){
  const footer = document.querySelector('.footer-conteudo');
  
    const windowMetade = window.innerHeight * 0.6;
    function animaAoScrollFooter(){
      const footerTop = footer.getBoundingClientRect().top;
      const isFooter = (footerTop - windowMetade) < 0;
      if(isFooter){
        footer.classList.add('ativo');
      }
    }
    animaAoScrollFooter();
  
    window.addEventListener('scroll', animaAoScrollFooter);
}
animacaoAoScrollFooter();

function animacaoAoScroll(){
    const sections = document.querySelectorAll('.scroll-js');
    if(sections.length){
      const windowMetade = window.innerHeight * 0.6;
      function animaScroll(){
        sections.forEach(section => {
          const sectionTop = section.getBoundingClientRect().top;
          const isSection = (sectionTop - windowMetade) < 0;
          if(isSection){
            section.classList.add('ativo');
          }
        })
      }
      animaScroll();

    window.addEventListener('scroll', animaScroll);

    }
    
}
animacaoAoScroll();