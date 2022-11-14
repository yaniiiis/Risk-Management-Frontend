import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-portefeuil',
  templateUrl: './portefeuil.component.html',
  styleUrls: ['./portefeuil.component.css'],
})
export class PortefeuilComponent implements OnInit {
  constructor() {}
  chart: any;

  ngOnInit(): void {
    this.createChart();
  }

  myJson = [
    { day: 'mon', depenses: { food: 400, drink: 100 } },
    { day: 'tue', depenses: { food: 300, drink: 100 } },
    { day: 'wed', depenses: { food: 400, drink: 30 } },
    { day: 'thu', depenses: { food: 300, drink: 100 } },
    { day: 'fri', depenses: { food: 500, drink: 700 } },
    { day: 'sat', depenses: { food: 900, drink: 500 } },
    { day: 'sun', depenses: { food: 700, drink: 400 } },
  ];

  createChart() {
    this.chart = new Chart('engagement', {
      type: 'bar',

      data: {
        // labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'transparent',
              labels: {
                index: {
                  align: 'end',
                  anchor: 'end',
                  formatter: function (value, ctx) {
                    return value.depenses.food;
                  },
                  color: 'red',
                },
              },
            },

            data: this.myJson,
            backgroundColor: 'red',
            borderColor: 'red',
            parsing: {
              yAxisKey: 'depenses.food',
            },
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'transparent',
              labels: {
                index: {
                  align: 'end',
                  anchor: 'end',
                  formatter: function (value, ctx) {
                    return value.depenses.drink;
                  },
                  color: 'green',
                  opacity: 0.7,
                },
              },
            },
            label: 'drinks depenses',
            data: this.myJson,
            backgroundColor: 'green',
            borderColor: 'green',
            parsing: {
              yAxisKey: 'depenses.drink',
            },
          },

          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'transparent',
              labels: {
                index: {
                  align: 'end',
                  anchor: 'end',
                  formatter: function (value, ctx) {
                    return value.depenses.food;
                  },
                  color: 'blue',
                },
              },
            },
            label: 'food depenses',
            data: this.myJson,
            backgroundColor: 'blue',
            borderColor: 'blue',
            parsing: {
              yAxisKey: 'depenses.food',
            },
          },
          {
            datalabels: {
              anchor: 'end',
              align: 'top',
              backgroundColor: 'transparent',
              labels: {
                index: {
                  align: 'end',
                  anchor: 'end',
                  formatter: function (value, ctx) {
                    return value.depenses.drink;
                  },
                  color: 'yellow',
                  opacity: 0.7,
                },
              },
            },
            label: 'drinks depenses',
            data: this.myJson,
            backgroundColor: 'yellow',
            borderColor: 'yellow',
            parsing: {
              yAxisKey: 'depenses.drink',
            },
          },
        ],
      },
      options: {
        plugins: {
          title: {
            display: true,
            text: 'Les engagements indirects',
            padding: {
              bottom: 30,
              top: 10,
            },
          },
          legend: {
            align: 'center',
            position: 'bottom',
          },
        },
        parsing: {
          xAxisKey: 'day',
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              // Include a dollar sign in the ticks
              callback: function (value, index, ticks) {
                return value;
              },
            },
          },
        },
      },
      // plugins: [ChartDataLabels],
    });
    // setTimeout(() => {
    //   this.chart.config.data.labels = ['y', 'a', 'n', 'i', 's', 'z', 'i'];
    //   this.chart.update();
    // }, 3000);
  }
}

// render init block

// createChart() {
//   this.chart = new Chart('MyChart', {
//     type: 'line', //this denotes tha type of chart

//     data: {
//       // values on X-Axis
//       labels: [
//         '2022-05-10',
//         '2022-05-11',
//         '2022-05-12',
//         '2022-05-13',
//         '2022-05-14',
//         '2022-05-15',
//         '2022-05-16',
//         '2022-05-17',
//       ],
//       datasets: [
//         {
//           label: 'Sales',
//           data: ['467', '576', '572', '79', '92', '574', '573', '576'],
//           backgroundColor: 'blue',
//           datalabels: {
//             anchor: 'end',
//             align: 'top',
//             offset: 0,
//           },
//         },
//       ],
//     },
//     plugins: [ChartDataLabels],
//   });
// }
