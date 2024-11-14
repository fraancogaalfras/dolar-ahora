import { Idolars } from '@/interfaces/types';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colours } from '@/app/_layout';
import { useMemo } from 'react';

export default function GraphDolar({ data }: { data: Idolars }) {
  const chartConfig = useMemo(() => {
    return {
      backgroundGradientFromOpacity: 0,
      backgroundGradientToOpacity: 0,
      fillShadowGradientFrom: 'transparent',
      fillShadowGradientTo: 'transparent',
      fillShadowGradientFromOpacity: 0,
      fillShadowGradientToOpacity: 0,
      color: () => (parseFloat(data.variacion) > 0 ? colours.positive : parseFloat(data.variacion) == 0 ? colours.equal : colours.negative),
    };
  }, [data]);
  return (
    <View style={{ width: '100%', height: '100%' }}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: [data.ventaAnterior, data.venta],
            },
          ],
        }}
        width={180}
        height={50}
        yAxisLabel=""
        yAxisSuffix=""
        withHorizontalLines={false}
        withVerticalLines={false}
        withDots={false}
        chartConfig={chartConfig}
        style={{ paddingRight: 0, paddingBottom: 5 }}
        bezier
      />
    </View>
  );
}
