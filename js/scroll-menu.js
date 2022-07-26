const menuLi = document.querySelectorAll('.menu a');

menuLi.forEach(item => {
   item.addEventListener('click', scrollToIdonClick)
});
function scrollToIdonClick(e) {
   e.preventDefault();
}