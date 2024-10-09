console.log('Form setup');

const nameForm = document.getElementById('name-form').value;
const lastNameForm = document.getElementById('last-name-form').value;
const emailForm = document.getElementById('email-form').value;


const enviarFormulario = ()=>{
    console.log('Enviando formulario');
    
    try{
        const datosUsuario = {
            'nombre':nameForm,
            'apellido':lastNameForm,
            'emailk':emailForm,
        }
    
        console.log(datosUsuario);
        
    }catch(e){

    }
   
    

    
}
