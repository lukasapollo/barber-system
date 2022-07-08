const forEachComponent = {
    addAttribute(nameClass, atributo, nameId = ''){
        document.querySelectorAll(`.${nameClass}`)
        .forEach((el, i) => el.setAttribute(atributo, `${nameId}${i}`))
    },

    addEvents(el, nameEvent, fun){
        document.querySelectorAll(`.${el}`)
        .forEach( element => element.addEventListener(nameEvent, fun))
    }
}

export { forEachComponent };