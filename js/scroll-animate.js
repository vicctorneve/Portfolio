const itens = document.querySelectorAll('[data-anime]');

function animateScroll() {
   const windowTop = window.scrollY + window.innerHeight * 0.85;
   itens.forEach(element => {
      if (windowTop > element.offsetTop){
         element.classList.add('animate')
      } else{
         element.classList.remove('animate')
      }
   });
}

window.addEventListener('scroll' ,function() {
   animateScroll()
})