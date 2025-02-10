import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { memo, useCallback } from 'react';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_BOX_SHADOW, CARD_HEIGHT, CARD_WIDTH, LINE_COLOR } from '@/constants/constants';
import Variation from './Variation';
import Graph from './Graph';
import { Dollar } from '@/classes/dollar';
import { router } from 'expo-router';

const Card = ({ nombre = '', casa = '', venta = 0, variacion = 0 }) => {
  const handleOnPress = useCallback(() => {
    router.navigate({
      pathname: '/(tabs)/detail/[dollar]',
      params: { dollar: casa },
    });
  }, []);

  return (
    <TouchableOpacity key={nombre} style={styles.card} onPress={handleOnPress}>
      <View style={styles.left}>
        <View style={styles.stockTextContainer}>
          <Text style={styles.stockText}>{nombre}</Text>
          <Text style={styles.exchangeText}>BCBA (AR)</Text>
        </View>
      </View>
      <View style={styles.center}>
        <Graph variation={variacion} />
      </View>
      <View style={styles.right}>
        <View style={styles.stockValues}>
          <Text style={styles.priceText}>${Dollar.formatNumber(venta)}</Text>
          <Variation variation={variacion} />
        </View>
      </View>
    </TouchableOpacity>
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
    boxShadow: CARD_BOX_SHADOW,
  },
  left: {
    alignItems: 'center',
    flex: 1.5,
  },
  center: {
    flex: 1,
  },
  right: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1.5,
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
