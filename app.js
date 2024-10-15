const URL_APIs =
  "https://newsapi.org/v2/everything?q=apple&from=2024-10-14&to=2024-10-14&sortBy=popularity&apiKey=0f20571eb4bc4ae6b7647b353641ccc0";

fetch(URL_APIs)
  .then((response) => response.json())
  .then((articles) => {
    dataNews = articles;
    console.log(articles);
    MostrarNews(dataNews);
  })
  .catch((error) => console.error("Error al obtener los países:", error));

function crearCards(news) {
  return `
          <div class="col-md-4">
            <div class="card mb-4 cardPais">
              <img src="${ news.urlToImage }" class="card-img-top" alt="iamgen noticas">
              <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">
                  <strong>Capital:</strong> ${news.source.name} <br>
                  <strong>Fechas de Publicacion:</strong> ${news.publishedAt} <br>
                  <strong>Descripción:</strong> ${news.description ? news.description : "No disponible"}
                  <strong>Autor:</strong> ${news.author}
                </p>
              </div>
            </div>
          </div>
        `;
}

function MostrarNews(noticias) {
    const contenedorNews = document.getElementById('noticias')
    contenedorNews.innerHTML =''
    noticias.articles.forEach(news => {
        contenedorNews.innerHTML += crearCards(news)
    });
}


