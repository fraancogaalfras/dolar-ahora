import { StyleSheet, Text } from 'react-native';
import { colours } from '@/app/_layout';

export default function VariationDolar({ variation }: { variation: string }) {
  return <Text style={[styles.text, parseFloat(variation) > 0 ? { color: colours.positive } : parseFloat(variation) == 0 ? { color: colours.equal } : { color: colours.negative }]}>{variation}%</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 10,
    fontFamily: 'Virgil',
    fontWeight: 200,
  },
  negative: {
    color: 'rgba(0, 255, 49, 0.7)',
  },
  equal: {
    color: '#fff',
  },
  positive: {
    color: 'rgba(255, 0, 33, 0.7)',
  },
});
