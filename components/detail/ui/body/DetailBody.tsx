import { HistoricDollar } from '@/classes/historicDollar';
import { TRange } from '@/types/TRange';
import React from 'react';
import DetailGraph from './DetailGraph';
import DetailRanges from './DetailRanges';
import { StyleSheet, View } from 'react-native';
import { CARD_BOX_SHADOW } from '@/constants/constants';

export default function DetailBody({ data, range }: { data: HistoricDollar; range: TRange }) {
  return (
    <View style={[styles.container]}>
      <DetailRanges rangeSelected={range} />
      <DetailGraph data={data} range={range} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    gap: 0,
    backgroundColor: 'rgb(9, 10, 15)',
    boxShadow: CARD_BOX_SHADOW,
  },
});
