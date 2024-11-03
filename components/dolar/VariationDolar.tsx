import { StyleSheet, Text, View } from 'react-native';

export default function VariationDolar({ variation }: { variation: string }) {
  console.log(variation);
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
    color: 'rgb(0 255 49)',
  },
  equal: {
    color: '#ccc',
  },
  positive: {
    color: 'rgb(255 0 0)',
  },
});
