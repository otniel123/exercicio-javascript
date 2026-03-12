const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve('Promise resolvida com sucesso!')
    }, 10000)
}).then(console.log,)