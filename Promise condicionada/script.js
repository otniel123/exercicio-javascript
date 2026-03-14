function validaIdade(idade){
    return new Promise((resolve, reject) =>{
 
        if(idade >= 18){
                resolve("O usuário é maior de idade!");
            }
        else{
                reject("O usuário não é maior de idade!");
            }
        }
    )
}

validaIdade(2).then(res => console.log(res)).catch(err => console.log(err));