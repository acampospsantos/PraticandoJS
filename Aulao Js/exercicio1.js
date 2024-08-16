/*
Faça um código para realizar a média de notas de um aluno

O código deve conter:
- Uma variável pra primeira nota
- Uma variável pra segunda nota
- Uma variável pra terceira nota
- Uma variável que armazene a média das notas

Ao final, printe no terminal a média
*/

let primeiraNota=10
let segundaNota=4
let terceiraNota=7
let media = (primeiraNota + segundaNota + terceiraNota)/3

console.log("A media da nota foi: " + media)

/*
Faça um código para mostrar no terminal o nome de um programador e o seu salário anual
Você irá declarar as seguintes variaveis:
- O nome do programador
- O sobrenome do programador
- O salário mensal
Depois, deverá printar no terminal
- O nome completo do programador
- O salário total recebido no ano (salário anual)
*/

let nome= "Matheus"
let sobrenome = "Lustosa"
let salarioMensal= 3000

let nomeCompleto = nome + " " + sobrenome
let salarioAnual = salarioMensal*12

console.log(nomeCompleto)
console.log(salarioAnual)

/*
Faça um programa que mostre a quantidade de lugares sobrando em uma sala de aula
Declare as seguintes variáveis:
- Lugares ocupados
- Quantidade total de lugares
Ao final, printe no terminal a quantidade de lugares disponíveis
*/
let quantidadeTotal = 100
let lugaresOcupados = 27

let lugaresVazios = quantidadeTotal - lugaresOcupados

console.log("A quantidade de lugares vazios: " + lugaresVazios)