//Estruturas de repetição

//Uso do for
let lista = ["Anderson", "Jones", "Filipe", "Pedro"]

/*
for (let i=0; i < 4; i++){
    console.log("O valor atual é: " + i)
    console.log(lista[i])
}
*/
for (let i=0; i < lista.length; i++){
    console.log("O valor atual é: " + i)
    console.log(lista[i])
}

//Uso do while

let reais = 0
while(reais != 100){
    reais = reais + 1
    //console.log(reais)
}

let idade = 0

while (idade != 18){
    idade = idade + 1
}
console.log("Idade é igual a: " + idade)
console.log("Já pode dirigir!")