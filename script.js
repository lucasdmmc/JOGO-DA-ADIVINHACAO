//Variaveis
const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')
const screan1 = document.querySelector('.screan1')
const screan2 = document.querySelector('.screan2')
const randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos 

btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keypress', function (e) {
  if(e.key === 'Enter') {
    screan1.classList.remove('hide')
    screan2.classList.add('hide')
  } else if(e.key == true) {
    xAttempts = 1
  }

})

//Funções Callback
function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector('#inputNumber')

  if(Number(inputNumber.value) == randomNumber) {
    toggleScrean()

    screan2.querySelector('h2').innerText = `Você acertou em ${xAttempts} 
    tentativas`
  }

  inputNumber.value = ''
  xAttempts++
}

function handleResetClick() {
  toggleScrean()
  xAttempts = 1
}

function toggleScrean() {
  screan1.classList.toggle('hide')
  screan2.classList.toggle('hide')
}