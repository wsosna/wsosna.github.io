function scroll(e) {
  var href = $(this).attr('href');
  e.preventDefault();
  $('html, body').animate({
    scrollTop: $(href).offset().top
  }, 800);
  location.hash = href;
};
$('a[href^="#"]').click(scroll);

$(function(){
  var menu = $('#menu'),
  pos = menu.offset();
  $(window).scroll(function(){
    if($(this).scrollTop() > pos.top+menu.height() && menu.hasClass('header')){
      menu.fadeOut('fast', function(){
        $(this).removeClass('header').addClass('fixed').fadeIn('fast');
      });
    } else if($(this).scrollTop() <= pos.top && menu.hasClass('fixed')){
      menu.fadeOut('fast', function(){
        $(this).removeClass('fixed').addClass('header').fadeIn('fast');
      });
    }
  });
});

// Show/hide page navigation
const menuButton = document.querySelector('#hamburger');

menuButton.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');
    const menuButton = document.querySelector('.page-header__hamburger');
    menuButton.classList.toggle('page-header__hamburger--active');
});