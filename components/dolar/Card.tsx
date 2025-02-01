import { StyleSheet, Text, View } from 'react-native';
import { memo } from 'react';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_HEIGHT, CARD_SHADOW_COLOR, CARD_WIDTH, LINE_COLOR } from '@/constants/constants';
import Variation from './Variation';
import Graph from './Graph';
import { IDollar } from '@/interfaces/IDollar';

const Card = ({ data }: { data: IDollar }) => {
  return (
    <View key={data.nombre} style={styles.card}>
      <View style={styles.left}>
        <View style={styles.stockTextContainer}>
          <Text style={styles.stockText}>{data.nombre}</Text>
          <Text style={styles.exchangeText}>BCBA (AR)</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Graph variation={parseFloat(data.variacion)} />
      </View>
      <View style={styles.right}>
        <View style={styles.stockValues}>
          <Text style={styles.priceText}>${data.venta.toLocaleString('de-DE', { minimumFractionDigits: 1, maximumFractionDigits: 1 })}</Text>
          <Variation variation={data.variacion} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: CARD_BORDER_RADIUS,
    height: CARD_HEIGHT,
    paddingHorizontal: 5,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 30,
    borderWidth: 1,
    borderColor: LINE_COLOR,
    boxShadow: '0px 8px 10px ' + CARD_SHADOW_COLOR,
  },
  left: {
    alignItems: 'center',
    flex: 1.5,
    // borderWidth: 1,
    // borderColor: 'red',
  },
  center: {
    flex: 1,
    // borderWidth: 1,
    // borderColor: 'yellow',
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
    // borderWidth: 1,
    // borderColor: 'green',
  },
  stockTextContainer: {
    alignItems: 'center',
    rowGap: 3,
  },
  stockText: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 20,
  },
  exchangeText: {
    color: '#fff',
    fontFamily: 'Rubik_Light',
    opacity: 0.5,
    fontSize: 12,
  },
  stockValues: {
    rowGap: 3,
    alignItems: 'center',
  },
  priceText: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 18,
    letterSpacing: 1.1,
  },
});

export default memo(Card);
