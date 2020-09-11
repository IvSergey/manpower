


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



  let reg1 = new RegExp('^.*[^A-zА-яЁё -].*$');
  let reg2 = /^([A-Za-z0-9_\-\])+@([A-Za-z0-9_\-\])+([A-Za-z]{2,4})$/;

  let errors = 0;

  if (name != '' && email != '' && country !== 'Select your country') {
    if (checkbox.checked) {
      if (reg1.test(name)) {
        // alert('Поле "Enter your name" может содержать только русские и английские символы, пробелы и дефисы');
        errorName.classList.add('active');
        setTimeout(() => errorName.classList.remove('active'), 3000);
        errors = 1;

      }
      else {
        if (reg2.test(email) == false) {
          // alert('Неверный формат почты');
          errorEmail.classList.add('active');
          setTimeout(() => errorEmail.classList.remove('active'), 3000);
          errors = 1;
        } else {
          //alert('OK');
          errors = 0;
        }
        //alert('OK')

      }
    } else {
      // alert('Поставьте галочку, чтобы подтвердить, что вы согласны с условиями');
      inValidChecked.classList.add('active');
      setTimeout(() => errorEmail.classList.remove('active'), 3000);
      errors = 1;
    }


  } else {
    alert('Fill all fields');
    errors = 1;
  }

  if (errors > 0) {
    e.preventDefault();
  }

});


//////////////////////
let modal = document.querySelector('#modal');
let modalOverlay = document.querySelector('#modal-overlay');
let closeButton = document.querySelector('#close-button');
// let openButton = document.querySelector('#open-button');


closeButton.addEventListener('click', function () {
  modal.classList.toggle('closed');
  modalOverlay.classList.toggle('closed');
  wrapper.classList.toggle('active');
});

// openButton.addEventListener('click', function() {
// 	  modal.classList.toggle('closed');
// 	  modalOverlay.classList.toggle('closed');
// });


let elems = document.querySelectorAll('.description__item');
for (let i = 0; i <= elems.length; i++) {
  elems[i].addEventListener('click', function () {
    modal.classList.toggle('closed');
    modalOverlay.classList.toggle('closed');
    
  });
}
