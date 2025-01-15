import { StyleSheet, Text } from 'react-native';
import { colours } from '@/app/_layout';

export default function VariationDolar({ variation }: { variation: string }) {
  return (
    <Text style={[styles.text, parseFloat(variation) > 0 ? { color: colours.positive } : parseFloat(variation) == 0 ? { color: colours.equal } : { color: colours.negative }]}>
      {parseFloat(variation) >= 0 && '+'}
      {variation}%
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    fontFamily: 'Rubik',
  },
});
