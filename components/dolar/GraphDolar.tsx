import { IdolarsBind } from '@/interfaces/types';
import { HandleDate } from '@/classes/date';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { HandleDolarData } from '@/classes/dolar';
import { colours } from '@/app/_layout';

export default function GraphDolar({ data }: { data: IdolarsBind }) {
  const getData = () => {
    const correctValue = HandleDolarData.getCorrectValue(data.casa);
    const graphData: number[] = [];
    const date = new HandleDate();
    date.subtractDays(6);
    for (let i = 5; i > 0; i--) {
      date.addDays(1);
      graphData.push(data.historico[date.getFormattedDateDash()][correctValue as keyof { venta: string; compra: string }]);
    }
    return graphData;
  };

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: getData(),
            },
          ],
        }}
        width={125}
        height={50}
        yAxisLabel=""
        yAxisSuffix=""
        withHorizontalLines={false}
        withVerticalLines={false}
        withDots={false}
        chartConfig={{
          backgroundGradientFromOpacity: 0,
          backgroundGradientToOpacity: 0,
          fillShadowGradientFrom: 'transparent',
          fillShadowGradientTo: 'transparent',
          fillShadowGradientFromOpacity: 0,
          fillShadowGradientToOpacity: 0,
          color: () => (parseFloat(data.variacion) > 0 ? colours.positive : parseFloat(data.variacion) == 0 ? colours.equal : colours.negative),
        }}
        style={{ paddingRight: 0, paddingBottom: 5 }}
        bezier
      />
    </View>
  );
}
