import { Idolars } from '@/interfaces/types';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { colours } from '@/app/_layout';
import { useMemo } from 'react';

export default function GraphDolar({ variacion }: { variacion: string }) {
  const getValues = useMemo(() => {
    if (parseFloat(variacion) < 0) {
      return [100, 80, 60, 40, 20];
    } else if (parseFloat(variacion) == 0) {
      return [50, 50, 50, 50, 50];
    } else {
      return [20, 40, 60, 80, 100];
    }
  }, []);

  const chartConfig = useMemo(() => {
    return {
      backgroundGradientFromOpacity: 0,
      backgroundGradientToOpacity: 0,
      fillShadowGradientFrom: 'transparent',
      fillShadowGradientTo: 'transparent',
      fillShadowGradientFromOpacity: 0,
      fillShadowGradientToOpacity: 0,
      color: () => (parseFloat(variacion) > 0 ? colours.positive : parseFloat(variacion) == 0 ? colours.equal : colours.negative),
    };
  }, [variacion]);

  return (
    <View style={{ width: '100%', height: '100%' }}>
      <LineChart
        data={{
          labels: [],
          datasets: [
            {
              data: getValues,
            },
            {
              data: [0],
            },
            {
              data: [100],
            },
          ],
        }}
        width={140}
        height={50}
        fromZero={parseFloat(variacion) == 0}
        yAxisLabel=""
        yAxisSuffix=""
        withHorizontalLines={false}
        withVerticalLines={false}
        withVerticalLabels={true}
        withDots={false}
        chartConfig={chartConfig}
        style={{ paddingRight: 0 }}
        bezier
      />
    </View>
  );
}
