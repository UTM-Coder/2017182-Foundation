$(function() {

	$('.tab-button').on('click', function() {
		selected_tab = $(this).data('tab');
		$('.container').hide();
		$('.container#' + selected_tab).show();
	});

	$('#float-step1').on('click', function() {
		$('.box.float').css('float', 'left');
	});

	$('#float-step2').on('click', function() {
		$('.last').css('clear', 'both');
	});

	$('#float-step3').on('click', function() {
		$('.last').remove();
	});

	$('#float-step4').on('click', function() {
		$('.display.float').css('overflow', 'hidden');
	});

	$('#flex-box-step1').on('click', function() {
		$('.display.flex-box').css('display', 'flex');
	});

	$('#flex-box-step2').on('click', function() {
		$('.display').css('flex-wrap', 'wrap');
	});

	$('#flex-box-step3').on('click', function() {
		$('.display').css('flex-direction', 'column');
	});

	$('#advance-position-step1').on('click', function() {
		$('.box.advance-position').css('position', 'static');
	});

	$('#advance-position-step2').on('click', function() {
		$('.box.advance-position').css('position', 'absolute');
	});

	$('#advance-position-step3').on('click', function() {
		$('.box.advance-position').css('position', 'relative');
	});

	$('#advance-position-step4').on('click', function() {
		$('.box.advance-position').css('position', 'fixed');
	});


});