import { StyleSheet, View } from 'react-native';
import DetailHeader from './ui/DetailHeader';
import DetailGraph from './ui/DetailGraph';
import DetailFooter from './ui/DetailFooter';
import { handleDetailData } from '@/services/getDollarDetail';
import { TRange } from '@/types/TRange';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';

export default function DetailComponent({ data, dollar, range }: { data: IHistoricDollar[]; dollar: TCasa; range: TRange }) {
  const historicDollarData = handleDetailData(data, range);

  return (
    <View style={styles.container}>
      <DetailHeader dollar={dollar} data={historicDollarData} />
      <DetailGraph data={historicDollarData} range={range} />
      <DetailFooter dollar={dollar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 18,
    flex: 1,
    gap: 20,
  },
});
