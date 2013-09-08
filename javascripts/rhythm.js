;(function ($, window, undefined) {
  var baseLine = 21;
  var rhythm = function () {
    $('article img').each(function align() {
      var $e      = $(this),
          pad     = baseLine - $e.height() % baseLine,
          leader  = pad / 2,
          trailer = pad - leader;
      $e.css('padding-top', leader);
      $e.css('padding-bottom', trailer);
    });
  };
  $(window).load(rhythm);
  $(window).resize(rhythm);
})(jQuery, window);
