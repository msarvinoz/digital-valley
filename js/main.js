let elFootForm = document.querySelector('.FooterForm')
let elFootInp = document.querySelector('.footerEmail__input')
let elFootBtn = document.querySelector('.footer__btn')

var elForm = document.querySelector('.form')
var elName = document.querySelector('.name')
var elBirth = document.querySelector('.birth')
var elCitizen = document.querySelector('.citizen')
var elUniver = document.querySelector('.univer')
var elEmail = document.querySelector('.email')
var elNumber = document.querySelector('.number')
var elRegion = document.querySelector('.region')

elForm.addEventListener( 'submit', (evn) => {
    if (elNumber.value * 1 >= 0 && elNumber.value.length == 9 || elNumber.value.length == 12) {
        elNumber.classList.add('yashil')
        elNumber.classList.remove('qizil')
} else {
        elNumber.classList.add('qizil')
        elNumber.classList.remove('yashil')
}
})

// by Sarvinoz
function checkInput(){
    elFootForm.addEventListener('submit', (e) => {
        console.log(elFootInp.value);
        if (elFootInp.value != "" && (elFootInp.value.includes('@gmail.com'))) {
            elFootInp.classList.add('success')
            console.log('valid email');
            window.localStorage.setItem('email', elFootInp.value)
        }
        else {
            elFootInp.classList.add('warning')
            console.log('non valid email form');
        }
    });
}


