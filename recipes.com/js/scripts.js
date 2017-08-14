// Hamburger Menu =============================================================
  // When the hamburger icon is clicked on
    // The sidebar slides in
  //When the X is clicked on
    //The slidebar slides out
$('.icon').click(function() {
  $('.sidebar').addClass('active');
});
$('#x').click(function() {
  $('.sidebar').removeClass('active');
});
// ============================================================================
// Photo Credits for Homepage =================================================
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
// ============================================================================
// Menu for Chefs page ========================================================
  // When the next arrow is clicked on
    // The next page of chefs will appear
    // The current page will disappear
  // When the back arrow is clicked on
    // The previous page of chefs will appear
    // The current page will disappear
// ============================================================================
// Menu for Recipes page ======================================================
  // When the checkboxes for breakfast, lunch/dinner, or dessert is clicked
    // All dishes without the corresponding class will disappear
// ============================================================================
// Modal window for signup page ===============================================
  // When the submit button is clicked
    // Modal window appears
    // Rest of page darkens
$('button:submit').on('click', function() {
  $('body').toggleClass('darken');
});
// ============================================================================
