


const myForm = document.querySelector('#requestForm');
const myBtn = document.querySelector('#btnSubmit');


const validationForm = (form) => {
  let valid = true;
  console.log(form.elements);

  if(!validationField(form.elements.name)){

    valid = false;
  }
  if(!validationField(form.elements.email)){
    valid = false;
  }
  return valid;
};


const validationField = (field) => {
  if(!field.checkValidity()){
    field.nextElementSibling.textContent = field.validationMessage;
    return false;
  }else {
    field.nextElementSibling.textContent = '';
    return true;
  }
};

myBtn.addEventListener('click', (e) => {
  e.preventDefault;
  if(validationForm(myForm)) {
    console.log('ok');
  }
});






// let elems = document.querySelectorAll('.description__item');
// for(let i = 0; i<=elems.length; i++){
//   elems[i].addEventListener('click', () => console.log('Получилось'));
// }

