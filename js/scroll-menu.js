const menuLi = document.querySelectorAll('.menu a');

menuLi.forEach(item => {
   item.addEventListener('click', scrollToIdonClick)
});

const getScrollTopByHref = element => {
   const id = element.getAttribute('href');
   return document.querySelector(id).offsetTop
}

const scrollToPosition = to => {
   window.scroll({
      top:to,
      behavior: 'smooth'
   })
}

function scrollToIdonClick(e) {
   e.preventDefault();
   const to = getScrollTopByHref(e.target);
   scrollToPosition(to);
}