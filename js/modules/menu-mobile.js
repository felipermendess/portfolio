export default function menuMobile(){
    const buttonMenu = document.querySelector('.buttonMenu');
    const menuList = document.querySelector('.header-menu');
    
    function openMenu(event){
        if(menuList.classList.contains('active')){
            menuList.classList.remove('active');
            document.querySelector('.icon').src = "img/buttonMenu.svg";
        }else{
            menuList.classList.add('active');
            document.querySelector('.icon').src = "img/closeMenu.svg";
        }
    }
    
    buttonMenu.addEventListener('click', openMenu);
}

