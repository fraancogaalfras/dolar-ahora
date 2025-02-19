import { ScrollView, StyleSheet } from 'react-native';
import DetailHeader from './header/DetailHeader';
import DetailFooter from './footer/DetailFooter';
import { handleDetailData } from '@/services/getDollarDetail';
import { TRange } from '@/types/TRange';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';
import DetailBody from './body/DetailBody';
import { useChartPressState } from 'victory-native';

export default function DetailComponent({ data, dollar, range }: { data: IHistoricDollar[]; dollar: TCasa; range: TRange }) {
  const historicDollarData = handleDetailData(data, range);
  const { state: chartPressState, isActive: chartPressIsActive } = useChartPressState({ x: 0, y: { value: 0 } });

  return (
    <ScrollView contentContainerStyle={styles.container} scrollEnabled={!chartPressIsActive}>
      <DetailHeader dollar={dollar} data={historicDollarData} chartPressState={chartPressState} chartPressIsActive={chartPressIsActive} />
      <DetailBody data={historicDollarData} range={range} chartPressState={chartPressState} chartPressIsActive={chartPressIsActive} />
      <DetailFooter dollar={dollar} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingHorizontal: 0,
    gap: 20,
  },
});
