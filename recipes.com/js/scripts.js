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
$('form').on('submit', function(event) {
  event.preventDefault();
  $('.cover').toggleClass('dark');
});
// ============================================================================
// Logic for form submission ==================================================
$('#day').on('click', function() {
  var month=$('#month').val();
  var year=$('#year').val();
  if (month == "") {
    $('#month-alert').text('Please select a month.');
  }
  if (year == "") {
    $('#year-alert').text('Please select a year.');
  }
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    $("#day option[value='31']").show();
    $("#day option[value='30']").show();
    $("#day option[value='29']").show();
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    $("#day option[value='31']").remove();
  } else if (month ==2 && year%4 != 0) {
    $("#day option[value='31']").hide();
    $("#day option[value='30']").hide();
    $("#day option[value='29']").hide();
  } else if (year%4 == 0) {
    $("#day option[value='31']").hide();
    $("#day option[value='30']").hide();
    $("#day option[value='29']").show();
  }
});
// ============================================================================
