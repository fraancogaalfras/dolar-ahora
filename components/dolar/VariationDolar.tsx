import { StyleSheet, Text } from 'react-native';

export default function VariationDolar({ variation }: { variation: string }) {
  if (parseFloat(variation) < 0) {
    return <Text style={[styles.text, styles.negative]}>{variation}%</Text>;
  }

  if (parseFloat(variation) == 0) {
    return <Text style={[styles.text, styles.equal]}>{variation}%</Text>;
  }

  if (parseFloat(variation) > 0) {
    return <Text style={[styles.text, styles.positive]}>+{variation}%</Text>;
  }
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
