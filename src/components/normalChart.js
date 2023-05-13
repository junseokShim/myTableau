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
      text: 'Energy Consumption Visualization Chart'
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
        text: 'Temperature (°C) & Energy Consumption'
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