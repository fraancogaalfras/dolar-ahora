import { StyleSheet, Text, View } from 'react-native';
import { IDollars } from '@/interfaces/types';
import { memo } from 'react';
import { COLOURS, LINE_COLOR } from '@/constants/constants';
import { HandleDolarData } from '@/classes/dolar';
import Variation from './Variation';
import Graph from './Graph';

const Card = ({ data }: { data: IDollars }) => {
  return (
    <View key={data.nombre} style={styles.card}>
      <View style={styles.left}>
        <View style={styles.stockTextContainer}>
          <Text style={[{ color: '#fff' }, styles.stockText]}>{HandleDolarData.formatName(data.nombre)}</Text>
          <Text style={[{ color: '#fff' }, styles.exchangeText]}>BCBA (AR)</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Graph variation={parseFloat(data.variacion)} />
      </View>
      <View style={styles.right}>
        <View style={styles.stockValues}>
          <Text style={[{ color: '#fff' }, styles.priceText]}>${HandleDolarData.formatPrice(data.venta)}</Text>
          <Variation variation={data.variacion} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 315,
    backgroundColor: '#191d27',
    borderRadius: 20,
    height: 100,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: LINE_COLOR,
    boxShadow: '0px 8px 10px rgba(15, 15, 15, 0.8)',
  },
  left: {
    alignItems: 'center',
    flex: 1,
  },
  center: {
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  stockTextContainer: {
    rowGap: 5,
  },
  stockText: {
    fontFamily: 'Rubik',
    fontSize: 19,
  },
  exchangeText: {
    fontFamily: 'Rubik_Light',
    opacity: 0.5,
    fontSize: 12,
  },
  stockValues: {
    rowGap: 3,
    alignItems: 'center',
  },
  priceText: {
    fontFamily: 'Rubik',
    fontSize: 18,
    letterSpacing: 1.1,
  },
});

export default memo(Card);
