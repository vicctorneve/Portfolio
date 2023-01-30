const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const carousel = document.querySelectorAll(".carousel .card");

let baseCard;
let hiddenCard;
let ScreenPx;
let contLeft = 0;


function handleScreenSize(){
   let screenWidth = window.screen.width

   baseCard = 5;

   if(screenWidth < 540)baseCard = 4;
   if(screenWidth <= 470) baseCard = 3;
   if(screenWidth <= 380) baseCard = 2;  
   if(screenWidth <= 295) baseCard = 1;
   changeBaseCard()
}

window.addEventListener("resize" , handleScreenSize)
window.addEventListener("load" , handleScreenSize)


function changeBaseCard(){
   hiddenCard = carousel.length - baseCard;
   ScreenPx = hiddenCard * -80;
}

arrowLeft.addEventListener("click", ()=>{

   if(contLeft == 0){
      contLeft = hiddenCard * -80
   }else{
      contLeft+= 80
   }
   carousel.forEach(element => clickArrowLeft(element));
})

const clickArrowLeft = (element) => element.style.transform = `translateX(${contLeft}px)`;

arrowRight.addEventListener("click", ()=>{
   if(contLeft == ScreenPx){
      contLeft = 0
   }else{
      contLeft-= 80
   }
   
   carousel.forEach(element => clickArrowLeft(element));
})

