const loader = document.querySelector("#loader");
const load = loader.querySelector('.load')

window.addEventListener("load", function(){
   this.setTimeout(()=>{
      showBall()

   },100)
   setTimeout(()=>{
      vanish()
   },1000)
})


function vanish() {
   loader.classList.add('disppear')
}

function showBall(){
   load.classList.remove('hide')
}
