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

  // A hack to svg hover event
  $('.header').on('mousemove', function(e) {
    const sW = $('#snap-pg').width();
    const mX = e.pageX < sW / 2
      ? e.pageX - e.pageX % smallRectSize
      : sW - ((sW - e.pageX) - (sW - e.pageX) % smallRectSize);
    const mY = e.pageY - e.pageY % smallRectSize;

    const scaleOffset = parseInt(Math.random() * 3) * smallRectSize;
    $('#' + mX + '__' + mY)
      .animate({
        x: mX - scaleOffset,
        y: mY - scaleOffset,
        width: (scaleOffset * 2) + smallRectSize,
        height: (scaleOffset * 2) + smallRectSize
      }, 300)
      .removeAttr('id');
  });
});

const drawHeaderAnimation = function() {
  const s = Snap('#snap-pg');
  s.clear();
  const sW = $('#snap-pg').width();
  const sH = $('#snap-pg').height();

  for (let i = 0; i < sH; i += smallRectSize) {
    if (Math.random() < 0.15) continue;

    const centerBase = Math.random() * sW / 4;
    const centerOffset = (1 - Math.abs((i + 100) / sH - 0.5) * 2) / 3 * sW;

    for (let j = 0; j < sW / 4 - centerOffset + centerBase; j += smallRectSize) {
      drawSquare(s, j, i, 0);
    }
    for (let j = sW; j >= sW / 2 + centerOffset + centerBase; j -= smallRectSize) {
      drawSquare(s, j, i, sW);
    }
  }
}

const drawSquare = function(s, x, y, startBase) {
  const shouldAnimPos = Math.random() < 0.2;
  const shouldAnimOpacity = Math.random() < 0.1;

  const square = s
    .rect(shouldAnimPos ? startBase : x, y, smallRectSize, smallRectSize)
    .attr({
      'id': x + '__' + y,
      fill: fillColors[parseInt(fillColors.length * Math.random())],
      'fill-opacity': Math.random() * 0.6,
      'stroke': 'rgba(255,255,255,.2)',
      'strokeWidth': parseInt(Math.random() * 10)
    });
  if (shouldAnimPos) square.animate({x: x}, 800);
  if (shouldAnimOpacity) {
    setTimeout(squareFadeIn(square)(), Math.random() * 1000);
  }
};

const squareFadeIn = function(sq) {
  return function() {
    Snap.animate(0.2, 1, function(v) {
      sq.attr('fill-opacity', v);
    }, Math.max(500, Math.random() * 3000), squareFadeOut(sq));
  };
};

const squareFadeOut = function(sq) {
  return function() {
    Snap.animate(1, 0.2, function(v) {
      sq.attr('fill-opacity', v);
    }, Math.max(500, Math.random() * 3000), squareFadeIn(sq));
  };
};
