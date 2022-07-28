var idAdvice = document.getElementById('id-advice');
var idAdviceText = document.getElementById('advice');
var idAdviceButton = document.getElementById('random-btn');

var url = 'https://api.adviceslip.com/advice'; // url de la API
window.onload = ramdomAdvice();
function ramdomAdvice() {
    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            idAdviceText.innerHTML = data.slip.advice;
            idAdvice.innerHTML = data.slip.id;
        })
        .catch(function (error) {
            console.log('Error: ' + error);
        });
}

idAdviceButton.addEventListener('click', ramdomAdvice);


