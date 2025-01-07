export default function scrollSuave(){
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    const events = ['click', 'touchstart'];
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        const topo = section.offsetTop;
        window.scrollTo({
            top: topo,
            behavior: "smooth",
        })
    }
    
    linksInternos.forEach(link => {
        events.forEach(evento => {
            link.addEventListener(evento, scrollToSection);
        })
    })

}

