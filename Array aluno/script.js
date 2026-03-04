let listaAluno = [
    aluno1 = {
        nome: "Otniel Marques",
        nota: 10
    },
    aluno2 = {
        nome: "Sara Nicoletti",
        nota: 9
    },
    aluno3 = {
        nome: "Luis Alex Nicoletti",
        nota: 0
    }
]

for(const aluno of listaAluno){
    if(aluno.nota >= 7){
        console.log(aluno.nome + ": Aprovado")
    }else{
        console.log(aluno.nome + ": Reprovado")
    }
}