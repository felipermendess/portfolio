export default function menuMobile(){
    const buttonMenu = document.querySelector('.buttonMenu');
    const menuList = document.querySelector('.header-menu');
    
    function openMenu(event){
        if(menuList.classList.contains('active') && buttonMenu.classList.contains('active') ){
            menuList.classList.remove('active');
            buttonMenu.classList.remove('active');
        }else{
            menuList.classList.add('active');
            buttonMenu.classList.add('active');
        }
    }
    
    buttonMenu.addEventListener('click', openMenu);
    buttonMenu.addEventListener('touchstart', openMenu);
}

