const button = document.querySelector('.fa-angle-down')

// click en icono para mostrar menu en landing
button.addEventListener('click', (e) => {
    e.preventDefault()
    let desplegable = document.querySelector('.menu-desplegable')
    

    desplegable.classList.toggle('show') 

   
}) 






