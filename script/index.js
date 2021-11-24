function main() {
  const main = document.querySelector('main') // Global variable that refers to element in HTML
  main.id = 'main_index'
  main.className = 'main_index'


  const gch = document.createElement('div')
  gch.className = 'grid-container-home'

  // main.innerHTML = ""
  //Sponsors------------------------------------------------
  const sponsors = document.createElement('div')
  sponsors.id = 'sponsors'
  sponsors.appendChild(createSponsors())


  gch.appendChild(sponsors)



  //Center--------------------------------------------------
  const center = document.createElement('div')
  center.id = 'center'

  const newsH = document.createElement('h1')
  newsH.innerHTML = 'News'
  center.appendChild(newsH)

  center.appendChild(createSlideshow())
  center.appendChild(createSlideshowButtons())

  const athletesH = document.createElement('h2')
  athletesH.innerHTML = 'Athletes'
  center.appendChild(athletesH)

  center.appendChild(createAthletes())
  gch.appendChild(center)

  //Supporters----------------------------------------------
  const supporters = document.createElement('div')
  supporters.id = 'supporters'
  supporters.appendChild(createSupporters())


  gch.appendChild(supporters)

  //Main----------------------------------------------------
  main.appendChild(gch)



}

//Sponsors functions--------------------------------------
function createSponsors() {
  const container = document.createElement('div')
  container.className = 'grid-container-sponsors'

  const h1 = document.createElement('h1')
  h1.innerHTML = 'Sponsors'
  container.appendChild(h1)

  for (let i = 0; i < sponsors.length; i++) {
    container.appendChild(makeSponsor(i))
  }
  return container
}

function makeSponsor(i) {
  const sponsor = sponsors[i]
  const a = document.createElement('a')
  a.href = sponsor.link
  a.target = " ";
  const div = document.createElement('div')
  div.className = 'sponsor'

  const img = document.createElement('img')
  img.src = sponsor.img
  img.alt = 'Picture of: ' + sponsor.name

  const h4 = document.createElement('h4')
  h4.innerHTML = sponsor.name

  const p = document.createElement('p')
  p.innerHTML = sponsor.text


  a.appendChild(img)
  a.appendChild(h4)
  a.appendChild(p)
  div.appendChild(a)
  return div
}

//Center functions----------------------------------------

function createAthletes() {
  const container = document.createElement('div')
  container.className = 'grid-container-athletes'

  for (let i = 0; i < shooters.length; i++) {
    const element = shooters[i]
    if (element.isShown) {
      container.appendChild(makeAthlete(i))
    }
  }
  return container
}

function makeAthlete(i) {
  const shooter = shooters[i]

  const img = document.createElement('img')
  img.src = shooter.image.mainImage
  img.alt = 'Picture of ' + shooter.about.firstName

  const textDiv = document.createElement('div')
  textDiv.className = 'text'
  textDiv.innerHTML = shooter.about.firstName + ' ' + shooter.about.lastName

  const divAthlete = document.createElement('div')
  divAthlete.appendChild(img)
  divAthlete.appendChild(textDiv)

  const a = document.createElement('a')
  a.className = 'athlete'
  a.href = 'shooters.html?shooter=' + shooter.id

  a.appendChild(divAthlete)

  return a

}

function createSlideshow() {
  const container = document.createElement('div')
  container.className = 'slideshow-container'


  for (let i = 0; i < news.length; i++) {
    container.appendChild(makeSlide(i))
  }
  return container
}

function makeSlide(i) {
  const article = news[i]
  const aSlides = document.createElement('a')
  aSlides.className = 'slides fade pointer active'
  aSlides.href = 'news.html#' + article.id


  const img = document.createElement('img')
  img.src = article.img
  img.alt = article.header

  const textDiv = document.createElement('div')
  textDiv.className = 'text'
  textDiv.innerHTML = article.header

  aSlides.appendChild(img)
  aSlides.appendChild(textDiv)

  return aSlides
}

function createSlideshowButtons() {

  const buttonSlidesDiv = document.createElement('div')
  buttonSlidesDiv.className = 'buttonsSlides'

  const prevSpan = document.createElement('span')
  prevSpan.innerHTML = '<'
  prevSpan.id = 'prev'

  buttonSlidesDiv.appendChild(prevSpan)

  const nextSpan = document.createElement('span')
  nextSpan.innerHTML = '>'
  nextSpan.id = 'next'

  nextSpan.className = prevSpan.className = 'pointer active'
  buttonSlidesDiv.appendChild(nextSpan)

  return buttonSlidesDiv

}

// supporters functions--------------------------------------
function createSupporters() {
  const container = document.createElement('div')
  container.className = 'grid-container- supporters'

  const h1 = document.createElement('h1')
  h1.innerHTML = 'Supporters'
  container.appendChild(h1)

  for (let i = 0; i < supporters.length; i++) {
    container.appendChild(makeSupporters(i))
  }
  return container
}

function makeSupporters(i) {
  const supporter = supporters[i]
  const a = document.createElement('a')

  const div = document.createElement('div')
  div.className = 'supporter'

  const h3 = document.createElement('h3')
  h3.innerHTML = supporter.name

  const alder = document.createElement('h5')
  alder.innerHTML = supporter.alder
  const club = document.createElement('h5')
  club.innerHTML = supporter.klubb
  const merits = document.createElement('h5')
  merits.innerHTML = supporter.meritter


  a.appendChild(h3)
  a.appendChild(alder)
  a.appendChild(club)
  a.appendChild(merits)
  div.appendChild(a)
  return div

}
