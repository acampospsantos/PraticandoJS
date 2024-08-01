# Aprendendo Java Script

# TEORIA

## USANDO COMANDO DE IMPRIMIR
```
console.log('Hello, World!');
console.log('Testando!');
```

## CRIANDO VARIÁVEL
```
let idade = 10;
```

##  CRIANDO VARIÁVEL E IMPRIMINDO SEU VALOR
```
let idade = 10;
console.log(idade);
```

## Tipos de Valores:
```
let nome = 'Lukita' --> string
let idade = 25 --> number
let aprovado = true --> boolean
let sobrenome = undefined => let sobrenome --> undefined
let corSelecionado = null --> null (usado para resetar um valor)
```

## Tipos de Referência
- Objeto
- Arrays
- Functions


## Declarando um Objeto
```
let pessoa = {
    nome: 'Lauruta' ,
    sobrenome: 'Países Baixos' ,
    idade: 22 ,
    estaAprovada: true ,
    engenheiraRenomada: true
}
console.log(pessoa);
console.log(pessoa.idade);
```


## Criando Array
//OBS: (Lembrando que a contagem dos índices começa em 0)
```
let array = ['Jão', 22, true, 'Olinda']; //Array pode armazenar vários tipos de valores(diferentes) 
console.log(array);
console.log(array[2]); //Imprime o elemento de indice 2 (nesse caso é o true)
console.log(array.length); //Imprime o tamanho do Array(=4)
```


## Criando Função: (P/ nomear: Verbo + substantivo) = camelCase -> Boa prática 
```
let corSite = 'Preto';
function resetaCor(){
    corSite = ""; //Deixa a corSite vazia --> ou seja, resetou a cor
};
console.log(corSite); //Aq vai imprimir que a corSite é Preto
resetaCor();
console.log(corSite); //Vai imprimir corSite como vazio

let corSite = 'Azul'
function alteraCor(cor, tonalidade){
    corSite = cor + ' ' + tonalidade;
};
console.log(corSite); //Aq vai imprimir corSite como Azul
alteraCor('Vermelho', 'claro');
console.log(corSite); //Vai imprimir corSite como Vermelho claro
```


## Tipos de Operadores:
- Operadores Aritméticos
- Operadores de Atribuição
- Operadores de Comparação
- Operadores Lógicos
- Operadores Bitwise

## - Operadores Aritméticos (operador matemático)
// + , - , * , / , **
```
let salario = 100;
console.log(salario + salario);
console.log(salario - salario);
console.log(salario * salario);
console.log(salario / salario);
console.log(5 ** 5); //Exponencial
```


//++ --  (Operadores de Incremento e Decremento)
//console.log(++salario)


## Operadores de Atribuição 
//let valorTeclado = 100;
//valorTeclado = valorTeclado + 100  == valorTeclado += 100
//console.log(valorTeclado);


## Operadores de Igualdade
//Igualdade Estrita (*MAIS RECOMENDADA*)
//console.log(1 === 1) //Além d tá comparando os valores, a igualdade tbm tá comparando os tipos
//Igualdade solta
//console.log(1 == '1')//Comparando apenas valores, nesse caso dá true 


## Operador Ternário
//Um cliente, se tiver mais de 100 pontos é Premium, se não, é comum
//let pontos = 100;
//let tipo = pontos > 100 ? 'premium' : 'comum';
//          (COMPARAÇÃO) (CASO SEJA VDD) (CASO SEJA FALSO)
//console.log(tipo);


## Operadores Lógicos
// AND(&&), OR, NOT

## Operador Lógico And (&&)
//Retorna True se os dois operandos forem true
//let maiorDeIdade = true;
//let passouAutoEscola = true;
//let podeDirigir = maiorDeIdade && passouAutoEscola;
//console.log(podeDirigir);

## Operador Lógico Or (||)
//Retorna true se ao menos um dos operandos for true
//let maiorDeIdade = false;
//let passouAutoEscola = true;
//let podeDirigir = maiorDeIdade || passouAutoEscola;
//console.log(podeDirigir);

## Operador Lógico Not (!)
//Nega a premissa
//let maiorDeIdade = false;
//let passouAutoEscola = false;
//let podeDirigir = maiorDeIdade && passouAutoEscola;
//console.log(podeDirigir);
//let inapto = !podeDirigir;
//console.log(inapto);


## Comparações NÃO Booleanos
//Falsy
//Truthy

## Condicionais: if.. else , Switch.. case
## Condicional if
//if (condicao){
    //Codigo a ser executado
//} 
//else if (outraCondicao){
    //Codigo a ser executado
//}
//else {
    //Codigo a ser executado
//}

## Condicional switch
//let permissao = 'comum' // comum, gerente, diretor
//switch(permissao){
//    case 'comum':
//        console.log('Usuário Comum');
//        break;

//    case 'gerente':
//        console.log('Usuário Gerente');
//        break;
    
//    case 'diretor':
//        console.log('Usuário Diretor');
//        break;

//  default:
//      console.log('Usuário Inválido');
//}


## Loops(laços): 
//For
//While
//Do.. while
//For.. in
//For.. of

// Usando For
//for (let i=0; i <= 5; i++){
//    if(i % 2 !== 0){ 
//        console.log(i); //imprime os índices ímpares
//    }
//}

// Usando While
//let i = 0;
//while(i <= 5){
//    if(i%2 !== 0){
//        console.log(i); //imprime os índices ímpares
//    }
//    i=i+1;
//}

// Usando do.. while
//let i = 1;
//do{
//    console.log('Digitando...', i);
//    i = i + 1;
//} while (i <= 10);

// For.. in
// For.. of
