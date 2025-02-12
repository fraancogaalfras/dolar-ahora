import { Dollar } from '@/classes/dollar';
import { HistoricDollar } from '@/classes/historicDollar';
import Variation from '@/components/dolar/Variation';
import { COLOURS, TRANSLATE_HOUSE } from '@/constants/constants';
import { TCasa } from '@/types/TCasa';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailHeader({ dollar, data }: { dollar: TCasa; data: HistoricDollar }) {
  const variation = data.getVariation();
  const historicDollarData = data.getData();
  const minPrice = historicDollarData[0].venta;
  const maxPrice = historicDollarData[historicDollarData.length - 1].venta;
  const diffPrice = maxPrice - minPrice;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dólar {TRANSLATE_HOUSE[dollar]}</Text>
      <View style={styles.pricesInfoContainer}>
        <Text style={styles.priceInfoText}>
          ${Dollar.formatNumber(minPrice)} - ${Dollar.formatNumber(maxPrice)}
        </Text>
        <View style={styles.variationContainer}>
          <Variation textStyle={styles.variationText} variation={variation} />
          <Text style={[styles.variationText, variation > 0 ? { color: COLOURS.positive } : variation == 0 ? { color: COLOURS.equal } : { color: COLOURS.negative }]}>
            $({diffPrice > 0 && '+'}
            {Dollar.formatNumber(diffPrice)})
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    gap: 8,
    paddingHorizontal: 25,
  },
  title: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 30,
  },
  pricesInfoContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  priceInfoText: {
    color: COLOURS.grey,
    fontFamily: 'Rubik',
    fontSize: 21,
  },
  variationContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  variationText: {
    fontFamily: 'Rubik_500Medium',
    fontSize: 14,
  },
});
