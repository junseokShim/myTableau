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
  console.log(props)
  console.log(props.data)

  // const pbr = parseJSON(props.receivedData).pbr
  // const per = parseJSON(props.receivedData).per

  // console.log(received_datas.pbr, received_datas.per)
  return (
    <div>
      <DetailSection title="Basic graph">
        <Grid item xs={12}>
          <LineChart
          data = {props.data}
          />
          <BarChart/>
          <CarManufacturersDonutChart/>
        </Grid>

      </DetailSection>
    </div>
  );
};

export default ParentComponent;