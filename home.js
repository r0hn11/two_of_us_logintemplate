var login_section = document.querySelector('#login_sect');
var login_btn = document.querySelector('#login_btn');
var login_ttl = document.querySelector('#login_ttl');
var login_desc = document.querySelector('#login_desc');
var forgot_pw = document.querySelector('#forgot_pw');
var input_box = document.querySelector('#input_box');
var overlay = document.querySelectorAll(".overlay_login");
var back_opt = document.querySelector('#arrow_box');
var username = document.querySelector('#username');
var password = document.querySelector('#password');
var login_msg = document.querySelector('#login_msg');
var close_login_msg = document.querySelector('#close_login_msg');
var note_section = document.querySelector('#note_sect');
var note = document.querySelector('#note');

let login_page = 1;
let login_flag = 1;

back_opt.addEventListener('click', login_back);
close_login_msg.addEventListener('click', close_msg);
forgot_pw.addEventListener('click', popup_msg);

function close_msg(){
    login_msg.classList.add('close_msg');
    login_flag = 1;
};

function login_opt() {
    login_ttl.style.fontSize = '1.2em';
    login_ttl.style.transform = 'translateY(-10px)'
    login_btn.style.transform = 'translateY(40px)';
    login_desc.style.opacity = '0';
    forgot_pw.style.transform = 'translateY(35px)';
    input_box.style.display = 'flex';
    setTimeout(function () {
        // login_desc.style.display = 'none';
        input_box.style.opacity = '1';
        input_box.style.pointerEvents = 'auto';
    }, 500);
    overlay[0].style.opacity = '0';
    overlay[1].style.opacity = '0';
    overlay[0].style.transform = 'rotate(-20deg)';
    overlay[1].style.transform = 'rotate(0deg)';
    back_opt.style.opacity = '1';
    back_opt.style.pointerEvents = 'auto';
    login_page = 2;
};

function login_back() {
    login_ttl.style.fontSize = '1.5em';
    login_ttl.style.transform = 'translateY(0px)'
    login_btn.style.transform = 'translateY(0px)';
    forgot_pw.style.transform = 'translateY(0px)';
    input_box.style.display = 'none';
    input_box.style.opacity = '0';
    input_box.style.pointerEvents = 'none';
    setTimeout(function () {
        login_desc.style.opacity = '1';
    }, 500);
    overlay[0].style.opacity = '10%';
    overlay[1].style.opacity = '15%';
    overlay[0].style.transform = 'rotate(-15deg)';
    overlay[1].style.transform = 'rotate(50deg)';
    back_opt.style.opacity = '0';
    back_opt.style.pointerEvents = 'none';
    login_page = 1;
};

window.addEventListener('keyup', function(e){
    if(e.keyCode == 27 && login_page == 2){
        login_back();
        close_msg();
    }
});

function popup_msg(){
    if(login_flag===1){
        login_msg.classList.remove('close_msg');
        login_flag = 0;
    }
}


function validate(){
    if((username.value === 'Rohan' || username.value === 'Payal') && (password.value === 'winter')){
        login_section.style.transitionDuration = '0.3s';
        close_msg();
        setTimeout(function(){
            login_section.classList.add('vanish');
        },3000);
        setTimeout(function(){
            login_section.style.display = 'none';
        },4000);
        setTimeout(function(){
            note.style.opacity = '1';
        },5000);
        setTimeout(function(){
            note.style.transitionDuration = '0.5s';
            note.style.opacity = '0';
        },12000);
        setTimeout(function(){
            note_section.style.opacity = '0';
        },15000);
        setTimeout(function(){
            note_section.style.display = 'none';
        },18000);
        login_page = 0;
        username.disabled = true;
        password.disabled = true;
    }
    else{
        popup_msg();
    }
}

window.addEventListener('keyup', function(e){
    if(e.keyCode ==13 && login_page == 1){
        login_opt();
    }
    else if(e.keyCode == 13 && login_page == 2){
        validate();
    }
});

login_btn.addEventListener('click',function(){
    if(login_page==2){
        validate();
    }
    else{
        login_opt();
    }
});
