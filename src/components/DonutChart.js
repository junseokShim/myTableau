import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsWhiteTheme from 'highcharts/themes/grid-light';

highchartsWhiteTheme(Highcharts);

const DonutChart = ({ chartTitle, selectedCols, data }) => {
  const selecteDataArray = data.map(item => item[selectedCols]);
  const counts = selecteDataArray.reduce((acc, curr) => {
    if (curr in acc) {
      acc[curr]++;
    } else {
      acc[curr] = 1;
    }
    return acc;
  }, {});

  const uniqueArr = selecteDataArray.filter((item, index) => selecteDataArray.indexOf(item) === index);

  const seriesArray = uniqueArr.map(item => ({
    name: item,
    y: counts[item],
  }));

  const options = {
    chart: {
      type: "pie",
    },
    title: {
      text: chartTitle,
    },
    series: [
      {
        name: "Manufacturers",
        colorByPoint: true,
        data: seriesArray,
      },
    ],
    plotOptions: {
      pie: {
        innerSize: "50%",
        depth: 45,
        dataLabels: {
          enabled: true,
          format: "{point.name}: {point.y:.1f}%",
        },
      },
    },
  };
  return (
    <HighchartsReact 
      highcharts={Highcharts} 
      options={options} />
  );
};

export default DonutChart;