import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import highchartsWhiteTheme from 'highcharts/themes/grid-light';

highchartsWhiteTheme(Highcharts);

const LineChart = (props) => {
  const datas = props.data

  const x_arr = []
  const temp_arr = []
  const humid_arr = []

  const consumption_1 = []
  const consumption_2 = []
  const consumption_3 = []

  for(let i=0; i<datas.length; i+=1000) x_arr.push(datas[i].Datetime)
  for(let i=0; i<datas.length; i+=1000) temp_arr.push(parseFloat(datas[i].Temperature))
  for(let i=0; i<datas.length; i+=1000) humid_arr.push(parseFloat(datas[i].Humidity/10))

  for(let i=0; i<datas.length; i+=1000) consumption_1.push(datas[i].PowerConsumption_Zone1/1000)
  for(let i=0; i<datas.length; i+=1000) consumption_2.push(datas[i].PowerConsumption_Zone2/1000)
  for(let i=0; i<datas.length; i+=1000) consumption_3.push(datas[i].PowerConsumption_Zone3/1000)

  const options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Energy Comsuption Visualization Chart'
    },
    xAxis: {
      categories: x_arr
    },
    yAxis: {
      title: {
        text: 'Temperature (°C) & Energy Consumption'
      }
    },
    series: [{
      name: 'Temperature',
      data: temp_arr
    }, {
      name: 'Humidity',
      data: humid_arr
    }, {
      name: 'Comsumtion 1 (KW)',
      data: consumption_1
    }, {
      name: 'Comsumtion 2 (KW)',
      data: consumption_2
    }, {
      name: 'Comsumtion 3 (KW)',
      data: consumption_3
    }]
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={options}
    />
  );
};

export default LineChart;