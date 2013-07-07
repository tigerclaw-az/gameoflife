jQuery(document).ready(function($) {
	var board = new Board(45, 45, $('#board'));

	$('#new-board').click(function() {
		board.clear();
		board = newBoard(board);
	});

	$('#next').click(function() {
		board.next();
	});
});

function newBoard(board) {
	for (var i = 0; i < 345; ++i) {
		board.birth(
			Math.floor((Math.random()*44)+1),
			Math.floor((Math.random()*44)+1)
		);
	}

	return board;
}
