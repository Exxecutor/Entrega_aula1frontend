let nome = window.document.getElementById('nome')
let email= document.querySelector('#email')
let assunto= document.querySelector('#assunto')
let nomeOk=false
let emailOk=false
let assuntoOk=false
let mapa= document.querySelector('#mapa')

nome.style.width='100%'
email.style.width='100%'
assunto.style.width='100%'

function validaNomePorTagName(){
    let txtNome=document.querySelector('#txtNome')
    if(nome.value.length <3){
        txtNome.innerHTML='Nome inválido'
        txtNome.style.color='red'
        } else{
            txtNome.innerHTML='Nome válido'
            txtNome.style.color='green'
            nomeOk=true
        }
}

function validaEmail(){
    let txtEmail= document.querySelector('#txtEmail')

    if(email.value.indexOf('@')==-1 || email.value.indexOf('.')==1){
        txtEmail.innerHTML='Email inválido'
        txtEmail.style.color='red'
    } else{
        txtEmail.innerHTML='Email válido'
        txtEmail.style.color='green'
        emailOk=true
    }
}

function enviar(){
    if (nomeOk==true && emailOk==true && assuntoOk==true) {
    alert("Olá "+ nome.value+ " , obrigado pelo feedback. Sua mensagem foi enviada")
    } else{
        alert("Preencha o formulario corretamente")
    }
}

function validaAssunto(){
    let txtAssunto= document.querySelector('#txtAssunto')

    if(assunto.value.lengh>=100){
        txtAssunto.innerHTML='Texto muito grande. Digite menos de 100 caracteres.'
        txtAssunto.style.color='red'
    }else{
        txtAssunto.style.display='none'
        assuntoOk=true
    }
}

function mapaZoom(){
    mapa.style.width= '800px'
    mapa.style.height='600px'

}

function mapaNormal(){
    mapa.style.width= '400px'
    mapa.style.height= '250px'

}

