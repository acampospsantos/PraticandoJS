/*
    Faça um programa que declare uma lista de alunos de uma escola, com seus respectivos nomes
    Depois, você irá tentar adicionar um aluno novo na lista de alunos. Você deve checar o seguinte:
        - se a lista de alunos já contêm 10 alunos, então você deve printar uma mensagem que o limite máximo foi atingido
        - se não, adicione o novo aluno à lista
*/

let listaAlunos = ["Anderson", "Matheus", "Lucas", "Ricardo", "Felipe", "Laura", "João"]

if (listaAlunos.length >= 10){
    console.log("Limite máximo atingido!")
} else {
    listaAlunos.push("Fulano")
    console.log("Aluno novo adicionado!")
}

/*
    Crie duas listas:
    - Uma lista de compras vazias 
    - Uma lista de frutas com as seguintes frutas:
        Uva, acerola, laranja, maracujá, goiaba

    Você deverá adicionar comidas do seu gosto na lista de compras.
    Porém, ao final, você deverá checar se a sua lista de compras contém pelo menos 3 frutas da lista de frutas

    Caso isso não seja verdade, printe no terminal:
    - deve haver pelo menos 3 frutas
*/
let listaCompras = []
let listaFrutas = ["Uva", "Acerola", "Laranja", "Maracujá", "Goiaba"]

listaCompras.push("Mamão")
listaCompras.push("Melão")
listaCompras.push("Melancia")

let numeroFrutas = 0

listaCompras.map((elemento) => {
    if (listaFrutas.includes(elemento)) {
        numeroFrutas = numeroFrutas + 1
    }
})

if (numeroFrutas >= 3){
    console.log("Show!")
} else {
    console.log("Deve haver pelo menos 3 frutas!")
}