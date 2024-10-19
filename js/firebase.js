console.log('FIREBASE');


const url = "https://allnews-231e3-default-rtdb.europe-west1.firebasedatabase.app"
const project = "global-news"
const database = "prueba.json"

fetch(url + project + database)
    .then(res => res.json())
    .then(res => {
        console.log(res)

    })

function grabarUsuarioNewsletter(yourName, lastName, email) {
    console.log('Grabando Usuario Newsletter');
    
    try{

        fetch(url + project + database, {
            method: 'POST',
            body: JSON.stringify({ yourName, lastName, email })
        })
            .then(res => res.json())
            .then(res => console.log(res))

            console.log(`GRABADO:${yourName} / ${lastName} / ${email} `);
            
    }catch(e){
        console.log(`ERROR --> ${e}`);
        
    }
}

const grabarUsuario = () =>{
    grabarUsuarioNewsletter('xavi','pil','xavi@pil.com')
}
