
// Chart.js - Circle Chart
const circle = document.getElementById('circleChart');
const line = document.getElementById('lineChart');

const circleChart = new Chart(circle, {
    type: 'doughnut',
    data: {
      labels: [
        '18-25',
        '25-40',
        '40-60',
        '60+'
      ],
      datasets: [{
        data: [200, 350, 180, 120],
        backgroundColor: [
          'rgb(205, 180, 219)',
          'rgb(255, 200, 221)',
          'rgb(255, 175, 204)',
          'rgb(189, 224, 254)'
        ],
        hoverOffset: 4
      }]

    },
    options: {
    }
});

const labels = ['January', 'February', 'March', 'April', 
                'May', 'June', 'July', 'August', 
                'September', 'October'];
const lineChart = new Chart(line, {
  type: 'line',
  data: {
    labels: labels,
    datasets: [{
      label: 'Cases',
      data: [500, 468, 400, 350, 403, 328, 315, 286, 250, 217],
      fill: false,
      borderColor: 'rgb(162, 210, 255)',
      tension: 0.1,
    }]
  },
  options: {
    pointHoverBackgroundColor: 'rgb(205, 180, 219)'
  }
});