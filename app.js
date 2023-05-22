
// funcionalidades para barra de navegacion
const nav = document.querySelector("#nav-bar");
const botonAbrir = document.querySelector("#boton-abrir");
const botonCerrar =document.querySelector("#boton-cerrar");
const BotonesBarra = document.querySelectorAll("#nav-link")
const botonVolverArriba = document.querySelector("#boton-volver-arriba")

botonAbrir.addEventListener("click", () =>{
    nav.classList.add("nav-visible");
} )

botonCerrar.addEventListener("click", () =>{
    nav.classList.remove("nav-visible")
})

BotonesBarra.forEach((boton) =>{
  boton.addEventListener("click", () =>{
    nav.classList.remove("nav-visible")
  })
})

//funcionalidades para slider

const sliderContainer = document.querySelector('.slider');
const sliderImages = document.querySelectorAll('.imagen-slider');
const totalImages = sliderImages.length;


let currentIndex = 0;


function showNextImage() {
  sliderImages[currentIndex].style.display = 'none';
  currentIndex++;
  if (currentIndex >= totalImages) {
    currentIndex = 0;
  }
  sliderImages[currentIndex].style.display = 'block';
}


function startTimer() {
   sliderImages[currentIndex].style.display = 'block';

  setInterval(showNextImage, 5000);
}

window.addEventListener('load', startTimer);

// funcionalidad para el boton volver arriba

window.addEventListener("scroll", () =>{
  if(window.scrollY > 200){
    botonVolverArriba.classList.add("active-boton")
  }else{
    botonVolverArriba.classList.remove("active-boton")
  }
})

botonVolverArriba.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior : "smooth"
  })
})