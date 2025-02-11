import { COLOURS, RANGE_WIDTH } from '@/constants/constants';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import DetailRanges from './DetailRanges';
import { TRange } from '@/types/TRange';
import { useMemo } from 'react';
import { HistoricDollar } from '@/classes/historicDollar';

export default function DetailGraph({ data, range }: { data: HistoricDollar; range: TRange }) {
  const { width } = useWindowDimensions();

  const variation = data.getVariation();
  const historicDollarData = data.getData();
  const labels = data.getLabels();

  const chartDataset = {
    labels: labels,
    datasets: [
      {
        data: historicDollarData.map((day) => day.venta),
      },
    ],
  };

  const chartWidth = useMemo(() => {
    return RANGE_WIDTH[range] + width;
  }, [range]);

  const chartConfig = useMemo(() => {
    return {
      backgroundGradientFromOpacity: 0,
      backgroundGradientToOpacity: 0,
      fillShadowGradientFrom: variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative,
      fillShadowGradientTo: '#000',
      color: () => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative),
      labelColor: () => `#fff`,
      decimalPlaces: 1,
      propsForLabels: {
        fontFamily: 'Rubik',
      },
    };
  }, [variation]);

  return (
    <View style={styles.container}>
      <DetailRanges rangeSelected={range} />
      <LineChart
        data={chartDataset}
        width={chartWidth}
        height={230}
        yAxisLabel="$"
        yAxisSuffix=""
        chartConfig={chartConfig}
        withDots={false}
        fromZero={false}
        withVerticalLabels={true}
        withHorizontalLines={false}
        withVerticalLines={false}
        xLabelsOffset={10}
        bezier
        style={{ marginLeft: -5 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 25,
    width: 300,
  },
});
