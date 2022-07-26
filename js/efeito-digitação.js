const myName = document.querySelector('section.home h1#name');
const profissao = document.querySelector('section.home p#profissao');

function typing (msg, write) {
   let text = msg;
   for (let i = 0; i < text.length; i++) {
      setTimeout(function(){
         write.innerHTML += text[i]
      },75 * i)
   }
}
function effectTyping () {
   typing('Meu nome é Vicctor Neves', myName)
   typing('Desenvolvedor Front End', profissao)
}
effectTyping()