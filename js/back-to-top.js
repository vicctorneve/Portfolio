const backToHome = document.querySelector('.back-to-home');
backToHome.addEventListener('click', function() {
   window.scroll({
      top: 0,
      behavior: 'smooth'
   })
})