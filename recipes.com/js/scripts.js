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
// Menu for Recipes page ======================================================
// When the checkboxes for breakfast, lunch/dinner, or dessert is clicked
// All dishes without the corresponding class will disappear
// ============================================================================
// Logic for form submission ==================================================
var form_complete = false;
var name_complete = false;
var date_complete = false;
var email_complete = false;
var password_complete = false;
$('body').on('click', function() {
  // Days in month:
  var month=$('#month').val();
  var year=$('#year').val();
  var day=$('#day').val();
  if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) {
    $("#day option[value='31']").show();
    $("#day option[value='30']").show();
    $("#day option[value='29']").show();
  } else if (month == 4 || month == 6 || month == 9 || month == 11) {
    $("#day option[value='31']").remove();
  } else if (month == 2 && year%4 != 0 || month == 2 && year == "") {
    $("#day option[value='31']").hide();
    $("#day option[value='30']").hide();
    $("#day option[value='29']").hide();
  } else if (year%4 == 0) {
    $("#day option[value='31']").hide();
    $("#day option[value='30']").hide();
    $("#day option[value='29']").show();
  }
});
// Password/ email:
var sendToEmail = "";
$('form').on('submit', function () {
  var first_name=$('#firstname').val();
  var last_name=$('#lastname').val();
  var month=$('#month').val();
  var year=$('#year').val();
  var day=$('#day').val();
  var password1 = $('#password-enter').val();
  var password2 = $('#password-confirm').val();
  var email1 = $('#user-email').val();
  var email2 = $('#user-email-confirm').val();
  // Hide alerts on form resubmission:
  $('#first-name-alert').text("");
  $('#last-name-alert').text("");
  $('#month-alert').text("");
  $('#year-alert').text("");
  $('#day-alert').text("");
  $('#email-match-alert').text("");
  $('#password-match-alert').text("");
  // Name:
  if (first_name == "") {
    $('#first-name-alert').text('Please enter your first name.');
  }
  if (last_name == "") {
    $('#last-name-alert').text('Please enter your last name.');
  }
  if (first_name != "" && last_name != "") {
    name_complete = true;
  }
  // Date:
  if (month == "") {
    $('#month-alert').text('Please select a month.');
  }
  if (year == "") {
    $('#year-alert').text('Please select a year.');
  }
  if (day == "") {
    $('#day-alert').text('Please select a day.');
  }
  if (month != "" && year != "" && day != "") {
    date_complete = true;
  }
  // Email:
  if (email1 == "") {
    $('#email-alert').text('Please enter an email address.');
  } else if (email2 == "") {
    $('#email-alert').hide();
    $('#email-confirm-alert').text('Please confirm your email address.');
  } else if (email1 != email2) {
    $('email-confirm-alert').hide();
    $('#email-match-alert').text('Email does not match.');
  } else {
    $('#email-confirm-alert').hide();
    $('#email-match-alert').hide();
    sendToEmail = $('#user-email').val();
  }
  if (email1 != "" && email2 != "" && email1 == email2) {
    email_complete = true;
  }
  // Password:
  if (password1 == "") {
    $('#password-alert').text('Please enter a password.');
  } else if (password2 == "") {
    $('#password-alert').hide();
    $('#password-confirm-alert').text('Please confirm your password.');
  } else if (password1 != password2) {
    $('#password-confirm-alert').hide();
    $('#password-match-alert').text('Passwords do not match.');
  } else {
    $('#password-confirm-alert').hide();
    $('#password-match-alert').hide();
  }
  if (password1 != "" && password2 != "" && password1 == password2) {
    password_complete = true;
  }
});
// Form completion:
$('form').on('submit', function(event) {
  event.preventDefault();
if (name_complete == true && date_complete == true && email_complete == true && password_complete == true) {
  form_complete = true;
}
if (form_complete == true) {
  $('.confirmed-user-email').text(sendToEmail);
  $('.modal-window').css('display', 'flex');
}
});
// ============================================================================
// Modal window for signup page ===============================================
// When the submit button is clicked
// Modal window appears
// Rest of page darkens
$('.modal-x').on('click', function (event) {
  $('.modal-window').fadeOut(300);
});
$('.modal-button').on('click', function (event) {
  var confirmation_code = $('#confirmation-code').val();
  if (confirmation_code ==  "") {
    event.preventDefault();
  }
  else {
    window.open("confirmation.html");
  }
});
// ============================================================================
