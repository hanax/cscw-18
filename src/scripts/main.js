import 'normalize-css';
import '../styles/index.styl';

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  $('#importantNow')
    .on('click', '.q', function(e) {
      const $ans = $(this).closest('li').find('.a');
      const $chevron = $(this).find('.fa');
      $ans.toggle('display');
      $chevron.toggleClass('rotate-chevron');
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
