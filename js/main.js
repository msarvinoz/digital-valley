var elForm = document.querySelector('.form')
var elName = document.querySelector('.name')
var elBirth = document.querySelector('.birth')
var elCitizen = document.querySelector('.citizen')
var elUniver = document.querySelector('.univer')
var elEmail = document.querySelector('.email')
var elNumber = document.querySelector('.number')
var elRegion = document.querySelector('.region')

// fetch('http://127.0.0.1:8000/api/register/')
// .then(res => res.json())
elForm.addEventListener('submit', (e) => {
        e.preventDefault()
        if (elNumber.value * 1 >= 0 && elNumber.value.length == 9 || elNumber.value.length == 12) {
                elNumber.classList.add('yashil')
                elNumber.classList.remove('qizil')
                fetch('http://127.0.0.1:8000/api/register/',{
                        method: 'POST',
                        headers: {'Content-type': 'Application/json'},
                        body: JSON.stringify({
                                name: e.target.name.value,
                                birth: e.target.birth.value,
                                citizenship: e.target.citizenship.value,
                                university_name: e.target.university_name.value,
                                english_certificate: e.target.english_certificate.value,
                                it_certificate: e.target.it_certificate.value,
                                email: e.target.email.value,
                                phone_number: e.target.phone_number.value,
                                region: e.target.region.value,
                                edu_level: e.target.edu_level.value,
                                eng_level: e.target.eng_level.value,
                                student_certificate: e.target.student_certificate.value
                        })
                })
                .then((res)=> res.json())
                .then((data)=> console.log(data))

        } else {
                elNumber.classList.add('qizil')
                elNumber.classList.remove('yashil')
        }
})
