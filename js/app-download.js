$(document).ready(function () {
	// When a tab is clicked
	$('#app-select p').click(function () {
		// Remove 'active' class from all tabs
		$('#app-select p').removeClass('active');

		// Add 'active' class to the clicked tab
		$(this).addClass('active');

		// Determine which tab was clicked
		var targetClass = $(this).text().toLowerCase().includes('android')
			? 'android'
			: 'ios';

		// Hide all tab content sections
		$('.dl-app').hide();

		// Show the corresponding content section
		$('.dl-app.' + targetClass).show();
	});

	// Optional: Set the initial state (Android content visible by default)
	$('.dl-app').hide();
	$('.dl-app.android').show();
});
