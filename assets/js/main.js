
const arrayMsgErro = [
    'Ops, errou',
    'Hmm, não foi dessa vez',
    'tente novamente',
    'Você errou, mas continue tentando'
];

const arrayMsgNumeroInvalido = [

    'Os numeros devem estar entre 0 a 5',
    'Você escolher um número inválido',
    'Escolha um número válido',
    'Ops, você não escolheu um número válido',
    'Tente escolher um número válido'
];

const arrayMsgAcerto = [
    'Parabéns',
    'Uau, você acertou essa.',
    'Você acertou, muito bom.',
    'Parabéns você acertou.',
    'Parabén, esta se tornando um mentalista.'
];



const chute = document.querySelector('.chutar')
const resetar = document.querySelector('#chutao')



chute.addEventListener('click', function chutar() {
    const numeroRandomico = parseInt(Math.random() * 6);
    const msgErroRandom = arrayMsgErro[Math.floor(Math.random() * arrayMsgErro.length)];
    const msgNumeroErradoRandom = arrayMsgNumeroInvalido[Math.floor(Math.random() * arrayMsgNumeroInvalido.length)];
    const msgSucesso = arrayMsgAcerto[Math.floor(Math.random() * arrayMsgAcerto.length)];
    
    let resultados = document.querySelector("#resultado");
    let chute = parseInt(document.querySelector("#chutao").value);


    if (chute === numeroRandomico) {
        resultados.innerText = msgSucesso;
        resultados.classList.remove('acertou');


    } else if (chute > 5 || chute < 0) {
        resultados.innerText = msgNumeroErradoRandom;
        resultados.classList.add('acertou');


    } else {
        resultados.innerText = msgErroRandom;
        resultados.classList.add('acertou');

    }


});

// reset de numeros do input e dos resultados do html
resetar.addEventListener('click', function () {

    let resetResultado = document.querySelector('.resultado')

    resetar.value = '';
    return resetResultado.innerHTML = '';

});

