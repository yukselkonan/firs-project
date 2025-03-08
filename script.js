const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const repassword = document.getElementById('repassword')

function error(input,message){
    input.className = 'form-control is-invalid'
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = 'invalid-feedback';
}
function succes(input){
    input.className = 'form-control is-valid'
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value === ''){
        error(username,'username gerekli')
    }else{
        succes(username)
    }
    if(email.value === ''){
        error(email,'email gerekli')
    }else{
        succes(email)
    }

    if(password.value === ''){
        error(password,'passward gerekli')
    }else{
        succes(password)
    }

    if(repassword.value === ''){
        error(repassword,'yeniden giriniz')
    }else{
        succes(repassword)
    }

})