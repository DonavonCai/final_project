// When the ^ is clicked on
  // The photo credits will slide up or down
$('.photo-credit').hide();
$('#recipes-a').on('click', function () {
  $('#recipes-credit').slideToggle(300);
});
$('#chefs-a').on('click', function () {
  $('#chefs-credit').slideToggle(300);
});
$('#signup-a').on('click', function () {
  $('#signup-credit').slideToggle(300);
});
