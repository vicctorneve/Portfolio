const menuMobile = document.querySelector('.menu-mobile i');
const menu = document.querySelector('.menu');
const menuLi = document.querySelectorAll('.menu li');

menuMobile.addEventListener('click', function() {
   toggleMenu()
   
   if(!menu.classList.contains('active')){
      closeMenu()
   }

});


const toggleMenu = () => {
   menu.classList.toggle('active');
   menuMobile.classList.toggle('fa-bars')
   menuMobile.classList.toggle('fa-xmark')
}

const closeMenu = () => menu.classList.remove('active')

menuLi.forEach(li => li.addEventListener('click', ()=>{
   closeMenu()
   menuMobile.classList.toggle('fa-bars')
   menuMobile.classList.toggle('fa-xmark')
}));

