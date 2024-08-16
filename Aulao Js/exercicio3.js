/*
    Crie uma função que irá avaliar as notas de um aluno e sua presença na aula
    
    Entradas da função:
    - PorcentagemPresenca: numero de 0 a 100
    - notaA: numero de 0 a 10
    - notaB: numero de 0 a 10

    Para que o aluno passe de ano, ele deverá ter dois requisitos(os dois devem ser satisfeitos)
    O aluno passará se:
    - a porcentagem de presença for maior que 75
    - a média das notas for mais que 6

    Saída:
    Se o aluno passou, retornar "Passou"
*/

function mediaFinal(nota1, nota2){
    let soma = nota1 + nota2
    let media = soma/2
    return media
}

function avaliacao(media, presenca){
    if(media > 6  && presenca > 7.5){
        console.log("Aprovado!")
    } else {
        console.log("Reprovado!")
    }
}

//Variáveis
let porcentagemPresenca = 7.7
let notaA = 10
let notaB = 4

media = mediaFinal(notaA, notaB)
avaliacao(media, porcentagemPresenca)

