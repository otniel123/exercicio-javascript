async function callJson() {
    return fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res =>{
        if(!res.ok){
            throw new Error;
        }
        else{
            return res.json();
        }
    }
    ).then(data => console.log("Titulo: " + data.title))
    .catch(err => console.error("ID NÃO EXISTE SEU BURRO!"));
}

async function mainFunction(){
    result = await callJson();
    console.log(result);
}

mainFunction()