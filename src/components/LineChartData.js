const getLineChartData = (data, columns) => {
    const x_arr = []
    for(let i=0; i<data.length; i+=1000) x_arr.push(data[i].Datetime)
  
    const series_js = [];
  
    for(let j=0; j<columns.length; j++){
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
      series_js.push({
        name: columns[j],
        data: series,
        visible: false
      })
    }
  
    return {
      x_arr,
      series_js
    }
  }
  
  export default getLineChartData;