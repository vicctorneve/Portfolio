const menuLinks = document.querySelectorAll('.menu a');

const getScrollTopByHref = element => {
   const id = element.getAttribute('href');
   if(id === "#about"){
      return document.querySelector(id).offsetTop - 10
   }
   return document.querySelector(id).offsetTop 
}

const scrollToPosition = to => {
   window.scroll({
      top:to,
      behavior: 'smooth'
   })
}

const scrollToIdonClick =(e) => {
   e.preventDefault();
   const to = getScrollTopByHref(e.target);
   scrollToPosition(to);
}

menuLinks.forEach(item => item.addEventListener('click', scrollToIdonClick));
   
