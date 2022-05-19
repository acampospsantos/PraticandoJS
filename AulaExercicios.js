/////Primeiro Exercício: Imprimir três variáveis diferentes
//Criando variáveis
let idade = 10;
let nome = "Anderson";
let altura = 1.87;
//Imprimindo variáveis
console.log(idade);
console.log(nome);
console.log(altura);



/////Segundo Exercício: Inverter valores de a e b
let a = 'vermelho';
let b = 'azul';

let c = a; //Criei uma variável que armazena o valor de a inicialmente
a = b;
b = c;

console.log(a);
console.log(b);



/////Terceiro Exercício: Escreva uma função que usa 2 números e retorna o maior entre eles
let primeiroValor = 10;
let segundoValor = 11;
function maxValue(firstValue, secondValue){
    if(firstValue > secondValue){
        return firstValue;
    } else if (firstValue < secondValue){
        return secondValue;
    } else {
        return firstValue; //poderia retornar o segundo valor também
    }
}
console.log(maxValue(primeiroValor, segundoValor));