(function(root){

	var counterValues = new Array();
	var data = new Array();
	var colors = [
			{color: '#8080C0',min: 0, max: 10},
			{color: '#E8D098',min: 10, max: 20},
			{color: '#336699',min: 20, max: 30},
			{color: '#6699CC',min: 30, max: 40},
			{color: '#66CCCC',min: 40, max: 50},
			{color: '#B45B3E',min: 50, max: 60},
			{color: '#479AC7',min: 60, max: 70}
		];

	(function MakeData() {
		var col = 10,
			row = 10,
			num = 7;

		for (var i = 0; i < num; i++) {
			counterValues[i] = i * 10;
		};

		for (var i = 0; i < row; i++) {
			data[i] = new Array();
			for (var j = 0; j < col; j++) {
				data[i][j] = Math.random() * num * 10;
				for(var k = 0; k < num; k++) {
					if(data[i][j] === counterValues[k])
						data[i][j] += 0.0001;
				}
			}	
		}
	})();

	root.IsobarData = window.IsobarData = {
		ContourValues: counterValues,
		Data: data,
		Colors: colors
	};

})(this);