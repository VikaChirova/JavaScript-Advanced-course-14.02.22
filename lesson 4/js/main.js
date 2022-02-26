var form = document.forms.regform;
var spanErrorText = document.getElementsByClassName('error-text');
var inputArea = document.getElementsByClassName('form-box-area');

//очистка всех текстов с ошибками
var clearErrorText = () => {
   for (let n = 0; n < spanErrorText.length; n++) {
      spanErrorText[n].innerText = ' ';
   }
};

var clearInputArea = () => {
   for (let n = 0; n < inputArea.length; n++) {
      let classList = inputArea[n].classList;
      console.log(classList);

      if (classList.contains('input_error') === true) {
         classList.remove("input_error");
         classList.remove("p_error");
      }
   }
};
//валидация формы глобальная функция 
var formValidation = function (e) {
   e.preventDefault();
   console.log('Run validation');

   clearErrorText(); //очистка ВСЕХ текстов с ошибками
   clearInputArea(); //очистка input с ошибками

   let name = form.elements.name;
   let mail = form.elements.email;
   let telephone = form.elements.telephone;

   let result = true;

   if (nameValidation(name) == false) {

      result = false;
   }

   if (mailValidation(mail) == false) {
      result = false;
   }

   if (telephoneValidation(telephone) == false) {
      result = false;
   }

   if (result == false) {
      document.getElementById('form-box-area-line').innerText = "Вы ввели некорректные данные. Повторите попытку!"
   }
   if (result == true) {
      document.getElementById('form-box-area-line').innerText = "Отлично! Всё указано верно!"
   }

   return result;
};


//ИМЯ валидация 
var nameValidation = (name) => {
   console.log('funcNameValid');
   let regexp = /^[A-Za-zА-Яа-я ]+$/;

   if (name.value == '') {
      spanErrorText[0].innerText = 'Вы должны указать имя!';
      return false;
   }
   if (name.value.match(regexp)) {
      return true;
   } else {
      spanErrorText[0].innerText = 'Используйте только буквы и пробел';
      name.classList.add("input_error");
      name.classList.add("p_error");
      name.focus();
      return false;
   }
};
//Mail валидация 
var mailValidation = (mail) => {
   let regexp = /^[-._a-z0-9]+@(?:[a-z0-9][-a-z0-9]+\.)+[a-z]{2,6}$/;

   if (mail.value == '') {
      spanErrorText[1].innerText = 'Вы должны указать эл.почту!';
      return false;
   }
   if (mail.value.match(regexp)) {
      return true;
   } else {

      spanErrorText[1].innerText = 'Используйте только латинские буквы (@, . - _)';
      mail.classList.add("input_error");
      mail.classList.add("p_error");
      mail.focus();
      return false;
   }
};

//telephone валидация 
var telephoneValidation = (telephone) => {
   console.log('funcPhoneValid');

   let regexp = /^\+\d{1}\(\d{3}\)\d{3}-\d{4}$/;

   if (telephone.value == '' || telephone.value == '+7(000)000-0000') {
      spanErrorText[2].innerText = 'Вы должны указать телефон!';
      return false;
   }

   if (telephone.value.match(regexp)) {
      return true;
   } else {

      spanErrorText[2].innerText = 'Телефон введите в формате +7(000)000-0000';
      telephone.classList.add("input_error");
      telephone.classList.add("p_error");
      telephone.focus();
      return false;
   }
};
