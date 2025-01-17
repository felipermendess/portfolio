export default function animacaoAoScroll(){
    const sections = document.querySelectorAll('.js-scroll');
    if(sections.length){
        const windowMetade = window.innerHeight * 0.8;
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
