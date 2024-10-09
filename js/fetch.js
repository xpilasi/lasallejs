// Fetching de Data

console.log('Fetching');


const API_KEY = 'ba7b4f96502b43c2b407aead54c9a8d6'
// const DB = `https://newsapi.org/v2/everything?q=Apple&from=2024-10-07&sortBy=popularity&apiKey=${API_KEY}`
const DB_1 = `https://newsapi.org/v2/everything?q=world&apiKey=${API_KEY}`


    try{

        fetch(DB_1)
        .then(res=>res.json())
        .then(data=>{
           
            // Primeros 9 artículos:
            const news = data.articles.slice(0,9)
            mostrarNoticiasMasVistas(news);
            console.log(news);
           
            
        })

    }catch(e){
        console.log('FAILED');
        console.log(e);

    }


let mostrarNoticiasMasVistas = (noticias)=>{
    
    const noticiasLista = document.getElementById('contenedor-noticias-mas-vistas')
    noticiasLista.innerHTML = noticias.map(noticias=>{

        let titulo = noticias.title
        let imagen = noticias.urlToImage

        

        return `<div class="bg-green-200 grid-item px-0 overflow-hidden hover:scale-110 hover:cursor-pointer transition-transform duration-300">
                    
                    <div class="relative w-full" style="aspect-ratio: 16/9;">
                        <img src="${imagen}" alt="" class="absolute top-0 left-0 w-full h-full object-cover" />
                    </div>
                    <p class="bg-white px-3 py-3 font-bold lg:text-xl md:text-2xl text-base h-full">${titulo}</p>
         
                </div>`
                
               

    }).join('')
}



