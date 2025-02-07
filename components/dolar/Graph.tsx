import { LineChart } from 'react-native-chart-kit';
import { useMemo } from 'react';
import { COLOURS } from '@/constants/constants';

export default function Graph({ variation }: { variation: number }) {
  
  const getValues = useMemo(() => {
    if (variation < 0) {
      return [100, 80, 60, 40, 20];
    } else if (variation == 0) {
      return [50, 50, 50, 50, 50];
    } else {
      return [20, 40, 60, 80, 100];
    }
  }, [variation]);

  const chartConfig = useMemo(() => {
    return {
      backgroundGradientFromOpacity: 0,
      backgroundGradientToOpacity: 0,
      fillShadowGradientFrom: 'transparent',
      fillShadowGradientTo: 'transparent',
      fillShadowGradientFromOpacity: 0,
      fillShadowGradientToOpacity: 0,
      color: () => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative),
    };
  }, [variation]);

  return (
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
      width={80}
      height={70}
      fromZero={variation == 0}
      withHorizontalLines={false}
      withHorizontalLabels={false}
      withVerticalLines={false}
      withVerticalLabels={false}
      withDots={false}
      chartConfig={chartConfig}
      style={{ paddingRight: 0, paddingLeft: 4, marginTop: 5, marginLeft: 0, marginBottom: 12 }}
      bezier
    />
  );
}
