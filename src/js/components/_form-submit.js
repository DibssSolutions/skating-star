$(document).ready(function() {
  $('.js-form').on('submit', e => {
    e.preventDefault();
  
    var form = $(e.currentTarget);
    var input = $(form).find('input');
  
    var urlPhpFile = 'form.php';
  
    $.ajax({
      url: urlPhpFile,
      type: 'POST',
      dataType: 'html',
      data: $(e.currentTarget).serialize(),
      success() {
        form.get(0).reset();
        var sentMessage = $('.js-success');
        sentMessage.fadeIn(1000);
      },
      error: function(jqXHR, ajaxSettings, thrownError) {
        var errorSent = $('.js-error');
        form.get(0).reset();
        errorSent.fadeIn(1000);
        var closeBtn =
            '<button class="message-sending__x js-close">&#10006;</button>';
  
        if (jqXHR.status === 0) {
          errorSent.html('Not connect.\n Verify Network.' + closeBtn);
        } else if (jqXHR.status === 404) {
          errorSent.html('Requested page not found. 404' + closeBtn);
        } else if (jqXHR.status === 500) {
          errorSent.html('Internal Server Error 500.' + closeBtn);
        } else if (exception === 'parsererror') {
          errorSent.html('Requested JSON parse failed.' + closeBtn);
        } else if (exception === 'timeout') {
          errorSent.html('Превышено время отправки сообщения' + closeBtn);
        } else if (exception === 'abort') {
          errorSent.html('Ajax request aborted.' + closeBtn);
        } else {
          errorSent.html('Uncaught Error.\n' + jqXHR.responseText + closeBtn);
        }
      }
    });
  });
  
  $('.message-sending').on('click', function(e) {
    var target = event.target;
  
    if ($(target).hasClass('js-close')) {
      $(target)
        .parents('.message-sending')
        .fadeOut(500);
    }
  });
});
