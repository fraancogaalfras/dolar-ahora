import { IdolarsBind } from '@/interfaces/types';
import { HandleDate } from '@/utils/date';
import { LineChart } from 'react-native-gifted-charts';

export default function GraphDolar({ data }: { data: IdolarsBind }) {
  const graphData = [{ value: data?.venta }];
  const date = new HandleDate();
  for (let i = 0; i < 15; i++) {
    date.subtractDays(1);
    graphData.push({ value: data.historico[date.getFormattedDateDash()]?.venta });
  }
  console.log(parseFloat(data.variacion));

  return (
    <LineChart
      data={graphData.toReversed()}
      thickness={4}
      color={parseFloat(data.variacion) > 0 ? 'red' : 'green'}
      hideDataPoints
      adjustToWidth
      height={500}
      width={100}
      initialSpacing={0}
      backgroundColor="transparent"
      yAxisColor="transparent"
      xAxisColor="transparent"
      hideAxesAndRules
      yAxisLabelWidth={10}
      onPress={undefined}
    />
  );
}
