


// const myForm = document.querySelector('#requestForm');
// const myBtn = document.querySelector('#btnSubmit');


// const validationForm = (form) => {
//   let valid = true;
//   console.log(form.elements);

//   if(!validationField(form.elements.name)){

//     valid = false;
//   }
//   if(!validationField(form.elements.email)){
//     valid = false;
//   }
//   return valid;
// };


// const validationField = (field) => {
//   if(!field.checkValidity()){
//     field.nextElementSibling.textContent = field.validationMessage;
//     return false;
//   }else {
//     field.nextElementSibling.textContent = '';
//     return true;
//   }
// };

// myBtn.addEventListener('click', (e) => {
//   e.preventDefault;
//   if(validationForm(myForm)) {
//     console.log('ok');
//   }
// });








let form = document.querySelector('#requestForm');

form.addEventListener('submit', function (e) {


  let email = document.querySelector('#requestForm input[name="email"]').value;
  let name = document.querySelector('#requestForm input[name="name"]').value;
  let country = document.querySelector('#country').value;
  let checkbox = document.querySelector('#requestForm .form-check input[type="checkbox"]');
  let errorName = document.querySelector('#errorName');
  let errorEmail = document.querySelector('#errorEmail');
  let inValidChecked = document.querySelector('#inValidChecked');
  let inValidSelected = document.querySelector('#inValidSelected');



  let reg1 = new RegExp('^.*[^A-zА-яЁё -].*$');
  let reg2 = /^([A-Za-z0-9_\-\])+@([A-Za-z0-9_\-\])+([A-Za-z]{2,4})$/;

  let errors = 0;
  let failedName = 0;
  let failedEmail = 0;
  let failedCountry = 0;
  let failedCheckbox = 0;

  if (country == 'Select your country') {
    errors = 1;
    failedCountry = 1;
  }
  if (!checkbox.checked) {
    failedCheckbox = 1;
    errors = 1;
  }

  if (name == '' || reg1.test(name)) {
    //alert('Поле "Enter your name" может содержать только русские и английские символы, пробелы и дефисы');
    //errorName.classList.add('active');
    //setTimeout(() => errorName.classList.remove('active'), 3000);
    errors = 1;
    failedName = 1;
  }

  if (email == '' || !reg2.test(email)) {
    //alert('Неверный формат почты');
    errors = 1;
    //errorEmail.classList.add('active');
    //setTimeout(() => errorEmail.classList.remove('active'), 3000);
    failedEmail = 1;
  }
  //alert('OK')

  if (failedName > 0) {
    errorName.classList.add('active');
    setTimeout(() => errorName.classList.remove('active'), 3000);
  }
  if (failedEmail > 0) {
    errorEmail.classList.add('active');
    setTimeout(() => errorEmail.classList.remove('active'), 3000);
  }
  if (failedCountry > 0) {
    // alert('');
    inValidSelected.classList.add('active');
    setTimeout(() => inValidSelected.classList.remove('active'), 3000);
  }
  if (failedCheckbox > 0) {
    inValidChecked.classList.add('active');
    setTimeout(() => inValidChecked.classList.remove('active'), 3000);
  }





  if (errors > 0) {
    e.preventDefault();
  } else {
    alert('Всё отправилось');
  }



});


//////////////////////
let modal = document.querySelector('#modal');
let modalOverlay = document.querySelector('#modal-overlay');
let closeButton = document.querySelector('#close-button');
// let openButton = document.querySelector('#open-button');
const body = document.body;
const btnAccept = document.querySelector('#btn__accept');
const btnCancel = document.querySelector('#btn__cancel');


closeButton.addEventListener('click', function () {
  body.style.overflow = 'auto';
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');

});
btnAccept.addEventListener('click', function () {
  body.style.overflow = 'auto';
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');

});
btnCancel.addEventListener('click', function () {
  body.style.overflow = 'auto';
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');

});



// openButton.addEventListener('click', function() {
// 	  modal.classList.toggle('closed');
// 	  modalOverlay.classList.toggle('closed');
// });


let elems = document.querySelectorAll('.description__item');
for (let i = 0; i <= elems.length; i++) {
  elems[i].addEventListener('click', function () {

    body.style.overflow = 'hidden';
    body.style.backgroundСolor = 'rgba(0,0,0,.5)';
    body.style.fiter = 'brightness(.5)';
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');

  });
}
