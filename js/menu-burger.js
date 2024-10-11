console.log('Menu burger');

const menuDesplegado = document.getElementById('menu-desplegado')


const handleMenu = () => {

    if (menuDesplegado.classList.contains('top-[-200px]')) {
        console.log('MENU HIDDEN');
        menuDesplegado.classList.remove('top-[-200px]')
        menuDesplegado.classList.add('top-[40px]')
        console.log(menuDesplegado.classList.value);


    } else {
        console.log('MENU VISIBLE');
        menuDesplegado.classList.remove('top-[40px]')
        menuDesplegado.classList.add('top-[-200px]')

    }

}

const closeBurgerMenuOnResize = () => {
    const windowWidth = window.innerWidth;

    // Cierra el menu burger si al aumentar el ancho de la pantalla 
    // este se encuentra abierto

    if (windowWidth > 1024 && !menuDesplegado.classList.contains('top-[-200px]')) {
        menuDesplegado.classList.remove('top-[40px]')
        menuDesplegado.classList.add('top-[-200px]')
    }
}

window.addEventListener("resize", closeBurgerMenuOnResize);