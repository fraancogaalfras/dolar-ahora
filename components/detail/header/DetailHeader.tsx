import { HandleDate } from '@/classes/date';
import { Dollar } from '@/classes/dollar';
import { HistoricDollar } from '@/classes/historicDollar';
import { AnimatedText } from '@/components/animated/AnimatedText';
import { COLOURS, TRANSLATE_HOUSE } from '@/constants/constants';
import { useAnimatedHeader } from '@/hooks/useAnimatedHeader';
import { TCasa } from '@/types/TCasa';
import { StyleSheet, Text, View } from 'react-native';
import { ChartPressState } from 'victory-native';

export default function DetailHeader({
  dollar,
  data,
  chartPressState,
  chartPressIsActive,
}: {
  dollar: TCasa;
  data: HistoricDollar;
  chartPressState: ChartPressState<{
    x: number;
    y: {
      value: number;
    };
  }>;
  chartPressIsActive: boolean;
}) {
  const variationData = data.getVariation();
  const historicDollarData = data.getData();
  const minPriceData = historicDollarData[0].venta;
  const maxPrice = historicDollarData[historicDollarData.length - 1].venta;
  const minDate = new HandleDate(new Date(historicDollarData[0].fecha)).getFormattedDateDash();
  const maxDate = new HandleDate(new Date(historicDollarData[historicDollarData.length - 1].fecha)).getFormattedDateDash();

  const { minPrice, diffPrice, date, variation, animatedStyles } = useAnimatedHeader({
    chartPressState: chartPressState,
    chartPressIsActive: chartPressIsActive,
    maxPrice: maxPrice,
    minPriceData: minPriceData,
    variationData: variationData,
    minDate: minDate,
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title} >Dólar {TRANSLATE_HOUSE[dollar]}</Text>
      <View style={styles.pricesInfoContainer}>
        <View style={styles.historicPricesContainer}>
          <AnimatedText style={[styles.priceInfoText, styles.animatedText]} text={minPrice} />
          <Text style={styles.priceInfoText}>-</Text>
          <Text style={styles.priceInfoText}>${Dollar.formatNumber(maxPrice)}</Text>
        </View>
        <View style={styles.variationContainer}>
          <AnimatedText style={[styles.variationText, styles.animatedText, animatedStyles]} text={variation} />
          <AnimatedText style={[styles.variationText, styles.animatedText, animatedStyles]} text={diffPrice} />
        </View>
      </View>
      <View style={styles.dateInfoContainer}>
        <AnimatedText style={[styles.dateInfoText, styles.animatedText]} text={date} />
        <Text style={styles.dateInfoText}>-</Text>
        <Text style={styles.dateInfoText}>{maxDate}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 5,
    paddingHorizontal: 20,
  },
  title: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 30,
  },
  pricesInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 8,
  },
  historicPricesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  priceInfoText: {
    color: COLOURS.grey,
    fontFamily: 'Rubik',
    fontSize: 21,
  },
  variationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  variationAbsoluteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  variationText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 16,
  },
  dateInfoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  dateInfoText: {
    color: COLOURS.grey,
    fontFamily: 'Rubik',
    fontSize: 14,
    marginTop: 3,
  },
  animatedText: {
    padding: 0,
    margin: 0,
  },
});
