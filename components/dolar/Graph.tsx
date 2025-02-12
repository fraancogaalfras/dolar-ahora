import { COLOURS } from '@/constants/constants';
import { useMemo } from 'react';
import { View } from 'react-native';
import { CartesianChart, Line } from 'victory-native';

export default function Graph({ variation }: { variation: number }) {

  const chartDataset = useMemo(() => {
    return Array.from({ length: 5 }, (_, i) => ({
      label: i,
      value: variation > 0 ? 0 + i * 20 : variation < 0 ? 100 - i * 20 : 50,
    }));
  }, [variation]);

  const lineColor = useMemo(() => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative), [variation]);

  return (
    <View style={{ height: 50 }}>
      <CartesianChart
        data={chartDataset}
        xKey="label"
        yKeys={['value']}
        domainPadding={{ top: 5, bottom: 5, left: 5, right: 10 }}
        axisOptions={{
          labelOffset: { x: 5, y: 0 },
          lineWidth: 0,
        }}
        frame={{ lineWidth: 0 }}
      >
        {({ points }) => <Line points={points.value} color={lineColor} strokeWidth={3} curveType={'bumpX'} />}
      </CartesianChart>
    </View>
  );
}
