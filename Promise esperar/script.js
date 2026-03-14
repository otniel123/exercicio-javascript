function esperar(ms){
    return new Promise((resolve) => {
        setTimeout(() =>
        resolve("Promisse foi resulvida em " + ms + " milissegundos"), ms)
    })
}

esperar(10000).then((res) => console.log(res));