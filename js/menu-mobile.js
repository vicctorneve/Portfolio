const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const menuLi = document.querySelectorAll('.menu li');

menuMobile.addEventListener('click', function() {
   menu.classList.toggle('active');
});


const closeMenu = () =>{
   menuLi.forEach(li => {
      li.addEventListener('click', function (){
         menu.classList.remove('active')
      })
   });
}

closeMenu()