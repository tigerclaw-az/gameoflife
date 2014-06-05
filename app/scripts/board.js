function Board(rmax, cmax, $el) {
	var self = this,
		height = $el.height(),
		width = $el.width(),
		r, c,
		$tr;

	this.$element = $el;
	this.$grid = $('<table/>', {class: 'grid'});
	this.$stats = $('#stats').find('tbody');
	this.rmax = rmax;
	this.cmax = cmax;
	this.alive = 0;
	this.dead = this.rmax*this.cmax;
	this.generation = 0;
	this.world = [];

	for (r = 0; r < this.rmax; r++) {
		this.world[r] = [];
		$tr = $('<tr/>', {height: height/self.rmax});

		for (c = 0; c < this.cmax; c++) {
			this.world[r][c] = 0;
			$tr.append($('<td/>', {
				'class': 'dead',
				width: width/this.cmax+'px'}));
		}

		this.$grid.append($tr);
	}

	$el.append(this.$grid);

	this.updateStats();

	$('td').on('click', function(event) {
		var col = this.cellIndex,
			row = $(this).parents()[0].rowIndex;

		self.birth(row, col);
	});
}

Board.prototype.next = function() {
	var nextGen = this,
		neighbors = 0,
		cell, i, j;

	for (i = 1 ; i < nextGen.rmax-1 ; i++ ) {
		for (j = 1 ; j < nextGen.cmax-1 ; j++ ) {
			neighbors = this.livingNeighbors( i, j );
			cell = nextGen.world[i][j];

			if (cell && neighbors === 2 || neighbors === 3) {
				nextGen.birth(i, j);
			} else if (cell && neighbors < 2 || neighbors > 3) {
				nextGen.death(i, j);
			} else if (!cell && neighbors === 3) {
				nextGen.death(i, j);
			}

			neighbors = 0;
		}
	}

	this.generation++;

	this.updateStats();
};

Board.prototype.livingNeighbors = function(r, c) {
	return this.world[r-1][c-1] +
		this.world[r-1][c]   +
		this.world[r-1][c+1] +
		this.world[r][c-1]   +
		this.world[r][c+1]   +
		this.world[r+1][c-1] +
		this.world[r+1][c]   +
		this.world[r+1][c+1];
};

Board.prototype.birth = function(r, c) {
	this.world[r][c] = 1;
	$(this.$grid[0].rows[r].cells[c]).removeClass('dead').addClass('alive');
};

Board.prototype.death = function(r, c) {
	this.world[r][c] = 0;
	$(this.$grid[0].rows[r].cells[c]).removeClass('alive').addClass('dead');
};

Board.prototype.clear = function(r, c) {
	this.$stats.empty();

	this.alive = 0;
	this.dead = 0;
	this.generation = 0;

	for (r = 0; r < this.rmax; r++) {
		this.world[r] = [];

		for (c = 0; c < this.cmax; c++) {
			this.death(r, c);
		}
	}

	this.updateStats();
};

Board.prototype.updateStats = function() {
	var tpl = new Template(
		'<tr>' +
			'<td>{{number}}</td>' +
			'<td>{{alive}} <span>({{aliveDiff}})</span></td>' +
			'<td>{{dead}} <span>({{deadDiff}})</span></td>' +
		'</tr>'
	);

	this.$stats.append(tpl.apply({
		number: this.generation,
		alive: this.$grid.find('.alive').length,
		dead: this.$grid.find('.dead').length
	}));
};
