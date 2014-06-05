function Board(rmax, cmax, $el) {
	var self = this,
		height = $el.height(),
		width = $el.width(),
		r, c,
		$tr,

		livingNeighbors = function(r, c) {
			return world[r-1][c-1] +
				world[r-1][c]   +
				world[r-1][c+1] +
				world[r][c-1]   +
				world[r][c+1]   +
				world[r+1][c-1] +
				world[r+1][c]   +
				world[r+1][c+1];
		},
		world = [];

	this.$element = $el;
	this.$grid = $('<table/>', {class: 'grid'});
	this.$stats = $('#stats').find('tbody');
	this.rmax = rmax;
	this.cmax = cmax;
	this.alive = 0;
	this.aliveOld = 0;
	this.dead = this.rmax * this.cmax;
	this.deadOld = 0;
	this.generation = 0;

	for (r = 0; r < this.rmax; r++) {
		world[r] = [];
		$tr = $('<tr/>', { height: height/self.rmax });

		for (c = 0; c < this.cmax; c++) {
			world[r][c] = 0;
			$tr.append($('<td/>', {
				'class': 'dead',
				width: width/this.cmax+'px'
			}));
		}

		this.$grid.append($tr);
	}

	$el.append(this.$grid);

	$('td').on('click', function(event) {
		var col = this.cellIndex,
			row = $(this).parents()[0].rowIndex;

		self.birth(row, col);
	});

	/**********
	 * PUBLIC
	 *********/
	 this.birth = function(r, c) {
	 	if (world[r][c] !== 1) {
	 		this.alive++;
	 		this.dead--;
	 	}

		world[r][c] = 1;
		$(this.$grid[0].rows[r].cells[c])
			.removeClass('dead')
			.addClass('alive');
	};

	this.death = function(r, c) {
		if (world[r][c] !== 0) {
			this.alive--;
			this.dead++;
		}

		world[r][c] = 0;
		$(this.$grid[0].rows[r].cells[c])
			.removeClass('alive')
			.addClass('dead');
	};

	this.next = function() {
		var nextGen = this,
			neighbors = 0,
			cell, i, j;

		this.aliveOld = this.alive;
		this.deadOld = this.dead;
		this.generation++;

		for (i = 1 ; i < nextGen.rmax-1 ; i++ ) {
			for (j = 1 ; j < nextGen.cmax-1 ; j++ ) {
				neighbors = livingNeighbors( i, j );
				cell = world[i][j];

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

		this.updateStats();
	};

	this.reset = function() {
		this.$stats.empty();

		this.generation = 0;
		this.alive = 0;
		this.aliveOld = this.alive;
		this.dead = this.rmax * this.cmax;
		this.deadOld = this.dead;


		for (r = 0; r < this.rmax; r++) {
			world[r] = [];

			for (c = 0; c < this.cmax; c++) {
				world[r][c] = 0;
				this[Math.floor(Math.random()*2) ? 'birth' : 'death'](r, c);
			}
		}

		this.updateStats();
	};

	this.updateStats = function() {
		var tpl = new Template(
				'<tr>' +
					'<td>{{number}}</td>' +
					'<td>{{alive}} <span>({{aliveDiff}})</span></td>' +
					'<td>{{dead}} <span>({{deadDiff}})</span></td>' +
				'</tr>'
			);

		this.$stats.append(tpl.apply({
			number: this.generation,
			alive: this.alive,
			aliveDiff: this.aliveOld - this.alive,
			dead: this.dead,
			deadDiff: this.deadOld - this.dead
		}));
	};

	this.updateStats();
}
