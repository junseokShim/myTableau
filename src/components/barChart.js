import React, { Component } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsWhiteTheme from 'highcharts/themes/grid-light';

highchartsWhiteTheme(Highcharts);

const BarChart = (props) => {

  const [data, columns] = [props.data, props.columns]

  const x_arr = []
  for(let i=1; i<props.columns.length; i++){x_arr.push(columns[i])}

  const series_js = [];

  for(let j=1; j<columns.length; j++){
    const series = []
    for(let i=0; i<data.length; i+=1000){
      try {
        if (columns[j].includes("PowerConsumption")) {
          series.push(parseFloat(data[i][columns[j]]) / 1000)
        } else {
          series.push(parseFloat(data[i][columns[j]]))
        }
      } catch (error) {
        console.error(error);
      }
    }

    const sum = series.reduce((accumulator, currentValue) => accumulator + currentValue)
    const average = sum / series.length

    series_js.push({
      name: columns[j],
      data: [average],
    })
  }

  const options = {
    chart: {
      type: 'column' // 세로에서 가로로 변경
    },
    title: {
      text: 'Sample Bar Chart'
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle'
    },
    yAxis: {
      title: {
        text: 'Fruit Eaten'
      }
    },
    xAxis: {
      categories: x_arr,
      title: {
        text: 'X Label' // X Label 추가
      },
      labels: {
        enabled: true
      },
      reversed: false
    },
    series: series_js
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
}

export default BarChart;