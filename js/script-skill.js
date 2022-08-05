const ContainerInstruction = document.querySelector('.container-introduction')

const cardHtml = document.querySelector('#card-html');
const cardCss = document.querySelector('#card-css')
const cardJs = document.querySelector('#card-js')
const cardGit = document.querySelector('#card-git')
const cardGithub = document.querySelector('#card-github')


const skillHtml = document.querySelector('.skill-html')
const skillCss = document.querySelector('.skill-css')
const skillJs = document.querySelector('.skill-js')
const skillGit = document.querySelector('.skill-git')
const skillGithub = document.querySelector('.skill-github')


cardHtml.addEventListener('click', function(){
   skillHtml.classList.remove('skill-html')
   hideInstruction()
   addClassCss()
   addClassJs()
   addClassGit()
   addClassGithub()
})
cardCss.addEventListener('click', function(){
   skillCss.classList.remove('skill-css')
   hideInstruction()
   addClassHtml()
   addClassJs()
   addClassGit()
   addClassGithub()
})
cardJs.addEventListener('click', function (){
   skillJs.classList.remove('skill-js')
   hideInstruction()
   addClassHtml()
   addClassCss()
   addClassGit()
   addClassGithub()
})
cardGit.addEventListener('click', function(){
   skillGit.classList.remove('skill-git')
   hideInstruction()
   addClassHtml()
   addClassCss()
   addClassJs()
   addClassGithub()
})
cardGithub.addEventListener('click', function(){
   skillGithub.classList.remove('skill-github');
   hideInstruction()
   addClassHtml()
   addClassCss()
   addClassJs()
   addClassGit()
})

function hideInstruction (){
   ContainerInstruction.style.display = 'none';
}
function addClassHtml(){
   skillHtml.classList.add('skill-html')
}
function addClassCss(){
   skillCss.classList.add('skill-css')
}
function addClassJs(){
   skillJs.classList.add('skill-js')
}
function addClassGit(){
   skillGit.classList.add('skill-git')
}
function addClassGithub(){
   skillGithub.classList.add('skill-github')
}
