import 'normalize-css';
import '../styles/main.styl';

const backgroundImages = [
  // 'https://upload.wikimedia.org/wikipedia/commons/3/30/Piet_Mondrian,_1942_-_Broadway_Boogie_Woogie.jpg',
  'http://www.newyorker.com/wp-content/uploads/2015/12/Veix-Goodbye-New-York-Color-1200.jpg',
  'http://cdn.images.cunard.com/webimage/HeroImage/Global/Images/Destinations/New-York2.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/e/ee/New_York_City-Manhattan-Central_Park_(Gentry).jpg'
];
// Higher possibility for yellow
const fillColors = ['#E5CF00', '#E5CF00', '#E5CF00', '#E5CF00', '#344591', '#A23024', '#D9D7BD'];
const smallRectSize = 18;

$(() => {
  const windowHeight = $(window).height();
  const windowWidth = $(window).width();

  const currentSession = location.href.substring(
    location.href.lastIndexOf("/") + 1,
    location.href.lastIndexOf(".")
  );
  if (currentSession.length > 0) {
    try {
      $('#' + currentSession).addClass('nav-current');
    } catch(e) {};
  }

  $('.news')
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

  $('.logo')
    .css('background-image', `url("${backgroundImages[parseInt(Math.random() * backgroundImages.length)]}")`);

  drawHeaderAnimation();

  // Debounce window resize and redraw
  let resizeTimer;
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
      drawHeaderAnimation();
    }, 250);
  });

  // A hack to hover event
  // $('.header').on('mousemove', function(e) {
  //   const sW = $('#anim-pg').width();
  //   const mX = e.pageX < sW / 2
  //     ? e.pageX - e.pageX % smallRectSize
  //     : sW - ((sW - e.pageX) - (sW - e.pageX) % smallRectSize);
  //   const mY = e.pageY - e.pageY % smallRectSize;

  //   $('#' + mX + '__' + mY)
  //     .addClass('square--hover')
  //     .removeAttr('id');
  // });
});

const drawHeaderAnimation = function() {
  const $s = $('#anim-pg').empty();
  const sW = $s.width();
  const sH = $s.height();

  for (let j = 0; j < sW; j += smallRectSize) {
    if (Math.random() < 0.25) continue;

    const centerBase = Math.random() * sH / 4;
    const centerOffset = (1 - Math.abs((j + 100) / sW - 0.5) * 3) / 4 * sH;

    for (let i = 0; i < sH / 2 - centerOffset + centerBase; i += smallRectSize) {
      drawSquare($s, j, sH - i);
    }

    // for (let j = 0; j < sW / 4 - centerOffset + centerBase; j += smallRectSize) {
    //   drawSquare($s, j, i, 0);
    // }
    // for (let j = sW; j >= sW / 2 + centerOffset + centerBase; j -= smallRectSize) {
    //   drawSquare($s, j, i, sW);
    // }
  }

  for (let i = 0; i < sH / 2; i += smallRectSize) {
    for (let j = 0; j < sW; j += smallRectSize * 3) {
      if (Math.random() > 0.97) {
        drawSquare($s, j, i, false);
        drawSquare($s, j + smallRectSize, i, false);  
      }
    }
  }
}

const drawSquare = function($s, x, y, hasId = true) {
  const $square = $('<div class="square" />')
    .attr('id', hasId ? x + '__' + y : '')
    .css({
      left: x,
      top: y,
      'background-color': fillColors[parseInt(fillColors.length * Math.random())],
      'opacity': Math.random() * 0.6,
    })
    .appendTo($s);

  const shouldAnimPos = Math.random() < 0.2;
  const shouldAnimOpacity = Math.random() < 0.1;
  if (shouldAnimPos) {
    $square.addClass('square--appear');
  }
  if (shouldAnimOpacity) {
    $square.addClass('square--blink');
  }
};
