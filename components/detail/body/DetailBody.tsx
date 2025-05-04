import { HistoricDollar } from '@/classes/historicDollar';
import { TRange } from '@/types/TRange';
import React, { memo } from 'react';
import DetailGraph from './DetailGraph';
import DetailRanges from './DetailRanges';
import { StyleSheet, View } from 'react-native';
import { CARD_BACKGROUND_COLOR } from '@/constants/constants';
import { ChartPressState } from 'victory-native';

function DetailBody({
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
  return (
    <View style={[styles.container]}>
      <DetailRanges rangeSelected={range} />
      <DetailGraph data={data} range={range} chartPressState={chartPressState} chartPressIsActive={chartPressIsActive} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 0,
    backgroundColor: CARD_BACKGROUND_COLOR,
    boxShadow: '0px 2px 20px rgba(41, 41, 41, 0.2)',
  },
});

export default memo(DetailBody);
