const contacts =  document.getElementById('contacts')
var x = 0
// const aboutpage = document.querySelector('.about')

document.getElementById('menubar').addEventListener('click',()=>{
    // aboutpage.style.display='none'
    // contacts.style.display='flex'
   
    contacts.classList.toggle('addedclassforlinks')
    
     document.body.style.backgroundImage='none'
 

})



document.getElementById("contacts").addEventListener("click",()=>{

  contacts.classList.remove('addedclassforlinks')

  document.body.style.backgroundImage='none'
})