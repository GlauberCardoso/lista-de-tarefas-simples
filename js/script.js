/*
function enter(event) {
    if (event.key == "Enter") {
        let newLi = document.createElement('li')
        document.querySelector('ul').appendChild(newLi)
        newLi.innerHTML = document.querySelector('input').value
    }
    
}

document.addEventListener('keyup', enter)
*/

//RESOLUÇÃO:

//PEGANDO OS ELEMENTOS
const input = document.querySelector('input')
const lista = document.querySelector('ul')

//FUNÇÕES
function enter(e) {
    if(e.key === 'Enter') {
        //Adicionar elemento LI na lista
        const newLi = document.createElement('li')
        newLi.innerHTML = input.value
        lista.appendChild(newLi)

        //Limpar o campo de texto
        input.value = ''
    }
}

//EVENTOS
input.addEventListener('keyup', enter)