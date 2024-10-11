console.log('Menu burger');

const menuDesplegado = document.getElementById('menu-desplegado')



const handleMenu = ()=>{

    

    if(menuDesplegado.classList.contains('top-[-200px]')){
        console.log('MENU HIDDEN');
        menuDesplegado.classList.remove('top-[-200px]')
        menuDesplegado.classList.add('top-[40px]')
        console.log(menuDesplegado.classList.value);
        
        
    }else{
        console.log('MENU VISIBLE');
        menuDesplegado.classList.remove('top-[40px]')
        menuDesplegado.classList.add('top-[-200px]')
        
    }
    


}