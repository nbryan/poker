$(document).ready(function() {
  var desiredAspectRatio = 16 / 9,
    aspectRatioDiv = $('#aspect-ratio');

  $(window).resize(function(e) {
    var width = $(window).width(),
      height = $(window).height(),
      actualAspectRatio = width / height;

    if (actualAspectRatio > desiredAspectRatio) {
      aspectRatioDiv.css({
        'width': height * desiredAspectRatio,
        'height': height
      });
    } else {
      aspectRatioDiv.css({
        'width': width,
        'height': width / desiredAspectRatio
      });
    }
  });

  $(window).resize();
});
