const popUpWindow = document.getElementById('popup');


const enviarFormulario = (event) => {
  event.preventDefault();  // Evita que el formulario se envíe hasta que se validen los campos.

  let nameForm = document.querySelector("#name-form");
  let lastNameForm = document.querySelector("#last-name-form");
  let emailForm = document.querySelector("#email-form");

  // Validar todos los campos
  let esValido = true;
  esValido &= validarCampo(nameForm, /^[a-z ,.'-]+$/i);
  esValido &= validarCampo(lastNameForm, /^[a-z ,.'-]+$/i);
  esValido &= validarCampo(emailForm, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

  if (esValido) {
    console.log("Formulario válido. Enviando datos...");
    // enviar los datos al servidor, o dejar que el formulario se envíe
    showConfirmationPopUp()
    // event.target.submit(); // Solo si es válido se permite el envío  <-- Lo cancelo porque si se envia, no se ve el popup
  } else {
    console.log("Formulario inválido. Revisa los campos.");
  }
};

// Función para validar un campo individual
const validarCampo = (campo, regex) => {
  if (campo.value.match(regex)) {
    campo.classList.remove("border-red-500", "border-2");
    campo.classList.add("border-green-500", "border-2");
    return true;
  } else {
    campo.classList.remove("border-green-500", "border-2");
    campo.classList.add("border-red-500", "border-2");
    return false;
  }
};

// Validación en tiempo real con 'keyup' para cada campo
document.querySelector("#name-form").addEventListener("keyup", (event) => {
  validarCampo(event.target, /^[a-z ,.'-]+$/i);
});

document.querySelector("#last-name-form").addEventListener("keyup", (event) => {
  validarCampo(event.target, /^[a-z ,.'-]+$/i);
});

document.querySelector("#email-form").addEventListener("keyup", (event) => {
  validarCampo(event.target, /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
});


// Mostrar ventana emergente de confirmacion


function showConfirmationPopUp() {

  console.log(`Has pedido que se mostrara el popup de confirmacion. El elemento DOM de la ventana es: ${popUpWindow}`)

  if (popUpWindow && popUpWindow.classList.contains('bottom-[-150px]')) {
    popUpWindow.classList.add('bottom-0', 'opacity-1');

    console.log('clase botton-0 añadida');


    setTimeout(() => {
      popUpWindow.classList.remove('bottom-0');
    }, 3000);
  }
}

