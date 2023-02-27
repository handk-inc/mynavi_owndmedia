$(window).on('load', function() {
  $("#header").load("/assets/components/header.html");
    $.getScript("/assets/js/components/menu.js", function() {
  });

  $("#footer").load("/assets/components/footer.html");
  $("#cta-section").load("/assets/components/cta.html");

  // page inner scroll
  $(function(){
    $('a[href^="#"]').click(function(){
      var adjust = -180;
      var speed = 400;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top + adjust;
      $('body,html').animate({scrollTop:position}, speed, 'swing');
      return false;
    });
  });
});

