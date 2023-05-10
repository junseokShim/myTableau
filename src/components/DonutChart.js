import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsWhiteTheme from 'highcharts/themes/grid-light';

highchartsWhiteTheme(Highcharts);

class CarManufacturersDonutChart extends Component {
  render() {
    const options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Top 5 Car Manufacturers in the World'
      },
      series: [{
        name: 'Manufacturers',
        colorByPoint: true,
        data: [{
          name: 'Toyota',
          y: 28.6
        }, {
          name: 'Volkswagen',
          y: 12.7
        }, {
          name: 'General Motors',
          y: 9.9
        }, {
          name: 'Ford',
          y: 6.7
        }, {
          name: 'Honda',
          y: 5.2
        }]
      }],
      plotOptions: {
        pie: {
          innerSize: '50%',
          depth: 45,
          dataLabels: {
            enabled: true,
            format: '{point.name}: {point.y:.1f}%'
          }
        }
      }
    };

    return (
      <HighchartsReact
        highcharts={Highcharts}
        options={options}
      />
    );
  }
}

export default CarManufacturersDonutChart;
