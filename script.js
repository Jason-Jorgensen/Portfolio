$(document).ready(function(){
    $('.sidenav').sidenav();

  });

  $(".homeIcon").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#landing").offset().top
    }, 2000);
});

$("#downButton").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#intro").offset().top
    }, 2000);
});

$(".aboutMe").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#intro").offset().top
  }, 2000);
  // alert("working")
});

$(".aboutMe2").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#intro").offset().top
  }, 2000);
  // alert("working")
});

$(".experience").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#experience").offset().top
  }, 2000);
});

$(".projects").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#projects").offset().top
  }, 2000);
});

$(".contact").click(function() {
  $([document.documentElement, document.body]).animate({
      scrollTop: $("#contactMe").offset().top
  }, 2000);
});

setTimeout(function() {

  var pdfFile = "assets/resume(1).docx.pdf";

  if(navigator.userAgent.match(/Android/i)) {

    window.open(pdfFile);

  } else {

    window.document.location.href = pdfFile;

  }

}, 100);