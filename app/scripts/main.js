(function($) {
	var board = new Board(45, 45, $('#board'));
	board.reset();

	$('#new-board').click(function() {
		board.reset();
	});

	$('#next').click(function() {
		board.next();
	});
})(jQuery);
