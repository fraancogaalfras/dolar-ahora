import { StyleSheet, Text, View } from 'react-native';
import { Idolars } from '@/interfaces/types';
import VariationDolar from './VariationDolar';
import GraphDolar from './GraphDolar';
import { memo } from 'react';
import { colours } from '@/app/_layout';

const CardDolar = ({ data }: { data: Idolars }) => {
  return (
    <View
      key={data.nombre}
      style={[
        styles.main_wrapper,
        parseFloat(data.variacion) > 0 ? { borderColor: colours.positive } : parseFloat(data.variacion) == 0 ? { borderColor: colours.equal } : { borderColor: colours.negative },
      ]}
    >
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.price}>
            <Text style={[styles.text, styles.price_text]}>{data.venta}</Text>
          </View>
          <View style={styles.variation}>
            <VariationDolar variation={data.variacion} />
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.graph}>
            <GraphDolar data={data} />
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text, styles.dolar_text_name]}>Dolar {data.nombre.replace('Contado con liquidación', 'CCL').replace('Bolsa', 'MEP')}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    width: 300,
    borderWidth: 4,
    height: 125,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'rgb(10 10 10)',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: 'white',
    fontFamily: 'Virgil',
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
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dolar_text_name: {
    fontSize: 20,
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
  price_text: {
    fontSize: 28,
  },
  variation: {
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 25,
    marginTop: -10,
  },
  graph: {
    flex: 1,
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});

export default memo(CardDolar);
