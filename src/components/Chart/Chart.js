import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  const expValue = props.datapoints.map((datapoint) => datapoint.value);
  const maximumExp = Math.max(...expValue);
  return (
    <div className="chart">
      {props.datapoints.map((datapoint) => (
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={maximumExp}
          label={datapoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
