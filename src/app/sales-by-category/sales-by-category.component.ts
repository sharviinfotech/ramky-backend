import { Component } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.css'],
})
export class SalesByCategoryComponent {
  Highcharts: typeof Highcharts = Highcharts; // Required for the template
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'bar',
      height: 225,
    },
    title: {
      text: 'Top 3 Products',
    },
    xAxis: {
      categories: [
        'Lenova Thinkpad E15',
        'Nectar Orange Juice',
        'Axe Deodarant',
      ],
    },
    yAxis: {
      title: {
        text: '', // Empty to remove y-axis title
      },
    },
    series: [
      {
        type: 'bar',
        showInLegend: false, // Hides the legend
        data: [
          {
            name: 'Lenova Thinkpad E15',
            y: 395,
            color: '#044342',
          },
          {
            name: 'Nectar Orange Juice',
            y: 385,
            color: '#7e0505',
          },
          {
            name: 'Axe Deodarant',
            y: 275,
            color: '#ed9e20',
          },
        ],
      },
    ],
    credits: {
      enabled: false, // Disables Highcharts credits
    },
  };
}
