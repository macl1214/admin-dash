const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
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