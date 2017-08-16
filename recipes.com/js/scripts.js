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

});
// ============================================================================
// Logic for form submission ==================================================
// Dates:
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
// Password/ Email matching:
$('form').on('submit', function () {
  $('#email-match-alert').text("");
  var email1 = $('#user-email').val();
  var email2 = $('#user-email-confirm').val();
  if (email1 == "") {
    $('#email-alert').text('Please enter an email address.')
  } else if (email2 == "") {
    $('#email-alert').hide();
    $('#email-confirm-alert').text('Please confirm your email address.')
  } else if (email1 != email2) {
    $('email-confirm-alert').hide();
    $('#email-match-alert').text('Email does not match.')
  } else {
    $('#email-confirm-alert').hide();
    $('#email-match-alert').hide();
  }
});
$('form').on('submit', function () {
  $('#password-match-alert').text("");
  var password1 = $('#password-enter').val();
  var password2 = $('#password-confirm').val();
  if (password1 == "") {
    $('#password-alert').text('Please enter a password.')
  } else if (password2 == "") {
    $('#password-alert').hide();
    $('#password-confirm-alert').text('Please confirm your password.')
  } else if (password1 != password2) {
    $('#password-confirm-alert').hide();
    $('#password-match-alert').text('Passwords do not match.')
  } else {
    $('#password-confirm-alert').hide();
    $('#password-match-alert').hide();
  }
});
// ============================================================================
