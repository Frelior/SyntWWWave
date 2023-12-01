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
        registerForm.style.width = '80px';
    setTimeout(() => {

        registerForm.style.width = '150px';
        registerForm.style.left = '50%';
        setTimeout(() => {
            
            registerForm.style.width = '300px';
            // registerForm.style.backgroundColor = 'aliceblue';
        }, 300);
        setTimeout(() => {
            
            registerForm.style.padding = "1% 1%";
            registerForm.style.height = '300px';
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
            loginForm.style.width = '300px';
            // registerForm.style.backgroundColor = 'aliceblue';
        }, 300);
        setTimeout(() => {
            loginForm.style.padding = "1% 1%";
            loginForm.style.height = '300px';
            loginForm.style.overflow = 'unset';
        }, 500);

    }, 1000)

    })

  

    // linear-gradient(90deg, rgba(0, 0, 0, 0) 0px
    // linear-gradient(180deg, rgba(0, 0, 0, 0) 0px, rgba(54, 226, 248, 0.5) 0%, rgba(39, 230, 255, 0.908) 3px, rgba(0, 0, 0, 0) 0px), linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, rgba(54, 226, 248, 0.5) 0%, rgba(39, 230, 255, 0.908) 3px, rgba(0, 0, 0, 0) 0px);


    // const gridBackground = window.getComputedStyle(syntwaveGrid).background;  // узнай что это такое!
    // const gradientRegex = /linear-gradient\(\d+deg,.*?\)/g; //поиск строки linear-gradient(180deg, rgba(0, 0, 0, 0) 0px
    // const gragients = gridBackground.match(gradientRegex);

    const syntwaveGrid = document.querySelector('.body_syntwave-grid');
  //[1] [3]  подсказочка по индексам градиентов, они будут меняться и возвращаться строкой
    let gridBackgroundArray = ['linear-gradient(180deg, rgba(0, 0, 0, 0) ', '0', 'px, rgba(54, 226, 248, 0.5) 0%, rgba(39, 230, 255, 0.908) ', '3', 'px, rgba(0, 0, 0, 0) 0px), linear-gradient(90deg, rgba(0, 0, 0, 0) 0px, rgba(54, 226, 248, 0.5) 0%, rgba(39, 230, 255, 0.908) 3px, rgba(0, 0, 0, 0) 0px)'];
    let aRA;

  
    var start = null;
    var element = document.querySelector('.body_syntwave-grid');
    
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      element.style.transform =
        "translateX(" + Math.min(progress / 10, 200) + "px)";
      if (progress < 2000) {
        window.requestAnimationFrame(step);
      }
    }
    
    // window.requestAnimationFrame(step);

//   animationGrid();




    // visualizer

    // const visualizerBtn = document.querySelector('.triangle');
    // const audio = document.querySelector('.audio');
    // const vizual = document.querySelector('.visual');

    // visualizerBtn.addEventListener('click', e =>{
    //     audio.paused ? audio.play() : audio.pause();
    //     visualizerBtn.classList.toggle('btn-play');
    //     visualizerBtn.classList.toggle('btn-pause');
    // })



    // window.AudioContext = window.AudioContext || window.webkitAudioContext;
    // const ctx = new window.AudioContext();
    // const analyser = ctx.createAnalyser();
    // const source = ctx.createMediaElementSource(audio);
    // source.connect(analyser);
    // source.connect(ctx.destination);
    // analyser.fftSize = 32;
    // const bufferLength = analyser.frequencyBinCount;  

    // let dataArray = new Uint8Array(bufferLength);
    // let elements = [];
    // for (let i = 0; i < bufferLength / 2; i++){
    //     const element = document.createElement('span');
    //     element.classList.add('element');
    //     elements.push(element);
    //     vizual.appendChild(element);
    // }

    // const clamp = (num, min, max) => {
    //     if (num >= max) return max;
    //     if (num <= min) return min;
    //     return num
    // }

    // const update = () => {
    //     requestAnimationFrame(update);
    //     analyser.getByteFrequencyData(dataArray);
    //     for (let i = 0; i < bufferLength; i++){
    //         let item = dataArray[i];
    //         item = item < 200 ? item / 1.5 : item * 1.25;
    //         elements[i].style.transform = `rotateZ(${i * (360 / bufferLength)}deg) translate(-50%, ${clamp(item, 125, 150)}px)`;
    //     }
    // }
    
    // update();