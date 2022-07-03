const numeroRandomico = parseInt(Math.random() * 6);

let msgErro = [
    'Ops, errou',
    'Hmm, não foi dessa vez',
    'tente novamente',
    'Você errou, mas continue tentando'
];

let msgNumeroInvalido = [

    'Os numeros devem estar entre 0 a 5',
    'Você escolher um número inválido',
    'Escolha um número válido',
    'Ops, você não escolheu um número válido',
    'Tente escolher um número válido'
];

const arrayErroRandom = msgErro[Math.floor(Math.random() * msgErro.length)];
const numeroErradoRandom = msgNumeroInvalido[Math.floor(Math.random() * msgNumeroInvalido.length)];


const chute = document.querySelector('.chutar')
const resetar = document.querySelector('#chutao')



chute.addEventListener('click', function chutar() {

    let resultados = document.querySelector("#resultado");
    let chute = parseInt(document.querySelector("#chutao").value);


    if (chute === numeroRandomico) {
        resultados.innerText = "Parabéns você acertou!"
        resultados.classList.remove('acertou');

        //timer para recarregamento da pagina 
        setInterval(function () {
            document.location.reload(true);
        }, 10000)


    } else if (chute > 5 || chute < 0) {
        resultados.innerText = numeroErradoRandom;
        resultados.classList.add('acertou');

        setInterval(function () {
            document.location.reload();
        }, 2000)


    } else {
        resultados.innerText = arrayErroRandom;
        resultados.classList.add('acertou');

        setInterval(function () {
            document.location.reload();
        }, 1500)

    }


});

// reset de numeros do input e dos resultados do html
resetar.addEventListener('click', function () {

    let resetResultado = document.querySelector('.resultado')

    resetar.value = '';
    return resetResultado.innerHTML = '';

});

