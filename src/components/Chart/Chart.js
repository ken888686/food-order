import ChartBar from './ChartBar';
import './Chart.scss';

export default function Chart(props) {
  const dataPointsValue = props.dataPoints.map((item) => item.value);
  const totalMax = Math.max(...dataPointsValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMax}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
