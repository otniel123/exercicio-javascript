function operaNumero(numero){
    return new Promise((resolved, reject) =>{
        resolved(numero);
        reject("Erro");
    })
}

operaNumero(2325).then(res => res * 2).then(res => res + 5).then(res => console.log(res));