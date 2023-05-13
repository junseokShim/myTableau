import { Typography } from "@material-ui/core";
import DetailSection from "./description";
import { Grid } from "@material-ui/core";
import LineChart from "./normalChart";
import BarChart from "./barChart";
import CarManufacturersDonutChart from "./DonutChart";

function parseJSON(str) {
  try {
    const json = JSON.parse(str);
    return json;
  } catch (err) {
    console.error(`Error parsing JSON ${err}`);
    return null;
  }
}

const ParentComponent = (props) => {

  const style = {
    borderBottom: '1px solid #e0e0e0',
    paddingBottom: '1rem',
  };

  if (props.data.length <= 0 || props.columns.length <= 0 ){
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
  

  // const pbr = parseJSON(props.receivedData).pbr
  // const per = parseJSON(props.receivedData).per

  // console.log(received_datas.pbr, received_datas.per)
  return (
    <div>
      <DetailSection title="Basic graph">
        <Grid container spacing={3}>
          <Grid item xs={6} style={style}>
            <CarManufacturersDonutChart />
          </Grid>
          <Grid item xs={6} style={style}>
            <BarChart 
            data={props.data}
            columns={props.columns}
            />
          </Grid>

          <Grid item xs={12} style={style}>
            <LineChart 
            data={props.data}
            columns={props.columns}
            />
          </Grid>
        </Grid>
      </DetailSection>

    </div>
  );
};

export default ParentComponent;