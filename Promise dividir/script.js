function dividir(a, b){
    return new Promise((resolve, reject) => {
        if(b === 0){
            throw new Error("Não é possível fazer divisão por zero!");
            
        }
        resolve(a / b);
    })
}

dividir(10,2).then(res => console.log(res)).catch(err => console.error(err));