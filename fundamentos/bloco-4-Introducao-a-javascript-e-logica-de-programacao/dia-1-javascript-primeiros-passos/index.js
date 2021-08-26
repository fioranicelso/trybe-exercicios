// PARTE 1 Faça cinco programas, um para cada operação aritmética básica.Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)

const a = 5;
const b = 10;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

const numero1 = 1530;
const numero2 = 12340;

if (numero2<numero1) {
    console.log ("Verdadeiro")    
} else {
    console.log("Falso");
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const teste1 = 10;
const teste2 = 2;
const teste3 = 15;

if (teste1>teste2) {
    console.log("Teste 1 é o maior");    
} else if (teste1>teste3){
    console.log("Teste 1 é o maior");
} else if (teste2>teste1){
    console.log("Teste 2 é o maior");
} else if (teste2>teste3){
    console.log("Teste 2 é o maior")
} else if (teste3>teste1){
    console.log("Teste 3 é o maior");
} else if (teste3>teste2){
    console.log("Teste 3 é o maior")
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const numero = -100;
 if (numero>0) {
     console.log("positivo");
 } else if (numero<0){
     console.log("negativo");
 } else {
     console.log("Zero");
 }

//  Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo.
//  Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário.
//  Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

const angulo1 = 60
const angulo2 = 60
const angulo3 = 60

if (angulo1 === 60 && angulo2 === 60 &&  angulo3 === 60) {
    console.log ("True")     
} else {
    console.log ("False")
}


// Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case) .
// Se a peça passada for inválida, o programa deve retornar uma mensagem de erro.

let peça = "Cavalo"
let move = "Movimento em L"
const resultado = peça+ " " +move

if (peça === "Cavalo" && move === "Movimento em L" ){
    console.log(resultado)
} else {
    console.log ("Verifique a peça (e)(ou)o movimento desejado")
}

// Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
// Porcentagem >= 90 -> A
// Porcentagem >= 80 -> B
// Porcentagem >= 70 -> C
// Porcentagem >= 60 -> D
// Porcentagem >= 50 -> E
// Porcentagem < 50 -> F
// O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.

let nota = -101;

if (nota<0){
    console.log("ERRO! Por favor, verifique a nota inserida")
}
if (nota>100){
    console.log("ERRO! Por favor, verifique a nota inserida")
} else if (nota>=90) {
    console.log("A")
} else if (nota>=80){
    console.log("B")
} else if (nota>=70){
    console.log("C")
} else if (nota>=60){
    console.log("D")
} else if (nota>=50){
    console.log ("E")
} else if (nota<50 && nota>0){
    console.log ("F")
}
