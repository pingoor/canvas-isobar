(function($, undefined){

	var ctx = null;
	var isobar = null;
	var width = 800, height = 500;
	function initCanvas() {
		var canvas = document.getElementById('isobarCanvas');
		canvas.width = width;
		canvas.height = height;
		if(canvas.getContext)
			ctx = canvas.getContext('2d');
	}

	function start(){

		$('#sample').click(function(){
			var samples = randomSamples(0, 70, width, height, 10000);
			drawSamples(samples, width, height, ctx);

			// 颜色等级
			var colorLevels = [
					{color: '#8080C0',min: 0, max: 10},
					{color: '#E8D098',min: 10, max: 20},
					{color: '#336699',min: 20, max: 30},
					{color: '#6699CC',min: 30, max: 40},
					{color: '#66CCCC',min: 40, max: 50},
					{color: '#B45B3E',min: 50, max: 60},
					{color: '#479AC7',min: 60, max: 70}
				];
			var counterValues = new Array();
			for (var i = 0; i < 7; i++) {
				counterValues[i] = i * 10;
			};

			isobar = new Isobar(ctx,samples,counterValues,colorLevels, 0.4);
		})

		$('#generate').click(function(){
			if(!isobar) return;
			isobar.drawlines();
		})

		$('#smooth').click(function(){
			if(!isobar) return;
			isobar.smooth();
		})

		$('#fill').click(function(){
			if(!isobar) return;
			isobar.fill();
		})
	}

	// 随机生成样本数据
	// min -> 最小值
	// max -> 最大值
	// width -> 最大x坐标
	// heigh -> 最大y坐标
	// count -> 样本个数
	function randomSamples(min, max, width, height, count) {
		var samples = new Array();
		for(var i = 0; i < count; i++){
			var x = Math.random() * width;
			var y = Math.random() * height;
			var v = min + Math.random() * max ;
			samples.push( {
				"x": x,
				"y": y,
				"v": v
			});
		}
		return samples;
	}	

	function drawSamples(samples, width, height, context){
		context.clearRect(0,0, width, height);
		for(var i = 0, len = samples.length; i < len; i++) {
			var sample = samples[i];
			context.beginPath();
			context.arc(sample.x, sample.y, 3, 0, Math.PI * 2, true);
			context.fillStyle = "#ff0000";
			context.fill();
		}
	}

	$(document).ready(function(){
		initCanvas();
		start();
	});

})(jQuery, window.undefined);