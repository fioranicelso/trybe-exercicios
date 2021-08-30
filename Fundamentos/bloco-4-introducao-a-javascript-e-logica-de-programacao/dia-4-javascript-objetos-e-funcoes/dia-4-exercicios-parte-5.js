let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info.recorrente = "Sim";

// // for (todosOsValores in info){
// //     console.log(info[todosOsValores]);
// }

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics#178",
    nota: "O Último MacPatinhas",
    recorrente: "Sim"
}
if (info && info2) {
    info.recorrente && info2.recorrente === "Sim"
    recorrentes = "Ambos Recorrentes"
}

console.log(info.personagem,"e",info2.personagem);
console.log (info.origem,"e",info.origem);
console.log(info.nota,"e",info2.nota);
console.log(recorrentes)


