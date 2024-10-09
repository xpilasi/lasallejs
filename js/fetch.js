// Fetching de Data

console.log('Fetching');


const API_KEY = 'ba7b4f96502b43c2b407aead54c9a8d6'


const urls = {
    hotNews: `https://newsapi.org/v2/top-headlines?country=us&pageSize=8&apiKey=${API_KEY}`,
    euroNews: `https://newsapi.org/v2/everything?q=europe&pageSize=5&apiKey=${API_KEY}`,
    worldNews: `https://newsapi.org/v2/everything?q=europe&pageSize=8&apiKey=${API_KEY}`
}


async function fetchAllNews() {
    try {
        const [hotNewsResponse, euroNewsResponse, worldNewsResponse] = await Promise.all([
            fetch(urls.hotNews).then(res => res.json()),
            fetch(urls.euroNews).then(res => res.json()),
            fetch(urls.worldNews).then(res => res.json())
        ]);
º
        const hotNews = hotNewsResponse.articles;
        const euroNews = euroNewsResponse.articles;
        const worldNews = worldNewsResponse.articles;

        mostrarNoticiasMasVistas(hotNews);
        // mostrarNoticiasEuropa(euroNews);
        mostrarNoticiasMundiales(worldNews);

        console.log(hotNews, euroNews, worldNews);

    } catch (e) {
        console.log('FAILED');
        console.log(e);
    }
}


fetchAllNews();


let mostrarNoticiasMasVistas = (noticias) => {

    const noticiasLista = document.getElementById('contenedor-noticias-mas-vistas')
    noticiasLista.innerHTML = noticias.map(noticias => {

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



let mostrarNoticiasEuropa = (noticias) => {

    const noticiasLista = document.getElementById('section-noticias-de-europa')
    noticiasLista.innerHTML = noticias.map(noticias => {

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



let mostrarNoticiasMundiales = (noticias) => {

    const noticiasInt = document.getElementById('section-noticias-internacionales')
    noticiasInt.innerHTML = noticias.map(noticias => {

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
