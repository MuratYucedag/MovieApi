!function($) {
    "use strict";

    var EasyPieChart = function() {};

    EasyPieChart.prototype.init = function() {
    	//initializing various types of easy pie charts
		
    	$('.easy-pie-chart-1').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#d13adf',
			lineWidth: 6,
			animate: 1000,
            lineCap: 'rgba(209, 58, 223, 0.25)',
            trackColor : 'rgba(209, 58, 223, 0.25)',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-2').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#00c8ff',
			lineWidth: 6,
			lineCap: 'rgba(0, 200, 255, 0.25)',
            trackColor : 'rgba(0, 200, 255, 0.25)',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-3').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#f1076f',
			lineWidth: 6,
			lineCap: 'rgba(241, 7, 111, 0.25)',
            trackColor : 'rgba(241, 7, 111, 0.25)',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-4').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#08a50e',
			lineWidth: 6,
			lineCap: 'rgba(8, 165, 14, 0.25)',
            trackColor : 'rgba(8, 165, 14, 0.25)',
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-5').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#ffd200',
			lineWidth: 8,
			trackColor : 'rgba(255, 210, 0, 0.25)',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-6').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#d13adf',
			lineWidth: 8,
			trackColor : 'rgba(209, 58, 223, 0.25)',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});


		$('.easy-pie-chart-7').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#00c8ff',
			lineWidth: 8,
			trackColor : 'rgba(0, 200, 255, 0.25)',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});

		$('.easy-pie-chart-8').easyPieChart({
			easing: 'easeOutBounce',
			barColor : '#000000',
			lineWidth: 8,
			trackColor : 'rgba(0, 0, 0, 0.25)',
			scaleColor: false,
			onStep: function(from, to, percent) {
				$(this.el).find('.percent').text(Math.round(percent));
			}
		});


    },
    //init
    $.EasyPieChart = new EasyPieChart, $.EasyPieChart.Constructor = EasyPieChart
}(window.jQuery),

//initializing
function($) {
    "use strict";
    $.EasyPieChart.init()
}(window.jQuery);