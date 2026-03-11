function adicionarNaLista(){
    let input = document.querySelector('#input');
    let lista = document.querySelector('#lista');
    let liElement = document.createElement('li');
    liElement.textContent = input.value;

    lista.appendChild(liElement);
}