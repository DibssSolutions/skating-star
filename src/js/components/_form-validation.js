import validate from 'jquery-validation';

$.validator.messages.required = 'Необходимо заполнить указанное поле';
$.validator.messages.number = 'Необходимо ввести целое число';

$.validator.setDefaults({
  debug: true
});

var form = $('.js-form');

form.validate({
  rules: {
    'name': {
      required: true
    },
    'phone': {
      required: true
    }
  }
});

var formSubmit = $('.js-btn-submit');

formSubmit.each((i, submit) => {
  $(submit).on('click', function(e) {
    var form = $(submit).closest('.js-form');
    form.valid();
    if (!form.valid()) {
      e.preventDefault();
    }
  });
});
