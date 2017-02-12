import 'normalize-css';
import '../styles/main.styl';

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  const currentSession = location.href.substring(
    location.href.lastIndexOf("/") + 1,
    location.href.lastIndexOf(".")
  );
  if (currentSession.length > 0) {
    $('#' + currentSession).addClass('nav-current');
  }

  $('.importantNow')
    .on('click', '.q', function(e) {
      const $ans = $(this).closest('li').find('.a');
      const $chevron = $(this).find('.fa');
      $ans.toggle('display');
      $chevron.toggleClass('rotate-chevron');
    });

  $('.nav-mobile')
    .on('click', function(e) {
      const $navContent = $(this).closest('.nav').find('.content-wrapper');
      $navContent.fadeToggle('display');
    });

  // Smooth Scrolling
  $('a[href*=#]:not([href=#])').click(function(){
    if (window.location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && window.location.hostname == this.hostname) {
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 70
        }, 700);
        return false;
      }
    }
  });

});
