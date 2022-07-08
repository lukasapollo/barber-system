import { forEachComponent } from './lib/jump.js'

/* Vamos indetifiar nossos elementos com esse data */
forEachComponent.addAttribute('cp-2-ctn', 'data-cptwo') 

forEachComponent.addEvents('cp-2-ctn', 'click', ({ currentTarget }) => {
    let indexComponent = Number(currentTarget.getAttribute('data-cptwo'))

    const navComponent = document.querySelectorAll(".options-cp2")

    navComponent.forEach((component, i) => {
        if(i == indexComponent){
            component.classList.toggle('disabled-component')
            component.classList.toggle('effect-cp2')
        }
    })
    
})