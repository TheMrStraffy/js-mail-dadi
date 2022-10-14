//componenti
const emailInput = document.querySelector('input');
const submitButton = document.querySelector('button');
const accessResult = document.querySelector('.accessResult');
const access = document.createElement('p');
let isConnected = false;
//1. creare lista email
const listEmail = [
  "carmelo.miuccio2@gmail.com",
  "thecrowstraffy@gmail.com",
  "yeksir@gmail.com",
  "boolean75@gmail.com"
];
//2.controllare la lista email e matchare i risultati per accedere
submitButton.addEventListener('click', function(){
  
  access.innerHTML ='';
  for(let i = 0; i < listEmail.length; i++){
   if (listEmail[i] === emailInput.value){
    isConnected = true;
   }
  }

  if (isConnected){
    access.innerHTML = `Benvenuto`;
  } else{
    access.innerHTML = `Negato`;
  }
  accessResult.append(access)
});
