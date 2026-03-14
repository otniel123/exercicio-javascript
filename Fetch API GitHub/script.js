/*async function buscaDadosUserGitHub(userName){
    const fetchAcao = await fetch(`https://api.github.com/users/${userName}`,{
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
    });
    return fetchAcao;
}

console.log(buscaDadosUserGitHub("otniel123"))

var hashMap = 0;

buscaDadosUserGitHub("otniel123").then(res => {
    return res.json()
}).then(data => {
    hashMap = data;
    console.log( hashMap)
})

console.log("Informações do usuário: " + hashMap)
*/

function limparLista(){
    const lista = document.getElementById('list');
    lista.innerHTML = " ";
}

async function buscaDadosUserGitHub(){
    var userName = document.getElementById('user').value;
    const fetchAcao = await fetch(`https://api.github.com/users/${userName}`,{
        method: 'GET',
        headers: {
            Accept: 'application/vnd.github.v3+json',
        },
    });

    const lista = document.getElementById('list');

    const id = document.createElement('li');
    const login = document.createElement('li');
    const url = document.createElement('li');
    const type = document.createElement('li');
    const name = document.createElement('li');
    const company = document.createElement('li');
    const blog = document.createElement('li');
    const location = document.createElement('li');
    const email = document.createElement('li');
    const bio = document.createElement('li');
    const createdAt = document.createElement('li');
    const updatedAt = document.createElement('li');

    const data = await fetchAcao.json()

    id.textContent = "Id: " + data.id
    login.textContent = "Login: " + data.login
    url.textContent = "URL: " + data.url
    type.textContent = "Tipo: " + data.type
    name.textContent = "Nome: " + data.name;
    company.textContent = "Empresa: " + data.company
    blog.textContent = "Blog: " + data.blog
    location.textContent = "Localização: " + data.location
    email.textContent = "Email: " + data.email
    bio.textContent = "Biografia: " + data.bio
    createdAt.textContent = "Criado em: " + data.created_at
    updatedAt.textContent = "Atualizado em: " + data.updated_at

    const elementos = [id, login, url, type, name, company, blog, location, email, bio, createdAt, updatedAt];

    for(i = 0; i < elementos.length; i++){
        lista.appendChild(elementos[i])
    }
}

