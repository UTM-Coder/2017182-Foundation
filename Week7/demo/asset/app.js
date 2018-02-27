$(document).ready(function() {
	$('.clickMe').click(function() {
		let id = $(this).attr('id').slice(2);
		alert('The button ' + id + ' is clicked');
	});
});