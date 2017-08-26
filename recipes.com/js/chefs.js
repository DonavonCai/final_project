// Menu for Chefs page ========================================================
	// When the next arrow is clicked on
		// The next page of chefs will appear
		// The current page will disappear
	// When the back arrow is clicked on
		// The previous page of chefs will appear
	// The current page will disappear
// ============================================================================
// Read More ==================================================================
	$('button').on('click', function () {
		$(this).parent().find('.read-more').toggleClass('hidden');
		$(this).parent().find('button').toggleClass('hidden');
	});
// ============================================================================