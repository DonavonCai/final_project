// Item selection for Recipes page ============================================
// click on active image
  // p fades out
  // image translates left (no transition)
  // image translates right (transition)
var active = false;
$('.item div').on('click', function () {
  var that = $(this);
  if (active == false) {
    $(this).css('transition',  ' all 500ms linear');
    $(this).addClass('active-item');
    console.log(that);
    setTimeout(function fadeIn() {
      console.log(that);
      $(that).parent().find('p').fadeIn(500);
    }, 500);
    setTimeout(function removeClass() {
      $(that).css('transition', 'none');
      $(that).removeClass('active-item');
    }, 500);
    active = true;
  }
  else {
    $('p').fadeOut(500);
    setTimeout(function addClass() {
      $(that).css('transition',  'none');
      $(that).addClass('active-item');
      console.log(that);
    }, 510);
    setTimeout(function removeClass() {
      $(that).css('transition', 'all 0.5s linear');
      $(that).removeClass('active-item');
      console.log(that);
    }, 600);
    active = false;
  }
});
// ============================================================================
