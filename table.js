$(document).ready(function() {
  var desiredAspectRatio = 4 / 3,
    table = $('#table'),
    tableBackground = $('#table-background');

  $(window).resize(function(e) {
    var width = $(window).width(),
      height = $(window).height(),
      actualAspectRatio = width / height;

    if (actualAspectRatio > desiredAspectRatio) {
      table.css({
        'width': height * desiredAspectRatio,
        'height': height
      });
    } else {
      table.css({
        'width': width,
        'height': width / desiredAspectRatio
      });
    }
    tableBackground.css({
      'border-radius': tableBackground.height() / 2
    });
  });

  $(window).resize();
});
