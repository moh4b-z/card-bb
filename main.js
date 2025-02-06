'use sticpt'

const disciplinas = [
    {name: 'PPDM', img: 'icons_facebook.png'},
    {name: 'PRO', img: 'icons_google.png'},
    {name: 'PWBE', img: 'icons_instagram.png'},
    {name: 'PWFE', img: 'icons_mail.png'}
]

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novoImagem.src = `./img/${disciplina.img}`
    novoSpan.textContent = disciplina.name

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoSpan)

    lista.appendChild(novoItem)

}

disciplinas.forEach(criarMenu)