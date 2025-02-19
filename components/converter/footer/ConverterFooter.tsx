import { IDollar } from '@/interfaces/IDollar';
import { StyleSheet, Text, View } from 'react-native';

export default function ConverterFooter({ data, selectedIndex, usdCurrencyName }: { data: IDollar[]; selectedIndex: number; usdCurrencyName: string }) {
  return (
    <View style={styles.conversionContainer}>
      <Text style={styles.textConversion}>
        1 USD {usdCurrencyName} = {data[selectedIndex].venta.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })} ARS
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  conversionContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  textConversion: {
    fontFamily: 'Rubik',
    color: '#fff',
    opacity: 0.5,
  },
});
