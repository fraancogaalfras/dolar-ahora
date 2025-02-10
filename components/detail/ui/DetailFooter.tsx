import { COLOURS, DOLLAR_DESCRIPTIONS, TRANSLATE_HOUSE_DESCRIPTION } from '@/constants/constants';
import { TCasa } from '@/types/TCasa';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailFooter({ dollar }: { dollar: TCasa }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué es el dólar {TRANSLATE_HOUSE_DESCRIPTION[dollar]}?</Text>
      <Text style={styles.description} textBreakStrategy={'balanced'}>
        {DOLLAR_DESCRIPTIONS[dollar]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 18,
  },
  description: {
    color: COLOURS.grey,
    fontFamily: 'Rubik',
    fontSize: 14,
  },
});
