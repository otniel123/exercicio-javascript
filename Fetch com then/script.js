/*function buscaDadosAPIPublica(id){
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => {
        if(!response.ok){
            throw new Error("Erro ao buscar os dados da API");
        }
        return response.json();
    });
}

buscaDadosAPIPublica(174649684869).then(res => { console.log("Nome: " + res.name); return res; })
.then(res => console.log("Email: " + res.email))
.catch(error => console.error(error));*/


async function buscaDadosAsync(id){
    try{
        const result = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const data = await result.json();
        console.log("Nome: " + data.name);
        console.log("Email: " + data.email);

        if(!result.ok){
            throw new Error("Erro ao buscar os dados da API");
        }
    }
    catch(error){
        console.error("Erro:  " + error);
    }
}

buscaDadosAsync(1);
buscaDadosAsync(174649684869);