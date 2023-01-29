const arrowLeft = document.querySelector('#arrow-left');
const arrowRight = document.querySelector('#arrow-right');
const carousel = document.querySelectorAll(".carousel .card");

const cards = [...carousel]
let baseCard = 5;


function handleScreenSize(){
   let screenWidth = window.screen.width

   if(screenWidth > 550) {
      baseCard = 5;
   }

   if(screenWidth < 540){
      baseCard = 4;
      changeBaseCard()
   }

   if(screenWidth <= 470){
      baseCard = 3;
      changeBaseCard()
   }
   if(screenWidth <= 360){
      baseCard = 2;
      changeBaseCard()
   }

}

window.addEventListener("resize" , handleScreenSize)
window.addEventListener("load" , handleScreenSize)


function changeBaseCard(){
   hiddenCard = cards.length - baseCard;
   px = hiddenCard * -80;
}

let hiddenCard = cards.length - baseCard;
let px = hiddenCard * -80;
let contLeft = 0;

arrowLeft.addEventListener("click", ()=>{

   if(contLeft == 0){
      contLeft = hiddenCard * -80
   }else{
      contLeft+= 80
   }
   cards.forEach(element => clickArrowLeft(element));
})

const clickArrowLeft = (element) => element.style.transform = `translateX(${contLeft}px)`;

arrowRight.addEventListener("click", ()=>{
   if(contLeft == px){
      contLeft = 0
   }else{
      contLeft-= 80
   }
   
   cards.forEach(element => clickArrowLeft(element));
})

