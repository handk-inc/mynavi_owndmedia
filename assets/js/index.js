$(window).on('load', function() {
  $("#header").load("../../assets/components/header.html");
    $.getScript("../../assets/js/components/menu.js", function() {
  });

  $("#footer").load("../../assets/components/footer.html");
  $("#cta-section").load("../../assets/components/cta.html");
});