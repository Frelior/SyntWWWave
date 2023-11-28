let password = document.querySelector('#password');
let passwordShow = document.querySelector('.password_show');
// show password
passwordShow.onclick = function(){

    if(password.type === 'password'){
        password.type = 'text';
    }else{
        password.type = 'password';
    }
    
}
// checking password
function passwordCheck(pass){
    let difficultScore = 0;
    if (pass.length > 6) difficultScore++;
    if (pass.length >= 10) difficultScore++;
    if (pass.match(/[a-z]/)) difficultScore++;
    if (pass.match(/[A-Z]/)) difficultScore++;
    if (pass.match(/[0-9]/)) difficultScore++;
    if (pass.match(/[!@#$%^&*()]/)) difficultScore++;
    return difficultScore;
}

// checking password glow line
let form = document.querySelector('.login_page_form');

document.addEventListener('keyup', function(e){

    let password = document.querySelector('#password').value;
    let check = passwordCheck(password);
    if (check === 0) {
        form.classList.remove('easy');
        form.classList.remove('medium');
        form.classList.remove('strong');
    }else if (check < 3 && check > 0) {
        form.classList.add('easy');
        form.classList.remove('medium');
        form.classList.remove('strong');
    } else if (check < 5 && check > 2) {
        form.classList.add('medium');
        form.classList.remove('easy');
        form.classList.remove('strong');
    } else if (check >= 5) {
        form.classList.add('strong');
        form.classList.remove('easy');
        form.classList.remove('medium');
    }
})

//login/register animation

const linkToLogin = document.querySelector('.login_link');
const registerFormn = document.querySelector('#register__form')

linkToLogin.addEventListener('click', function(){
    hideRegisterForm();
})
// i need to remale all this code :)
function hideRegisterForm(){
    linkToLogin.style.opacity = '0';
    registerFormn.style.height = '3px';
    registerFormn.style.padding = '0';
    setTimeout(() => {registerFormn.style.width = '30px';}, 400);
    setTimeout(() => {
        registerFormn.style.width = '350px';
        registerFormn.style.left = '-20%';
    }, 1000);
    setTimeout(() => {
        registerFormn.style.opacity = '0';
    }, 1500);
}

function showLoginForm(){
    linkToLogin.style.opacity = '0';
    registerFormn.style.height = '3px';
    registerFormn.style.padding = '0';
    setTimeout(() => {registerFormn.style.width = '30px';}, 400);
    setTimeout(() => {
        registerFormn.style.width = '350px';
        registerFormn.style.left = '-20%';
    }, 1000);
    setTimeout(() => {
        registerFormn.style.opacity = '0';
    }, 1500);
}