import { HistoricDollar } from '@/classes/historicDollar';
import { TRange } from '@/types/TRange';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Area, CartesianChart, ChartPressState, Line, useChartPressState, useChartTransformState } from 'victory-native';
import { LinearGradient, useFont, vec } from '@shopify/react-native-skia';
import { Rubik_500Medium } from '@expo-google-fonts/rubik';
import { COLOURS } from '@/constants/constants';
import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dollar';
import { memo, useMemo } from 'react';
import ToolTip from './Tooltip';

function DetailGraph({
  data,
  range,
  chartPressState,
  chartPressIsActive,
}: {
  data: HistoricDollar;
  range: TRange;
  chartPressState: ChartPressState<{
    x: number;
    y: {
      value: number;
    };
  }>;
  chartPressIsActive: boolean;
}) {
  const font = useFont(Rubik_500Medium, 13);
  const { width } = useWindowDimensions();

  const variation = useMemo(() => data.getVariation(), [data]);
  const historicDollarData = useMemo(() => data.getData(), [data]);

  const chartDataset = useMemo(() => {
    return historicDollarData.map((day) => ({
      value: day.venta,
      label: new HandleDate(new Date(day.fecha)).getFormattedDateDash(),
    }));
  }, [historicDollarData, range]);

  const lineColor = useMemo(() => (variation > 0 ? COLOURS.positive : variation == 0 ? COLOURS.equal : COLOURS.negative), [variation]);

  const areaColor = useMemo(
    () => (variation > 0 ? [COLOURS.areaPositive, COLOURS.areaPositiveLow] : variation == 0 ? [COLOURS.areaEqual, COLOURS.areaEqualLow] : [COLOURS.areaNegative, COLOURS.areaNegativeLow]),
    [variation]
  );

  const formatYLabel = useMemo(() => (label: number) => `$${Dollar.formatNumber(label, 0, 0)}`, []);

  return (
    <View style={[styles.container, { width: width }]}>
      <CartesianChart
        chartPressState={chartPressState as ChartPressState<any>}
        data={chartDataset}
        xKey="label"
        yKeys={['value']}
        padding={{ left: 0, bottom: 25 }}
        domainPadding={{ left: 1, right: 2, top: 70, bottom: 70 }}
        xAxis={{
          font,
          labelColor: 'rgba(255,255,255, 0.8)',
          labelOffset: 10,
          lineWidth: 0,
          tickCount: 2,
          tickValues: [0, chartDataset.length - 1],
        }}
        yAxis={[
          {
            font,
            labelColor: 'rgba(255,255,255, 0.8)',
            formatYLabel: formatYLabel,
            tickCount: 6,
            lineWidth: 0,
            axisSide: 'right',
            labelPosition: 'inset',
          },
        ]}
        frame={{ lineWidth: 0 }}
      >
        {({ points, chartBounds }: { points: any; chartBounds: any }) => (
          <>
            <Line points={points.value} color={lineColor} strokeWidth={3} curveType={'cardinal'} connectMissingData={true} />
            <Area points={points.value} y0={chartBounds.bottom} curveType={'cardinal'} />
            <LinearGradient start={vec(chartBounds.bottom, chartBounds.top)} end={vec(chartBounds.bottom, chartBounds.bottom)} colors={areaColor} />
            {chartPressIsActive ? <ToolTip x={chartPressState.x.position} y={chartPressState.y.value.position} chartBounds={chartBounds} color={lineColor} /> : null}
          </>
        )}
      </CartesianChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 305,
    // borderBottomWidth: StyleSheet.hairlineWidth,
    // borderColor: 'rgb(65, 70, 73)',
  },
});

export default memo(DetailGraph);
