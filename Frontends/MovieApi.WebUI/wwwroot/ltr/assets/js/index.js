$(function() {


    
// chart 1
var options = {
    series: [{
        name: "Total Orders",
        data: [5, 15, 6, 10, 5]
    }],
    chart: {
        type: "area",
       // width: 150,
        height: 180,
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
            columnWidth: "35%",
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
		  gradientToColors: ['#ff0080'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#923eb9"],
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
        name: "Total Views",
        data: [450, 560, 871, 414, 555, 420]
    },
    {
        name: "Total Clicks",
        data: [-250, -360, -671, -414, -555, -120]
    }],
    chart: {
        type: "bar",
        height: 380,
        stacked: true,
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
            enabled: !1
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
            columnWidth: "20%",
            distributed: false,
            barHeight: '70%',
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        colors: ['transparent'],
        width: 0,
        curve: "smooth"
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
    },
    colors: ["#3361ff", "#18bb6b"],
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
      },
      grid: {
        show: false,
      },
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
        data: [10, 15, 38, 10, 18, 12, 8]
    }],
    chart: {
        type: "bar",
       // width: 150,
        height: 250,
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
            columnWidth: "35%",
            endingShape: "rounded"
        }
    },
    dataLabels: {
        enabled: !1
    },
    stroke: {
        show: !0,
        width: 2.5,
        curve: "smooth"
    },
    grid: {
        show: false,
    },
    xaxis: {
        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"]
    },
    fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: 'vertical',
		  shadeIntensity: 0.5,
		  gradientToColors: ['#3361ff'],
		  inverseColors: false,
		  opacityFrom: 0.8,
		  opacityTo: 0.3,
		  //stops: [0, 100]
		}
	  },
    colors: ["#3361ff"],
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
       // width: 150,
        height: 80,
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
            color: "#32bfff"
        },
        sparkline: {
            enabled: !0
        }
    },
    markers: {
        size: 0,
        colors: ["#32bfff"],
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
		  gradientToColors: ['#32bfff'],
		  inverseColors: false,
		  opacityFrom: 0.5,
		  opacityTo: 0.1,
		  //stops: [0, 100]
		}
	  },
    colors: ["#32bfff"],
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

  $('#chart5').easyPieChart({
    
    easing: 'easeOutBounce',
    barColor : '#e72e7a',
    lineWidth: 6,
    trackColor : 'rgb(231 46 122 / 15%)',
    scaleColor: false,
    onStep: function(from, to, percent) {
        $(this.el).find('.w_percent').text(Math.round(percent));
    }

});



// chart 6

var options = {
    chart: {
      height: 275,
      type: 'radialBar',
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      radialBar: {
        //startAngle: -135,
        //endAngle: 225,
         hollow: {
          margin: 0,
          size: '85%',
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
            //color: 'rgba(209, 58, 223, 0.65)',
            opacity: 0.12
          }
        },
        track: {
          background: '#fff',
          strokeWidth: '30%',
          margin: 0, // margin is in pixels
          dropShadow: {
            enabled: true,
            top: -3,
            left: 0,
            blur: 4,
      //color: 'rgba(209, 58, 223, 0.65)',
            opacity: 0.12
          }
        },
  
        dataLabels: { 
          showOn: 'always',
          name: {
            offsetY: -20,
            show: true,
            color: '#000',
            fontSize: '15px'
          },
          value: {
            formatter: function (val) {
          return val + "%";
        },
            color: '#000',
            fontSize: '40px',
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
        gradientToColors: ['#00dbde'],
        opacityFrom: 1,
        opacityTo: 1,
        stops: [0, 100]
      }
    },
    colors: ["#fc00ff"],
    series: [68],
    stroke: {
      //lineCap: 'round',
      dashArray: 4
    },
    labels: ['Weekly Status'],
  
  }
  
  var chart = new ApexCharts(
    document.querySelector("#chart6"),
    options
  );
  
  chart.render();	












  
    
});