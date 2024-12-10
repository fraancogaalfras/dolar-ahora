import { StyleSheet, Text, View } from 'react-native';
import { Idolars } from '@/interfaces/types';
import VariationDolar from './VariationDolar';
import GraphDolar from './GraphDolar';
import { memo } from 'react';
import { colours } from '@/app/_layout';
import { HandleDolarData } from '@/classes/dolar';

const CardDolar = ({ data }: { data: Idolars }) => {
  return (
    <View
      key={data.nombre}
      style={[
        styles.mainWrapper,
        parseFloat(data.variacion) > 0 ? { borderColor: colours.positive } : parseFloat(data.variacion) == 0 ? { borderColor: colours.equal } : { borderColor: colours.negative },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.price}>
            <Text style={[styles.text, styles.priceText]}>{HandleDolarData.formatPrice(data.venta)}</Text>
          </View>
          <View style={styles.variation}>
            <VariationDolar variation={data.variacion} />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.graph}>
            <GraphDolar variation={data.variacion} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text, styles.dolarText]}>Dólar {data.nombre.replace('Contado con liquidación', 'CCL').replace('Bolsa', 'MEP')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainWrapper: {
    width: 300,
    borderWidth: 2,
    height: 125,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#080e1a',
    borderRadius: 25,
    shadowColor: '#030712',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 10,
  },
  text: {
    color: 'white',
    fontFamily: 'Rubik',
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    flex: 1,
  },
  footer: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dolarText: {
    fontSize: 19,
  },
  left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  right: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  price: {},
  priceText: {
    fontSize: 28,
  },
  variation: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginTop: -2,
  },
  graph: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default memo(CardDolar);
