var email = window.document.querySelector ('#email')
var assunto = document.querySelector ('#assunto')
var emailOk = false
var assuntoOk = false
var mapa = document.querySelector ('#mapa')


function validaEmail(){
    var txtValidaEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf ('@') == -1 || email.value.indexOf ('.') == -1){
        txtValidaEmail.innerHTML = 'Email Inválido'
        txtValidaEmail.style.color = 'red'
    } else{
        txtValidaEmail.innerHTML = 'Email válido'
        txtValidaEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    var txtValidaAssunto = document.querySelector ('#txtAssunto')
    if (assunto.value.length >= 100){
        txtValidaAssunto.innerHTML = 'Coloque um texto menor'
        txtValidaAssunto.style.color = 'red'
        txtValidaAssunto.style.display = 'block'
    } else{
        txtValidaAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if (emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com Sucesso')
    } else{
        alert ('Preencha o formulário correntamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = '900px'
    mapa.style.heigth = '800px'
}

function mapaNormal(){
    mapa.style.width = '600px'
    mapa.style.heigth = '450px'
}