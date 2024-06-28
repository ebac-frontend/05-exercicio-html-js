console.log('Script carregado');

const form = document.getElementById('form-depositorio');
let ValA = document.getElementById('valor-a');
let ValB = document.getElementById('valor-b');
let formEValido = false;

function validaValor(ValA,ValB){
    return parseFloat(ValB.value) > parseFloat(ValA.value);
}

form.addEventListener('submit', function(e){
    e.preventDefault(); 
    const mensagemSucesso = `Valor A realmente é menor que o Valor B. Parabéns :)</b>`;

    formEValido = validaValor(ValA, ValB);
    if (formEValido){
        const containerMensagemSucesso = document.querySelector('.mensagemSucesso');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';

        ValA.value = '';
        ValB.value = '';
        document.querySelector('.error-message').style.display = 'none';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }    
})