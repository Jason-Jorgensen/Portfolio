$(document).ready(function(){
    $('.sidenav').sidenav();

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

// $("contact").click(function() {
//   $([document.documentElement, document.body]).animate({
//       scrollTop: $("#").offset().top
//   }, 2000);
// });