export default function scrollSuave(){
    const linksInternos = document.querySelectorAll('a[href^="#"]');
    
    function scrollToSection(event){
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);
        if(section){
            const topo = section.offsetTop;
            window.scrollTo({
                top: topo,
                behavior: "smooth",
            })
        }else{
            console.log('Não foi possível encontrar nenhuma section!');
        }
    }
    
    linksInternos.forEach(link => {
        link.addEventListener('click', scrollToSection);
    })
}

