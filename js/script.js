$(function() {
  $('.menu-burger').on('click', function() {
    $('.menu').slideToggle(200, function() {
      if($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    })
  })
})

$('body').bind('touchstart', function () {});


// function PopUpShow() {
//   $(".hidden-popup").show();
// }

// function PopUpHide() {
//   $(".hidden-popup").hide();
// }
