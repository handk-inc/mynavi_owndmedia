$(window).on('load', function() {
  $("#header").load("/components/header.html");
  $.getScript("../js/components/menu.js", function() {
  });

  $("#footer").load("/components/footer.html");
  $("#cta-section").load("/components/cta.html");
  $("#sidebar").load("/components/sidebar.html");
});