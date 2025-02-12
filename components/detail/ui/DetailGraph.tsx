import { HistoricDollar } from '@/classes/historicDollar';
import { TRange } from '@/types/TRange';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Area, AreaRange, Bar, CartesianChart, Line } from 'victory-native';
import DetailRanges from './DetailRanges';
import { matchFont, useFont } from '@shopify/react-native-skia';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';
import { COLOURS } from '@/constants/constants';
import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dollar';
import { useMemo } from 'react';

export default function DetailGraph({ data, range }: { data: HistoricDollar; range: TRange }) {
  const variation = useMemo(() => data.getVariation(), [data]);
  const historicDollarData = useMemo(() => data.getData(), [data]);

  const font = useFont(Rubik_400Regular, 12);

  const chartDataset = useMemo(() => {
    return historicDollarData.map((day, index) => ({
      value: day.venta,
      label: range === '1y' || range === '5y' ? new HandleDate(new Date(day.fecha)).getFormattedDateMonthYear() : new HandleDate(new Date(day.fecha)).getFormattedDateDayMonth(),
    }));
  }, [historicDollarData, range]);

  const lineColor = useMemo(() => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative), [variation]);

  const areaColor = useMemo(() => (variation > 0 ? COLOURS.areaPositive : variation == 0 ? COLOURS.areaEqual : COLOURS.areaNegative), [variation]);

  const formatYLabel = useMemo(() => (label: number) => `$${Dollar.formatNumber(label, 1, 1)}`, []);

  const renderChart = useMemo(
    () =>
      ({ points, chartBounds }: { points: any; chartBounds: any }) =>
        (
          <>
            <Line points={points.value} color={lineColor} strokeWidth={3} curveType={'cardinal'} animate={{ type: 'spring', duration: 300 }} />
            <Area points={points.value} y0={chartBounds.bottom} color={areaColor} curveType={'cardinal'} animate={{ type: 'spring', duration: 300 }} />
          </>
        ),
    [lineColor, areaColor]
  );

  return (
    <View style={[styles.container]}>
      <DetailRanges rangeSelected={range} />
      <View style={{ height: 260 }}>
        <CartesianChart
          data={chartDataset}
          xKey="label"
          yKeys={['value']}
          padding={{ top: 10, bottom: 20, left: 20, right: 10 }}
          domainPadding={{ top: 20, bottom: 20, left: 10, right: 25 }}
          axisOptions={{
            labelColor: '#fff',
            font: font,
            axisSide: { y: 'left', x: 'bottom' },
            labelOffset: { x: 10, y: 0 },
            formatYLabel: formatYLabel,
            tickCount: 5,
          }}
        >
          {renderChart}
        </CartesianChart>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 15,
    width: '100%',
  },
});
