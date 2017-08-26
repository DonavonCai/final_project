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
// Search Bar: ================================================================

// Note: h2 variable is set to 'h2' string instead of h2 element.

function search() {
var searchInput, filter, h2, i;
  searchInput = $('input').val();
  filter = searchInput.toUpperCase();
  h2 = $('h2');
  console.log(h2);
  h2 = h2.html().toUpperCase();
  // console.log(searchInput);
  console.log(h2);
 for (i = 0; i < h2.length; i++) {
 $(h2).each(function(){
  // console.log($(this).html().toUpperCase());
  // console.log(filter);
  console.log(h2);
  if (h2 === filter) {
   h2[i].style.display = "";
    console.log(h2 + "match");
  }
  else {
    h2[i].style.display = "none";
    console.log(h2 + "no matches")
  }
});
  // h2 = h2[i].getElementsByTagName('h2')[0];
}
}


// search();
// ============================================================================
