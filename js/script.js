
$(function () {
	$('[data-toggle="popover"]').popover()
});

$('[data-toggle="popover"]').popover({
    container: 'body'
});

$('body').scrollspy({ target: '#scrolled' })