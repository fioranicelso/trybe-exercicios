const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');



// 2. Crie uma função que adicione a classe 'tech' ao elemento selecionado;
// 2.1. Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?
function addTechClass(event){
  firstLi.classList.remove('tech');
  secondLi.classList.remove ('tech');
  thirdLi.classList.remove ('tech');
  event.target.className = ('tech');
}

firstLi.addEventListener('click', addTechClass);
secondLi.addEventListener('click',addTechClass);
thirdLi.addEventListener('click',addTechClass);

// 3. Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';
function changeBoxText(event){
  let ondeMuda = document.querySelector('.tech');
  ondeMuda.innerText = event.target.value;
}
input.addEventListener('keyup',changeBoxText)

// 4. Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
// 4.1. Que tal redirecionar para seu portifólio?
function doubleClick() {
  window.location.href = 'http://google.com';
  window.location.replace
}
myWebpage.addEventListener('dblclick',doubleClick)


// 5. Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;
function changeCaracColor() {
  myWebpage.style.color='red';
}
myWebpage.addEventListener('mouseover',changeCaracColor)

function comeBackColor(event) {
  event.target.style.color='white';
}
myWebpage.addEventListener('mouseout', comeBackColor);


// Segue abaixo um exemplo do uso de event.target:


function resetText(event) {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}

firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.