let produto = {
    nome: "Televisão Smart 42 polegadas",
    preco: 1599.90,
    estoque: 20,
    disponivel: true
}

produto.preco = 2000;

produto.categoria = "Eletrônico"

for(const [key, value] of Object.entries(produto)){
    console.log(key + ": " + value);
}
