$(function() {


// chart 1
var options = {
    series: [{
        name: "Total Earnings",
       // data: [0, 160, 671, 414, 555, 257, 901, 613, 727, 414, 555, 0]
        data: [0, 160, 671, 414, 555, 414, 555, 257, 300, 0]
    }],
    chart: {
        type: "area",
        //width: 130,
        height: 70,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#923eb9"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#923eb9"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#7928ca'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#ff0080"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);
  chart.render();




// chart 2
var options = {
    series: [{
        name: "Total Expense",
        data: [0, 160, 671, 414, 555, 414, 555, 257, 300, 0]
    }],
    chart: {
        type: "area",
        //width: 130,
        height: 70,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#ee0979"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#ee0979"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#ee0979'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#ff6a00"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);
  chart.render();




// chart 3
var options = {
    series: [{
        name: "Total Orders",
        data: [0, 160, 671, 414, 555, 414, 555, 257, 300, 0]
    }],
    chart: {
        type: "area",
        //width: 130,
        height: 70,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#009efd"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#009efd"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#009efd'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#2af598"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart3"), options);
  chart.render();



  
  
// chart 4
var options = {
    series: [{
        name: "Total Orders",
        data: [0, 160, 671, 414, 555, 0]
    }],
    chart: {
        type: "area",
        width: 150,
        height: 40,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#f7971e"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#f7971e"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#ffd200'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#f7971e"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart4"), options);
  chart.render();



  
  
  
// chart 5
var options = {
    series: [{
        name: "Total Orders",
        data: [0, 160, 671, 414, 555, 0]
    }],
    chart: {
        type: "area",
        width: 150,
        height: 40,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#17ad37"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#17ad37"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#98ec2d'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#17ad37"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart5"), options);
  chart.render();




  
// chart 6
var options = {
    series: [{
        name: "Total Orders",
        data: [0, 160, 671, 414, 555, 0]
    }],
    chart: {
        type: "area",
        width: 150,
        height: 40,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#005bea"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#005bea"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#00c6fb'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#005bea"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart6"), options);
  chart.render();



  
// chart 7
var options = {
    series: [{
        name: "Total Orders",
        data: [180, 160, 671, 414, 555, 240, 350, 146]
    }],
    chart: {
        type: "bar",
        width: 150,
        height: 40,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#7928ca"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#7928ca"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "35%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    },
  
    colors: ["#7928ca"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart7"), options);
  chart.render();




  // chart 8

  $('#chart8').easyPieChart({
    
    easing: 'easeOutBounce',
    barColor : '#e72e7a',
    lineWidth: 6,
    trackColor : 'rgb(231 46 122 / 15%)',
    scaleColor: false,
    onStep: function(from, to, percent) {
        $(this.el).find('.w_percent').text(Math.round(percent));
    }

});


// chart 9

$('#chart9').easyPieChart({

easing: 'easeOutBounce',
barColor : '#3461ff',
lineWidth: 6,
trackColor : 'rgb(52 97 255 / 15%)',
scaleColor: false,
onStep: function(from, to, percent) {
    $(this.el).find('.w_percent').text(Math.round(percent));
}

});


// chart 10

$('#chart10').easyPieChart({

easing: 'easeOutBounce',
barColor : '#12bf24',
lineWidth: 6,
trackColor : 'rgb(18 191 36 / 15%)',
scaleColor: false,
onStep: function(from, to, percent) {
    $(this.el).find('.w_percent').text(Math.round(percent));
}

});




  
   // chart 11

   var options = {
	chart: {
	  height: 200,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
        //startAngle: -90,
        //endAngle: 90,
		 hollow: {
		  margin: 0,
		  size: '82%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: true,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		 // background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: 0,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -12,
			show: true,
			color: '#212529',
			fontSize: '15px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '30px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#7928ca'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#ff0080"],
	series: [72],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Server Load'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  var chart = new ApexCharts(
	document.querySelector("#chart11"),
	options
  );

  chart.render();





   // chart 12

   var options = {
	chart: {
	  height: 200,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
        //startAngle: -90,
        //endAngle: 90,
		 hollow: {
		  margin: 0,
		  size: '82%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: true,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		 // background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: 0,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -12,
			show: true,
			color: '#212529',
			fontSize: '15px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '30px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#00c6fb'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#005bea"],
	series: [68],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Bandwidth'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  var chart = new ApexCharts(
	document.querySelector("#chart12"),
	options
  );

  chart.render();




   // chart 13

   var options = {
	chart: {
	  height: 200,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
        //startAngle: -90,
        //endAngle: 90,
		 hollow: {
		  margin: 0,
		  size: '82%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: true,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		 // background: '#eee',
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: 0,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -12,
			show: true,
			color: '#212529',
			fontSize: '15px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '30px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#98ec2d'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#17ad37"],
	series: [54],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Diskspace'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  var chart = new ApexCharts(
	document.querySelector("#chart13"),
	options
  );

  chart.render();



   // chart 14

   var options = {
	chart: {
	  height: 200,
	  type: 'radialBar',
	  toolbar: {
		show: false
	  }
	},
	plotOptions: {
	  radialBar: {
        //startAngle: -90,
        //endAngle: 90,
		 hollow: {
		  margin: 0,
		  size: '82%',
		  background: 'transparent',
		  image: undefined,
		  imageOffsetX: 0,
		  imageOffsetY: 0,
		  position: 'front',
		  dropShadow: {
			enabled: true,
			top: 3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		track: {
		  strokeWidth: '67%',
		  margin: 0, // margin is in pixels
		  dropShadow: {
			enabled: 0,
			top: -3,
			left: 0,
			blur: 4,
			color: 'rgba(0, 169, 255, 0.85)',
			opacity: 0.65
		  }
		},
		dataLabels: { 
		  showOn: 'always',
		  name: {
			offsetY: -12,
			show: true,
			color: '#212529',
			fontSize: '15px'
		  },
		  value: {
			formatter: function (val) {
					  return val + "%";
				  },
			color: '#212529',
			fontSize: '30px',
			show: true,
			offsetY: 10,
		  }
		}
	  }
	},
	fill: {
	  type: 'gradient',
	  gradient: {
		shade: 'light',
		type: 'horizontal',
		shadeIntensity: 0.5,
		gradientToColors: ['#f7971e'],
		inverseColors: false,
		opacityFrom: 1,
		opacityTo: 1,
		stops: [0, 100]
	  }
	},
	colors: ["#ffd200"],
	series: [82],
	stroke: {
	  lineCap: 'round',
	  //dashArray: 4
	},
	labels: ['Total Traffic'],
	responsive: [
		{
		  breakpoint: 1281,
		  options: {
			chart: {
				height: 220,
			}
		  }
		}
	  ],

  }

  var chart = new ApexCharts(
	document.querySelector("#chart14"),
	options
  );

  chart.render();





// chart 15
var options = {
    series: [{
        name: "Total Earnings",
        data: [180, 380, 671, 414, 555, 257, 901, 613, 420]
        //data: [0, 160, 671, 414, 555, 414, 555, 257, 300, 0]
    }],
    chart: {
        type: "bar",
        //width: 130,
        height: 210,
        toolbar: {
            show: !1
        },
        zoom: {
            enabled: !1
        },
        dropShadow: {
            enabled: 0,
            top: 3,
            left: 14,
            blur: 4,
            opacity: .12,
            color: "#923eb9"
        },
        sparkline: {
            enabled: !1
        }
    },
    markers: {
        size: 0,
        colors: ["#923eb9"],
        strokeColors: "#fff",
        strokeWidth: 2,
        hover: {
            size: 7
        }
    },
    plotOptions: {
        bar: {
            horizontal: !1,
            columnWidth: "30%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#7928ca'],
		  inverseColors: false,
		  opacityFrom: 1,
		  opacityTo: 1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#ff0080"],
    tooltip: {
        theme: "dark",
        fixed: {
            enabled: !1
        },
        x: {
            show: !1
        },
        y: {
            title: {
                formatter: function(e) {
                    return ""
                }
            }
        },
        marker: {
            show: !1
        }
    }
  };

  var chart = new ApexCharts(document.querySelector("#chart15"), options);
  chart.render();



    
});