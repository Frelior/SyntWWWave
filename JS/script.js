// show password
const inputPasswords = document.querySelectorAll('.password');
const showPasswordButtons = document.querySelectorAll('.show__password');

showPasswordButtons.forEach((button, index) =>{
button.addEventListener('click', () => {
    if (inputPasswords[index].type === 'password') inputPasswords[index].type = 'text';
    else inputPasswords[index].type = 'password';
})
})

// passcheck
const passwordCheck = document.querySelector('.password__check');



function passCheck(password){
    let score = 0;
    if ( password.length > 0) score++;
    if (password.length > 6) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*()]/.test(password)) score++;
    return score;
}


document.addEventListener('keyup', () => {
    let passScore = passCheck(document.querySelector('#password_register').value);
    // alert (passScore)
    if (passScore === 0) {
        passwordCheck.style.width = '0%';
        passwordCheck.style.backgroundColor = 'none';
        passwordCheck.style.boxShadow = 'none'
    }
    else if (passScore < 3 && passScore !== 0) {
        passwordCheck.style.width = '33%';
        passwordCheck.style.backgroundColor = 'rgb(255, 0, 0)'
        passwordCheck.style.boxShadow = '0 0 10px 3px rgb(255, 0, 0)'
    } else if (passScore <= 5){
        passwordCheck.style.width = '66%'
        passwordCheck.style.backgroundColor = 'rgb(13, 0, 255)'
        passwordCheck.style.boxShadow = '0 0 10px 3px rgb(13, 0, 255)'
    } else if (passScore > 5){
        passwordCheck.style.width = '100%'
        passwordCheck.style.backgroundColor = 'rgb(38, 255, 0)'
        passwordCheck.style.boxShadow = '0 0 10px 3px rgb(38, 255, 0)'
    }

})

//


//form out animation

const triggerLinkLoginToRegister = document.querySelector('#link_login_to_register');
const loginForm = document.querySelector('#login__form')

const triggerLinkRegisterToLogin = document.querySelector('#link_register_to_login')
const registerForm = document.querySelector('#register__form')

const password_register = document.querySelector('#password_register')
const email_register = document.querySelector('#emailRegister')


triggerLinkLoginToRegister.addEventListener('click', () => {
        // triggerLinkLoginToRegister.style.opacity = '0';
        loginForm.style.padding = "0";
        loginForm.style.height = '3px';
        loginForm.style.overflow = 'hidden';
        setTimeout(() => {
            loginForm.style.width = '80px';
            // loginForm.style.backgroundColor = 'aliceblue';
        }, 200);
        setTimeout(() => {
            loginForm.style.width = '150px';
            loginForm.style.left = '-20%';
        }, 500);
        setTimeout(() => {
            loginForm.style.display = 'none';
        }, 1000);
        setTimeout(() => {
            loginForm.style.left = '120%';
        }, 1100);


        //register card arrive
        registerForm.style.display = 'flex';
        password_register.setAttribute('required','');
        email_register.setAttribute('required','');
    setTimeout(() => {

        // registerForm.style.width = '150px';
        registerForm.style.left = '50%';
        setTimeout(() => {
            registerForm.style.width = '20%';
            // registerForm.style.backgroundColor = 'aliceblue';
        }, 300);
        setTimeout(() => {
            registerForm.style.padding = "1% 1%";
            registerForm.style.height = '40%';
            registerForm.style.overflow = 'unset';
        }, 500);

    }, 1000)

    })


//register card moves off
    triggerLinkRegisterToLogin.addEventListener('click', () => {
        password_register.removeAttribute('required');
        email_register.removeAttribute('required');
        // triggerLinkLoginToRegister.style.opacity = '0';
        registerForm.style.padding = "0";
        registerForm.style.height = '3px';
        registerForm.style.overflow = 'hidden';
        setTimeout(() => {
            registerForm.style.width = '80px';
            // registerForm.style.backgroundColor = 'aliceblue';
        }, 200);
        setTimeout(() => {
            registerForm.style.width = '150px';
            registerForm.style.left = '-20%';
        }, 500);
        setTimeout(() => {
            registerForm.style.display = 'none';
        }, 1000);
        setTimeout(() => {
            registerForm.style.left = '120%';
        }, 1100);


        //login card arrive
        loginForm.style.display = 'flex';   
    setTimeout(() => {

        // registerForm.style.width = '150px';
        loginForm.style.left = '50%';
        setTimeout(() => {
            loginForm.style.width = '20%';
            // registerForm.style.backgroundColor = 'aliceblue';
        }, 300);
        setTimeout(() => {
            loginForm.style.padding = "1% 1%";
            loginForm.style.height = '40%';
            loginForm.style.overflow = 'unset';
        }, 500);

    }, 1000)

    })



