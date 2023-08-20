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
