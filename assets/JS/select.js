/* Adiciona um id dinamico para cada classe passada */
const addAttributeforEach = (nameClass, atributo, nameId = '') => {
    document.querySelectorAll(`.${nameClass}`)
    .forEach((el, i) => el.setAttribute(atributo, `${nameId}${i}`))
} 

const addEvents = (el, nameEvent, fun) => {
    document.querySelectorAll(`.${el}`)
    .forEach( element => element.addEventListener(nameEvent, fun))
}

/* Indentifica quantos components selects tem e adicina um id para o nav dinamico */
addAttributeforEach('navbar-select', 'id', 'nav-options-')
/* Idicionando um id para cada input dos components */
addAttributeforEach('ipt-selects', 'id', 'ipt-')
/* Adicionando atributos datas aos nossos containers */
addAttributeforEach('cx-select', 'data-index')
/* Adicionando atributos datas aos nossos navs */
addAttributeforEach('navbar-select', 'data-navs')
addAttributeforEach('ctn-ipt-2', 'id', 'containerIcons-')

/* Adiciona os atributos para cada li correspondente de cada component */
const navsSelects = document.querySelectorAll('.navbar-select')
navsSelects.forEach( (navs, i) => {
   const caminho = `#nav-options-${i}  li`
   const lis = document.querySelectorAll(caminho)
   lis.forEach( li => {
        li.setAttribute('data-lis', `ipt-${i}`)
        li.setAttribute('data-element', i)
   })
})

/* Adiciona as classes para os icons correspondente de cada component */
const iconsSelect = document.querySelectorAll('.navbar-select')
iconsSelect.forEach( (icons, i) => {
    const ctnIcons = document.querySelectorAll(`#containerIcons-${i} i`)
    ctnIcons.forEach( (icon) => {
        icon.classList.add(`icon-${i}`)
    })
})

/* Responsavel de deixar apenas um unico select aberto */
function modifyElement(navSelect){
    const navAtual = navSelect.getAttribute('data-navs')
    const navAll = document.querySelectorAll('.navbar-select')

    navAll.forEach((nav) => {
        if(nav.getAttribute('data-navs') == navAtual){
            nav.classList.toggle('disabled-select')
        } else {
            nav.classList.add('disabled-select')
        }
    })
}

function resetIcons(){
    
}

/* Adiconando os eventos */
addEvents('cx-select', 'click', ({ currentTarget }) => {
  const indexElement = currentTarget.getAttribute('data-index')
  const navSelect = document.querySelector(`#nav-options-${indexElement}`)
  modifyElement(navSelect)
})


addEvents('lis', 'click', ({ currentTarget }) => {
    const optionsValue = currentTarget.getAttribute('data-select')
    const whyInput = currentTarget.getAttribute('data-lis')
    const navsSelects = document.querySelectorAll('.navbar-select')

    document.querySelector(`#${whyInput}`).value = optionsValue
    navsSelects.forEach( x => {
        x.classList.add('disabled-select')
    })
    checkValues(currentTarget, optionsValue)
})

function checkValues(el, valueOptions){
   const whyComponent = el.getAttribute('data-element');
   const icons = document.querySelectorAll(`.icon-${whyComponent}`)
   
   if(valueOptions == ''){
        icons[0].classList.remove('disabled-select')
        icons[1].classList.add('disabled-select')
   } else {
        icons[1].classList.remove('disabled-select')
        icons[0].classList.add('disabled-select')
   }
}