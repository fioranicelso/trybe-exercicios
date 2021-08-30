// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impar = 0;

for (let index = 0; index<numbers.length;index += 1){
    if (numbers[index] % 2 !== 0){
      impar = numbers[index]
}
} 
console.log(impar)


const n = 10;
let resultado =100;
for (let i = 0; i<=n;i+=1) {
    resultado-=i;
    
}
console.log(resultado)