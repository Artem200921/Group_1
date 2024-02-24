function vid(i) {
  $('video').each(function (x) {
    var video = $(this).get(0);
    if (i == x) {
      video.play();
    } else {
      video.pause();
      $('.play-button').each(function (b) {
        if (b !== i) {
          $(this).css({ display: 'inline' });
        }
      });
    }
  });
}
function showbtn(i) {
  $('.play-button').each(function (b) {
    if (b == i) {
      $(this).css({ display: 'inline' });
    }
  });
  $('video').each(function (x) {
    var video = $(this).get(0);
    if (i == x) {
      video.pause();
    }
  });
}
$('.play-button').each(function (i) {
  $(this).on('click', function () {
    $(this).css({ display: 'none' });
    vid(i);
  });
});
$('video').each(function (i) {
  $(this).on('click', function () {
    showbtn(i);
  });
});
