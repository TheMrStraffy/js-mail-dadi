// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const result = document.querySelector('.result');
const winner = document.createElement('p');
let giocatore = document.querySelector('[name="giocatore"]');
let computer = document.querySelector('[name="computer"]');
const button = document.querySelector('button');

button.addEventListener('click', function(){
  
  giocatore.value = '';
  computer.value = '';
  let numGenerator1 = Math.ceil(Math.random() * 6);
  let numGenerator2 = Math.ceil(Math.random() * 6);
  giocatore.value = numGenerator1;
  computer.value = numGenerator2;
  // Stabilire il vincitore, in base a chi fa il punteggio più alto.
  if (giocatore.value > computer.value){
    winner.innerHTML= "Giocatore ha Vinto!"
  } else if (giocatore.value === computer.value){
    winner.innerHTML= "PAREGGIOOOOO"
  } else {
    winner.innerHTML= "Il computer ha vinto!"
  }
  result.append(winner)
})


