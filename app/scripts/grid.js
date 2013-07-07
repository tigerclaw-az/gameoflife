function clickableGrid( rows, cols, callback ) {
	var $grid = $(document.createElement('table'), {class: 'grid'}),
		r = 0, c = 0, i = 0,
		$tr, $cell;

	for (r =0 ; r < rows; ++r) {
		$tr = $grid.append($(document.createElement('tr')));

		for (c = 0; c < cols; ++c){
			$cell = $tr.append($(document.createElement('td')));

			$cell.innerHTML = ++i;
			$cell.on('click', (function(el,r,c,i) {
				return function() { callback(el,r,c,i); };
			})($cell,r,c,i),false);
		}
	}

 	return $grid;
}
