// Comportamiento Menu

const nav = document.getElementById('nav-globalnews');
const liMasVistos = document.getElementById('mas-vistos');
const liEuropa = document.getElementById('europa');
const liInternacional = document.getElementById('internacional');
const liNewsletter = document.getElementById('newsletter');


const checkScroll = ()=>{
    console.log('Checking Scroll:');
    
    console.log(window.scrollY);
    
}


const handleScroll = ()=>{
    if(window.scrollY > 0){
        // hover de los li
        liMasVistos.classList.remove('py-3')
        liMasVistos.classList.add('py-2')
        liEuropa.classList.remove('py-3')
        liEuropa.classList.add('py-2')
        liInternacional.classList.remove('py-3')
        liInternacional.classList.add('py-2')
        liNewsletter.classList.remove('py-3')
        liNewsletter.classList.add('py-2')
        
        
       //Nav
        nav.classList.remove('h-14')
        nav.classList.add('h-10')

    
        
       
 
        

        //Hidden del top
        // topGlobalnews.classList.add('-mt-30')

    }else{
        // hover de los li
        liMasVistos.classList.add('py-3')
        liMasVistos.classList.remove('py-2')
        liEuropa.classList.add('py-3')
        liEuropa.classList.remove('py-2')
        liInternacional.classList.add('py-3')
        liInternacional.classList.remove('py-2')
        liNewsletter.classList.add('py-3')
        liNewsletter.classList.remove('py-2')

        //Altura de la nav
        nav.classList.add('h-14')
        nav.classList.remove('h-10')
       

        //Hidden del top
        // topGlobalnews.classList.remove('-mt-30')
    }
}
    
document.addEventListener('scroll',handleScroll)
