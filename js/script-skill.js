const descriptionSkill = document.querySelectorAll('.skills .description-skill')
const cardSkills = document.querySelectorAll('.carousel .card')
const containerTemp = document.querySelector('.container-introduction')

const hideContainerTemp = () => containerTemp.style.display="none";

const hideDescriptionSkills =() =>{
   for (let i = 0; i < descriptionSkill.length; i++) descriptionSkill[i].style.display="none";
}

hideDescriptionSkills()
showDescriptSkill()

function showDescriptSkill(){
   for (let i = 0; i < cardSkills.length; i++) {
      cardSkills[i].addEventListener('click', function(){
         hideDescriptionSkills()
         hideContainerTemp()
         descriptionSkill[i].style.display="flex"
      })
   }
}
