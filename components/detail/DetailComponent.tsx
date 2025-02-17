import { ScrollView, StyleSheet, View } from 'react-native';
import DetailHeader from './ui/header/DetailHeader';
import DetailFooter from './ui/footer/DetailFooter';
import { handleDetailData } from '@/services/getDollarDetail';
import { TRange } from '@/types/TRange';
import { IHistoricDollar } from '@/interfaces/IHistoricDollar';
import { TCasa } from '@/types/TCasa';
import DetailBody from './ui/body/DetailBody';

export default function DetailComponent({ data, dollar, range }: { data: IHistoricDollar[]; dollar: TCasa; range: TRange }) {
  const historicDollarData = handleDetailData(data, range);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <DetailHeader dollar={dollar} data={historicDollarData} />
      <DetailBody data={historicDollarData} range={range} />
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
