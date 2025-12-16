$(function() {


    // chart1
    var ctx = document.getElementById('chart1').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Electronics',
                data: [12, 19, 13, 15, 20, 10, 14, 25, 10],
                backgroundColor: [
                    '#f73757'
                ],
                lineTension: 0,
                borderColor: [
                    '#f73757'
                ],
                borderWidth: 3
            },
            {
                label: 'Furniture',
                data: [7, 15, 9, 12, 17, 16, 12, 9, 4, 6],
                backgroundColor: [
                    '#18bb6b'
                ],
                tension: 0,
                borderColor: [
                    '#18bb6b'
                ],
                borderWidth: 3
            }]
        },
        options: {
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


    
    // chart2
    var ctx = document.getElementById('chart2').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
                label: 'Electronics',
                data: [12, 19, 13, 15, 20, 10],
                backgroundColor: [
                    '#923eb9'
                ],
                borderColor: [
                    '#923eb9'
                ],
                borderWidth: 1
            },
            {
                label: 'Furniture',
                data: [7, 15, 9, 12, 17, 16],
                backgroundColor: [
                    '#18bb6b'
                ],
                borderColor: [
                    '#18bb6b'
                ],
                borderWidth: 1
            }]
        },
        options: {
            maintainAspectRatio: false,
            barPercentage: 0.6,
            categoryPercentage: 0.5,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });


     // chart3
     var ctx = document.getElementById('chart3').getContext('2d');
     var myChart = new Chart(ctx, {
         type: 'pie',
         data: {
             labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
             datasets: [{
                 data: [12, 19, 3, 5, 2, 3],
                 backgroundColor: [
                     '#923eb9',
                     '#f73757',
                     '#18bb6b',
                     '#32bfff',
                     '#ffab4d',
                     '#0a58ca'
                 ],
                 borderWidth: 1.5
             }]
         },
         options: {
            maintainAspectRatio: false,
            
         }
     });
    


      // chart4
      var ctx = document.getElementById('chart4').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'doughnut',
          data: {
              labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
              datasets: [{
                  data: [12, 19, 3, 5, 2, 3],
                  backgroundColor: [
                      '#923eb9',
                      '#f73757',
                      '#18bb6b',
                      '#32bfff',
                      '#ffab4d',
                      '#0a58ca'
                  ],
                  borderWidth: 1
              }]
          },
          options: {
             maintainAspectRatio: false,
             
          }
      });



      
      // chart5
      var ctx = document.getElementById('chart5').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'radar',
          data: {
            labels: [
                'Eating',
                'Drinking',
                'Sleeping',
                'Designing',
                'Coding',
                'Cycling',
                'Running'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [65, 59, 90, 81, 56, 55, 40],
                fill: true,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                pointBackgroundColor: 'rgb(255, 99, 132)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(255, 99, 132)'
              }, {
                label: 'My Second Dataset',
                data: [28, 48, 40, 19, 96, 27, 100],
                fill: true,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                pointBackgroundColor: 'rgb(54, 162, 235)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgb(54, 162, 235)'
              }]
          },
          options: {
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 3
              }
            }
          },
      });



      
      // chart6
      var ctx = document.getElementById('chart6').getContext('2d');
      var myChart = new Chart(ctx, {
          type: 'polarArea',
          data: {
            labels: [
                'Red',
                'Purple',
                'Yellow',
                'Grey',
                'Green'
              ],
              datasets: [{
                label: 'My First Dataset',
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                  'rgb(247, 55, 87)',
                  'rgb(146, 62, 185)',
                  'rgb(255, 171, 77)',
                  'rgb(201, 203, 207)',
                  'rgb(24, 187, 107)'
                ]
              }]
          },
          options: {
            maintainAspectRatio: false,
            elements: {
              line: {
                borderWidth: 3
              }
            }
          },
      });


    
    
});