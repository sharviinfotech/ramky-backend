import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { SeriesLineOptions } from 'highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.css'],
})
export class TopThreeProductsComponent implements OnInit {
  // Highcharts: typeof Highcharts = Highcharts; // Required for the template
  // chartOptions: Highcharts.Options = {
  //   chart: {
  //     type: 'bar',
  //     height: 225,
  //   },
  //   title: {
  //     text: 'Top 3 Products',
  //   },
  //   xAxis: {
  //     categories: [
  //       'Lenova Thinkpad E15',
  //       'Nectar Orange Juice',
  //       'Axe Deodarant',
  //     ],
  //   },
  //   yAxis: {
  //     title: {
  //       text: '', // Empty to remove y-axis title
  //     },
  //   },
  //   series: [
  //     {
  //       type: 'bar',
  //       showInLegend: false, // Hides the legend
  //       data: [
  //         {
  //           name: 'Lenova Thinkpad E15',
  //           y: 395,
  //           color: '#044342',
  //         },
  //         {
  //           name: 'Nectar Orange Juice',
  //           y: 385,
  //           color: '#7e0505',
  //         },
  //         {
  //           name: 'Axe Deodarant',
  //           y: 275,
  //           color: '#ed9e20',
  //         },
  //       ],
  //     },
  //   ],
  //   credits: {
  //     enabled: false, // Disables Highcharts credits
  //   },
  // };
  Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
    },
    title: {
      text: 'My First Chart',
    },
    series: [
      {
        type: 'line', // Specify the type here
        name: 'Example Series',
        data: [1, 2, 3, 4, 5],
      } as SeriesLineOptions,
    ], // Cast the series to the specific type
  };
  constructor() {}
  ngOnInit(): void {}
}
