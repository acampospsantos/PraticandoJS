let lista = [0, 1, 2, 3, 4, 5]
let listaNomes = ["Antsu", "João", "Laura", "Lukita", "Matheus"]

//console.log(listaNomes[0])


let listaNumeros = [20, 50, 90]
//console.log(listaNumeros[0] + listaNumeros[2])
//console.log(listaNumeros)

//listaNumeros.push(150)
//console.log(listaNumeros)

console.log(listaNomes)
listaNomes.push("Lorenzo")
console.log(listaNomes)

listaNomes.pop() //O método pop retira o último elemento do array

listaNomes.reverse() //Reverte os elementos do array
console.log(listaNomes)

listaNomes[0] = "Bertoncello" //É possível alterar/modificar os elementos do array manualmente
console.log(listaNomes)