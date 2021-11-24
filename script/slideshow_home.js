let slideIndex = -1;


const next = document.querySelector("#next"); // Global variable that refers to element in HTML
const prev = document.querySelector("#prev"); // Global variable that refers to element in HTML


next.addEventListener("click", btnClick)
prev.addEventListener("click", btnClick)

function btnClick(event) {
  const eventType = event.target.id
  if (eventType === 'next') {
    nextSlide(1)
    reset()
  } else {
    nextSlide(-1)
    reset()
  }
}
let interval;
//Reseting the interval every time the user clicks
function reset() {
  window.clearInterval(interval)
  interval = window.setInterval(() => {
    nextSlide(1);
  }, 5000);
}


function nextSlide(n) {
  const slides = document.getElementsByClassName("slides");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex += n

  if (slideIndex >= slides.length) {
    slideIndex = 0
  }

  if (slideIndex < 0) { 
    slideIndex = slides.length - 1
  }
  slides[slideIndex].style.display = "block";
}

function startSlideShow() {
  nextSlide(1)
  reset()
}

startSlideShow()
