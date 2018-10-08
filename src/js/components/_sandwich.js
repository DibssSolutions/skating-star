const sandwich = $('.sandwich');
const sideMenu = $('.header__wrap');
$('.toggle-mnu').on('click', function() {
  sandwich.toggleClass('is-active');
  sideMenu.toggleClass('is-active');
});

$('.nav__link').on('click', function() {
  sandwich.removeClass('is-active');
  sideMenu.removeClass('is-active');
});
