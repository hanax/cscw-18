import 'normalize-css';
import '../styles/main.styl';

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
  $('.header').on('mousemove', function(e) {
    const sW = $('#anim-pg').width();
    const mX = e.pageX < sW / 2
      ? e.pageX - e.pageX % smallRectSize
      : sW - ((sW - e.pageX) - (sW - e.pageX) % smallRectSize);
    const mY = e.pageY - e.pageY % smallRectSize;

    const scaleOffset = parseInt(Math.random() * 3) * smallRectSize;
    $('#' + mX + '__' + mY)
      .animate({
        left: mX - scaleOffset,
        top: mY - scaleOffset,
        width: (scaleOffset * 2) + smallRectSize,
        height: (scaleOffset * 2) + smallRectSize
      }, 300)
      .removeAttr('id');
  });
});

const drawHeaderAnimation = function() {
  const $s = $('#anim-pg');
  $s.empty();
  const sW = $s.width();
  const sH = $s.height();

  for (let i = 0; i < sH; i += smallRectSize) {
    if (Math.random() < 0.15) continue;

    const centerBase = Math.random() * sW / 4;
    const centerOffset = (1 - Math.abs((i + 100) / sH - 0.5) * 2) / 3 * sW;

    for (let j = 0; j < sW / 4 - centerOffset + centerBase; j += smallRectSize) {
      drawSquare($s, j, i, 0);
    }
    for (let j = sW; j >= sW / 2 + centerOffset + centerBase; j -= smallRectSize) {
      drawSquare($s, j, i, sW);
    }
  }
}

const drawSquare = function($s, x, y, startBase) {
  const shouldAnimPos = Math.random() < 0.2;
  const shouldAnimOpacity = Math.random() < 0.1;
  const $square = $('<div class="square" />')
    .attr('id', x + '__' + y)
    .css({
      left: shouldAnimPos ? startBase : x,
      top: y,
      width: smallRectSize,
      height: smallRectSize,
      'background-color': fillColors[parseInt(fillColors.length * Math.random())],
      'opacity': Math.random() * 0.6,
    })
    .appendTo($s);
  if (shouldAnimPos) $square.animate({left: x}, 1000);
  if (shouldAnimOpacity) {
    $square.addClass('square--blink');
  }
};
