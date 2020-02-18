const menu = document.querySelector('.hamburger'); 

menu.addEventListener('click', () => { 
    menu.classList.toggle('hamburger--active'); 
});

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

window.sr = ScrollReveal();
sr.reveal('.icon', {
  reset: true,
  delay: 300,
  distance: 0
});
sr.reveal('h1, h2, p, img', {
  reset: true,
  delay: 300
});

window.ga = function () { ga.q.push(arguments) }; ga.q = []; ga.l = +new Date;
    ga('create', 'UA-XXXXX-Y', 'auto'); ga('set','transport','beacon'); ga('send', 'pageview');

