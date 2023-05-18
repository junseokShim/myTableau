import React, { useState } from "react";
import { Typography, IconButton, TextField, Select, MenuItem, InputLabel, FormControl } from "@material-ui/core";
import DetailSection from "./description";
import { Grid } from "@material-ui/core";
import LineChart from "./normalChart";
import BarChart from "./barChart";
import DonutChart from "./DonutChart";

const LineChartsContainer = (props) => {
  return (
    <Grid item xs={12}>
      {props.charts.map((chart, index) => (
        <div key={index}>{chart}</div>
        ))}
    </Grid>
  );
};

const ChartAdditionForm = (props) => {
  return (
    <IconButton onClick={props.handleTextfieldOpen}>+</IconButton>
  );
};

const ChartAddition = (props) => {
  const [selectedChart, setSelectedChart] = useState("");

  const handleChartSelect = (e) => {
    setSelectedChart(e.target.value);
  }

  const handleAddChart = () => {
    if (selectedChart !== "") {
      props.setLineCharts([...props.lineCharts, props.handleChartComponent(selectedChart)]);
      setSelectedChart("");
    }
  }

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <FormControl  style={{width: "120px", marginRight: "1rem" }}>
        <InputLabel style={{width: "120px"}}>Chart Type</InputLabel>
        <Select
          value={selectedChart}
          onChange={handleChartSelect}
        >
          <MenuItem value="LineChart" style={{width: "120px"}}>LineChart</MenuItem>
          <MenuItem value="BarChart" style={{width: "120px"}}>BarChart</MenuItem>
          <MenuItem value="DonutChart" style={{width: "120px"}}>DonutChart</MenuItem>
        </Select>
      </FormControl>
      <IconButton onClick={handleAddChart}>+</IconButton>
    </div>
  );
};

const ParentComponent = (props) => {
  const [lineCharts, setLineCharts] = useState([]);

  const style = {
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '1rem',
  };

  if (props.data.length <= 0 || props.columns.length <= 0 ) {
    return (
      <div>
        <DetailSection title="Upload the CSV FIle">
          <Grid item xs={12}>
            <Typography variant="body1" style={{ marginBottom: "1rem" }}>
              if you upload the csv file, a normal analysis data will be drawn
            </Typography>
          </Grid>
        </DetailSection>
      </div>
    );
  }


  const DonutChartComponent = (props) => {
    const [chartTitle, setChartTitle] = useState("");
    const [selectedCols, setSelectedCols] = useState("");
    const [showChart, setShowChart] = useState(false);
    const selectedData = props.data;
  
    const handleTitleChange = (e) => {
      setChartTitle(e.target.value);
    };
  
    const handleColsChange = (e) => {
      setSelectedCols(e.target.value);
    };
  
    const handleActivateChart = () => {
      setShowChart(true);
    };
  
    return (
      <div>
        <label htmlFor="chartTitle">Chart Title:</label>
        <input type="text" id="chartTitle" value={chartTitle} onChange={handleTitleChange} />
        <br />
        <br />
        <label htmlFor="selectedCols">Select Columns:</label>
        <select id="selectedCols" value={selectedCols} onChange={handleColsChange}>
          {props.columns.map((col) => (
            <option key={col} value={col}>
              {col}
            </option>
          ))}
        </select>
        <br />
        <br />
        <button onClick={handleActivateChart}>Activate Chart</button>
        {showChart && <DonutChart chartTitle={chartTitle} selectedCols={selectedCols} data={selectedData} />}
      </div>
    );
  };
  
  const handleChartComponent = (chartType) => {
    switch (chartType) {
      case "LineChart":
        return <LineChart data={props.data} columns={props.columns} />;
      case "BarChart":
        return <BarChart data={props.data} columns={props.columns} />;
      case "DonutChart":
        return <DonutChartComponent data={props.data} columns={props.columns} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <DetailSection title="Basic graph">
        <Grid container spacing={3}>
          <Grid item xs={6} style={style}>
            <DonutChart
            chartTitle = {"Oper Mode"}
            selectedCols = {"운전모드"}
            data = {props.data} />
          </Grid>
          <Grid item xs={6} style={style}>
            <BarChart data={props.data} columns={props.columns} />
          </Grid>

          <Grid
            item
            xs={12}
            style={{
              ...style,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Add your custom chart</Typography>
            <ChartAddition 
              setLineCharts={setLineCharts} 
              lineCharts={lineCharts}
              handleChartComponent={handleChartComponent}
              />
          </Grid>
          <LineChartsContainer charts={lineCharts} />
        </Grid>
      </DetailSection>
    </div>
  );
};

export default ParentComponent;