import { LineChart } from 'react-native-gifted-charts';

export default function GraphDolar() {
  const data = [{ value: 50 }, { value: 80 }, { value: 90 }, { value: 70 }];
  return (
    <LineChart
      data={data}
      thickness={4}
      color="green"
      hideDataPoints
      adjustToWidth
      height={100}
      width={100}
      initialSpacing={0}
      backgroundColor="transparent"
      yAxisColor="transparent"
      xAxisColor="transparent"
      hideAxesAndRules
      yAxisLabelWidth={10}
    />
  );
}
