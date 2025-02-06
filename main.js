'use stict'

const disciplinas = [
    'PPDM',
    'PRO',
    'PWBE',
    'PWFE'
]

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novoImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novoImagem.src = './img/icons_facebook.png'
    novoSpan.textContent = disciplina

    novoItem.appendChild(novoImagem)
    novoItem.appendChild(novoSpan)

    lista.appendChild(novoItem)

}

disciplinas.forEach(criarMenu)