import { StyleSheet, Text, View } from 'react-native';
import { IDollars } from '@/interfaces/types';
import { memo } from 'react';
import { COLOURS } from '@/constants/constants';
import { HandleDolarData } from '@/classes/dolar';
import Variation from './Variation';
import Graph from './Graph';

const Card = ({ data }: { data: IDollars }) => {
  return (
    <View
      key={data.nombre}
      style={[styles.mainWrapper, parseFloat(data.variacion) > 0 ? { borderColor: COLOURS.positive } : parseFloat(data.variacion) == 0 ? { borderColor: COLOURS.equal } : { borderColor: COLOURS.negative }]}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <View>
            <Text style={[styles.text, styles.priceText]}>{HandleDolarData.formatPrice(data.venta)}</Text>
          </View>
          <View style={styles.variation}>
            <Variation variation={data.variacion} />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.graph}>
            <Graph variation={data.variacion} />
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
    width: 285,
    borderWidth: 0.5,
    height: 125,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgba(17,24,39,0.5)',
    borderRadius: 25,
    marginBottom: 30,
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
    fontSize: 18,
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
  priceText: {
    fontSize: 26,
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

export default memo(Card);
