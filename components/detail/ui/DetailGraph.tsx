import { HistoricDollar } from '@/classes/historicDollar';
import { TRange } from '@/types/TRange';
import { StyleSheet, View } from 'react-native';
import { Area, CartesianChart, Line } from 'victory-native';
import DetailRanges from './DetailRanges';
import { LinearGradient, useFont, vec } from '@shopify/react-native-skia';
import { Rubik_400Regular } from '@expo-google-fonts/rubik';
import { COLOURS } from '@/constants/constants';
import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dollar';
import { useMemo } from 'react';

export default function DetailGraph({ data, range }: { data: HistoricDollar; range: TRange }) {
  const variation = useMemo(() => data.getVariation(), [data]);
  const historicDollarData = useMemo(() => data.getData(), [data]);

  const font = useFont(Rubik_400Regular, 13);

  const chartDataset = useMemo(() => {
    return historicDollarData.map((day) => ({
      value: day.venta,
      label: range === '1y' || range === '5y' ? new HandleDate(new Date(day.fecha)).getFormattedDateMonthYear() : new HandleDate(new Date(day.fecha)).getFormattedDateDayMonth(),
    }));
  }, [historicDollarData, range]);

  const lineColor = useMemo(() => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative), [variation]);

  const areaColor = useMemo(
    () => (variation > 0 ? [COLOURS.areaPositive, COLOURS.areaPositiveLow] : variation == 0 ? [COLOURS.areaEqual, COLOURS.areaEqualLow] : [COLOURS.areaNegative, COLOURS.areaNegativeLow]),
    [variation]
  );

  const formatYLabel = useMemo(() => (label: number) => `$${Dollar.formatNumber(label, 1, 1)}`, []);

  const renderChart = useMemo(
    () =>
      ({ points, chartBounds }: { points: any; chartBounds: any }) =>
        (
          <>
            <Line points={points.value} color={lineColor} strokeWidth={3} curveType={'cardinal'} animate={{ type: 'timing', duration: 0 }} />
            <Area points={points.value} y0={chartBounds.bottom} curveType={'cardinal'} animate={{ type: 'timing', duration: 0 }} />
            <LinearGradient start={vec(chartBounds.bottom, chartBounds.top)} end={vec(chartBounds.bottom, chartBounds.bottom)} colors={areaColor} />
          </>
        ),
    [lineColor, areaColor]
  );

  return (
    <View style={[styles.container]}>
      <DetailRanges rangeSelected={range} />
      <View style={{ height: 275 }}>
        <CartesianChart
          data={chartDataset}
          xKey="label"
          yKeys={['value']}
          padding={{ top: 10, bottom: 20, left: 20, right: 25 }}
          domainPadding={{ top: 20, bottom: 20, left: 5, right: 5 }}
          xAxis={{
            font,
            labelColor: 'rgba(255,255,255, 0.8)',
            labelOffset: 10,
            tickCount: 5,
            lineWidth: 0,
          }}
          yAxis={[
            {
              font,
              labelColor: 'rgba(255,255,255, 0.8)',
              formatYLabel: formatYLabel,
              tickCount: 6,
              lineWidth: 0,
            },
          ]}
          frame={{ lineWidth: 0 }}
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
    gap: 25,
    width: '100%',
    marginBottom: 10,
  },
});
