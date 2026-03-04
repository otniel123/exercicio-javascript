function onButtonPlusClicked(){
    let h1Element = document.querySelector('#h3legal');

    let valorAtual = Number(h1Element.textContent);

    valorAtual++;

    h1Element.textContent = valorAtual;
}


function onButtonMinusClicked(){
    let h1Element = document.querySelector('#h3legal');

    let valorAtual = Number(h1Element.textContent);

    valorAtual--;

    if(valorAtual < 0){
        alert("Numéro não pode ser menor do que 0.");
        return;
    }

    h1Element.textContent = valorAtual;
}