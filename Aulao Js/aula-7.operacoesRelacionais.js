let podeDirigir = true

let stringTrue = "true"

//console.log(typeof podeDirigir)
//console.log(typeof stringTrue)

let nome1 = "Antsu"
let nome2 = "Felipe"

//console.log(nome1 == nome2)

let compara = (nome1 == nome2)
//console.log("As strings são iguais?" + compara)

/*
    Maior: >
    Menor: <
    Igual: ==
*/

//console.log(10 < 20) //Retorna se essa premissa é true ou false

let lista = ["elemento A", "elemento B"]

let inclui = lista.includes("elemento C") //Retorna(em booleano) se o array tem um certo elemento 
//console.log(inclui) 

//Aprendendo atribuições de igualdade
// ==
let nota1 = 90
let nota2 = 70

let passouDeAno = (nota1 > 60 && nota2 > 60)
console.log("Passou? " + passouDeAno)


let nome = "João"
let sobrenome = "Carlos"
let nomeCompleto = (nome == "João" && sobrenome == "Carlos")

console.log("Esse nome é o João Carlos? -> " + nomeCompleto)

//--------------------------------------------------------------
// ||
let passouNoEnem = true
let passouNoVestibular = false

let entrouNaFaculdade = (passouNoEnem == true || passouNoVestibular == true)
console.log("Entrou na faculdade? ->" + entrouNaFaculdade)

//--------------------------------------------------------------
// !

 