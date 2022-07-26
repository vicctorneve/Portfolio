const menuMobile = document.querySelector('.menu-mobile');
const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('.menu li');

menuMobile.addEventListener('click', function() {
   menu.classList.toggle('active');
});
for(li of menuLinks) {
   li.addEventListener('click', function (){
      menu.classList.remove('active')
   })
}