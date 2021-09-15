function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

function numbersDaysMonth() {
  for (let index = 0; index < dezDaysList.length; index += 1) {
    let idDays = document.getElementById('days');
    let liDays = document.createElement('li');
    liDays.className = 'day';
    liDays.innerText = dezDaysList[index];
    idDays.appendChild(liDays)
    if (dezDaysList[index] === 24 || dezDaysList[index] === 31) {
    liDays.className = 'day holiday';
    } else if (dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18){
    liDays.className = 'day friday';
    } else if (dezDaysList[index] === 25){
      liDays.className = 'day holiday friday'
    }
    }
  }
numbersDaysMonth();
// QUESTÃO 2
let localBtn = document.querySelector('.buttons-container');
let createBtn = document.createElement('button');

  function holidayBtn (param1){
    createBtn.id = 'btn-holiday';
    createBtn.innerHTML = param1;
    localBtn.appendChild(createBtn)
    
    function backGroundColorHoliday () {
      let diasFeriado = document.querySelectorAll('.holiday');
      for (let index = 0; index < diasFeriado.length; index+= 1) {
        diasFeriado[index].style.backGroundColor = 'red';
      }
    }
    backGroundColorHoliday();
  }
holidayBtn('Feriados');
// QUESTÃO 3
//Exercício 3:Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo
// dos dias que possuem a classe "holiday".É interessante que este botão possua também a lógica inversa. 
//Ao ser clicado novamente ele retorna à configuração inicial com a cor "rgb(238,238,238)" .

function changeBtnBackColor (){
  let diasFeriado = document.querySelectorAll('.holiday');
  createBtn.addEventListener('click',diasFeriado)
  for (let index = 0; index < diasFeriado.length; index+= 1) {
    diasFeriado[index].style.backGroundColor = "blue"
    }
        
  }
