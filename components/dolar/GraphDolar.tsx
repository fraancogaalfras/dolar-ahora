import { IdolarsBind } from '@/interfaces/types';
import { HandleDate } from '@/classes/date';
import { useCallback, useMemo, useState } from 'react';
import { View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { HandleDolarData } from '@/classes/dolar';

export default function GraphDolar({ data }: { data: IdolarsBind }) {
  const [chartParentWidth, setChartParentWidth] = useState(0);
  const [chartParentHeight, setChartParentHeight] = useState(0);

  const onLayoutCallback = useCallback(({ nativeEvent }: { nativeEvent: any }) => {
    setChartParentWidth(nativeEvent.layout.width - 10);
    setChartParentHeight(nativeEvent.layout.height - 10);
  }, []);

  const memoizedGetData = useMemo(() => {
    const correctValue = HandleDolarData.getCorrectValue(data.casa);
    const graphData = [data[correctValue as keyof IdolarsBind]];
    const date = new HandleDate();
    for (let i = 0; i < 10; i++) {
      date.subtractDays(1);
      graphData.push(data.historico[date.getFormattedDateDash()]?.compra);
    }
    return graphData.toReversed();
  }, []);

  return (
    <View style={{ width: '100%', height: '100%' }} onLayout={onLayoutCallback}>
      <LineChart
        data={{
          labels: ['', '', '', '', ''],
          datasets: [
            {
              data: memoizedGetData,
            },
          ],
        }}
        width={chartParentWidth}
        height={chartParentHeight}
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
          color: () => (parseFloat(data.variacion) > 0 ? 'rgb(255 0 0)' : 'rgb(0 255 49)'),
        }}
        style={{ paddingRight: 0, paddingBottom: 5 }}
        bezier
      />
    </View>
  );
}
