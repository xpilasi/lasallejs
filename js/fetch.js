const API_KEY = 'c61afccfa8b8479395da14249ff35569'


// Recogemos todas las urls necesarias y las almacenamos en un objeto

const urls = {
    hotNews: `https://newsapi.org/v2/top-headlines?sources=bbc-news&pageSize=8&apiKey=${API_KEY}`,
    euroNews: `https://newsapi.org/v2/everything?q=europe&pageSize=5&apiKey=${API_KEY}`,
    worldNews: `https://newsapi.org/v2/everything?q=world&pageSize=8&apiKey=${API_KEY}`
}


// Llamamos a la función asíncrona fetchAllNews para llamar a la api en cada seccion

async function fetchAllNews() {
    try {
        const [hotNewsResponse, euroNewsResponse, worldNewsResponse] = await Promise.all([
            fetch(urls.hotNews).then(res => res.json()),
            fetch(urls.euroNews).then(res => res.json()),
            fetch(urls.worldNews).then(res => res.json())
        ]);
        const hotNews = hotNewsResponse.articles;
        const euroNews = euroNewsResponse.articles;
        const worldNews = worldNewsResponse.articles;

        mostrarNoticiasMasVistas(hotNews);
        mostrarNoticiasEuropa(euroNews);
        mostrarNoticiasMundiales(worldNews);

    } catch (e) {
        console.log('FAILED');
        console.log(e);
    }
}


fetchAllNews();

let mostrarNoticiasMasVistas = (noticias) => {

    const noticiasLista = document.getElementById('contenedor-noticias-mas-vistas')

    // Se obtienen los datos de la llamada, se recorre la respuesta con un array map

    noticiasLista.innerHTML = noticias.map(noticias => {

        let titulo = noticias.title;
        let imagen = noticias.urlToImage;
        let urlArticle = noticias.url;
        let publishedAt = noticias.publishedAt;
        let author = noticias.author;
        let dataTime;


        // Recortamos los titulos largos para conseguir que tengan la misma altura

        if (titulo.length > 72) {
            titulo = titulo.substring(0, 72) + '...';
        }

        // Acortamos la fecha de publicacion para que no muestre la hora

        dataTime = publishedAt.substring(0, 10);

        return `<a href="${urlArticle}">
                            <div class="flex flex-col justify-between p-5 bg-white gap-6 h-full hover:scale-110 hover:cursor-pointer transition-transform duration-300 ">
                                <div class="flex flex-col gap-3">
                                    <img src="${imagen}" class="h-[15rem] w-auto object-cover" alt="imagen noticia">
                                    <h3 class="font-bold lg:text-xl md:text-2xl text-base">${titulo}</h3>
                                </div>
                                 <div class="flex justify-between">
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${author}</span>
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${dataTime}</span>
                                </div>
                         </div>
                </a>`

    }).join('')
}



let mostrarNoticiasEuropa = (noticias) => {

    const noticiasLista = document.getElementById('contenedor-noticias-europa')
    noticiasLista.innerHTML = noticias.map((noticias, index) => {

        if (noticias.urlToImage) {

            let titulo = noticias.title
            let imagen = noticias.urlToImage
            let gridClass = '';
            let imgClass = '';
            let urlArticle = noticias.url;
            let publishedAt = noticias.publishedAt;
            let author = noticias.author;
            let dataTime;

            if (titulo.length > 72) {
                titulo = titulo.substring(0, 72) + '...';
            }

            // Identificamos el primer item del contenedor grid,
            // aplicamos la clase correspondiente de tailwind para que ocupe
            // dos columnas y dos filas en dispositivos a partir de md

            if (index == 0) {
                gridClass = 'md:row-span-2 md:col-span-2';
                imgClass = 'md:h-[654px]'
                console.log('creada clase extra');

            } else {
                imgClass = 'md:h-[15rem]'
            }

            // Acortamos la fecha de publicacion para que no muestre la hora

            dataTime = publishedAt.substring(0, 10);


            return `<a href="${urlArticle}" class="${gridClass}">
                            <div class="flex flex-col justify-between p-5 bg-white gap-6 h-full hover:scale-110 hover:cursor-pointer transition-transform duration-300 ">
                                <div class="flex flex-col gap-3">
                                    <img src="${imagen}" class="${imgClass} w-auto object-cover" alt="imagen noticia">
                                    <h3 class="font-bold lg:text-xl md:text-2xl text-base">${titulo}</h3>
                                </div>
                                 <div class="flex justify-between">
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${author}</span>
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${dataTime}</span>
                                </div>
                         </div>
                </a>
            `

        }


    }).join('')
}



let mostrarNoticiasMundiales = (noticias) => {

    const noticiasInt = document.getElementById('contenedor-noticias-internacionales')
    noticiasInt.innerHTML = noticias.map(noticias => {

        if (noticias.urlToImage) {

            let titulo = noticias.title;
            let imagen = noticias.urlToImage;
            let urlArticle = noticias.url;
            let publishedAt = noticias.publishedAt;
            let author = noticias.author;
            let dataTime;


            if (titulo.length > 72) {
                titulo = titulo.substring(0, 72) + '...';
            }

            // Acortamos la fecha de publicacion para que no muestre la hora

            dataTime = publishedAt.substring(0, 10);

            return `<a href="${urlArticle}">
                            <div class="flex flex-col justify-between p-5 bg-white gap-6 h-full hover:scale-110 hover:cursor-pointer transition-transform duration-300 ">
                                <div class="flex flex-col gap-3">
                                    <img src="${imagen}" class="h-[15rem] w-auto object-cover" alt="imagen noticia">
                                    <h3 class="font-bold lg:text-xl md:text-2xl text-base">${titulo}</h3>
                                </div>
                                 <div class="flex justify-between">
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${author}</span>
                                    <span><i class="fa-regular fa-calendar pr-2"></i>${dataTime}</span>
                                </div>
                         </div>
                </a>`

        }

    }).join('')
}