function writeNews() {//Function that writes ut all the news 
  const main = document.querySelector('main')// Locaal variable that refers to element in HTML
  const newsContainer = document.createElement('div')
  newsContainer.id = 'news-container'
  newsContainer.innerHTML = `
    <h1 id="news-site-headline">NEWS</h1>
    `
  for (let i = 0; i < news.length; i++) {
    const element = news[i];
    const newsDiv = document.createElement('div')
    newsDiv.className = 'news-div'


    const header = document.createElement('h2')
    header.innerHTML = element.header

    const img = document.createElement('img')
    img.src = element.img
    img.className = 'news-img'
    img.alt = element.header

    const textDiv = document.createElement('div')
    textDiv.className = 'textbox'

    textDiv.appendChild(header)
    for (const paragraph of element.text) {
      const p = document.createElement('p')
      p.innerHTML = paragraph
      textDiv.appendChild(p)
    }

    newsDiv.appendChild(textDiv)
    newsDiv.appendChild(img)

    //Lager ett anker for å referere til den lokale linken på riktig posisjon
    const anchor = document.createElement('a')
    anchor.id = element.id
    anchor.className = 'anchor'
    newsDiv.appendChild(anchor)


    newsContainer.appendChild(newsDiv)
    main.appendChild(newsContainer)
  }
}