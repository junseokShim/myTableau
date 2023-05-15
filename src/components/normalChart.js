import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import getLineChartData from './LineChartData';
import highchartsWhiteTheme from 'highcharts/themes/grid-light';

highchartsWhiteTheme(Highcharts);

const LineChart = (props) => {
  const [data, columns] = [props.data, props.columns]

  const { x_arr, series_js } = getLineChartData(data, columns);

  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Cusmotized Line Chart'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    xAxis: {
      type: 'datetime',
      categories: x_arr
    },
    yAxis: {
      title: {
        text: 'Selected columns by you'
      }
    },
    series: series_js
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default LineChart;