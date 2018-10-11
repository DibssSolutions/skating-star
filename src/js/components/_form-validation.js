import validate from 'jquery-validation';

$.validator.messages.required = 'Необходимо заполнить указанное поле';
$.validator.messages.number = 'Необходимо ввести целое число';

$.validator.setDefaults({
  debug: true
});

var form = $('.js-form');
var modal = $('[data-modal]');

form.each((i, el) => {
  $(el).validate({
    rules: {
      'name': {
        required: true
      },
      'phone': {
        required: true
      }
    }
  });
});

var formSubmit = $('.js-btn-submit');

formSubmit.each((i, submit) => {
  $(submit).on('click', function(e) {
    var form = $(submit).parents('.js-form');
    form.valid();
    if (!form.valid()) {
      e.preventDefault();
    }
    else {
      modal.removeClass('is-open');
    }
  });
});
