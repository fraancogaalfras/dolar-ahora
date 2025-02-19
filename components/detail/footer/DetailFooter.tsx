import { COLOURS, DOLLAR_DESCRIPTIONS, DOLLAR_MEANING, TRANSLATE_HOUSE_DESCRIPTION } from '@/constants/constants';
import { TCasa } from '@/types/TCasa';
import { StyleSheet, Text, View } from 'react-native';

export default function DetailFooter({ dollar }: { dollar: TCasa }) {
  const translated_house = TRANSLATE_HOUSE_DESCRIPTION[dollar];
  const dollar_meaning = DOLLAR_MEANING[dollar];
  const dollar_descriptions = DOLLAR_DESCRIPTIONS[dollar];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¿Qué es el dólar {translated_house}?</Text>
      <Text style={styles.description} textBreakStrategy={'highQuality'}>
        {dollar_meaning}
      </Text>
      <Text style={styles.title}>Detalles: </Text>
      {dollar_descriptions.map((description, index) => (
        <Text key={index} style={styles.description} textBreakStrategy={'highQuality'}>
          &#8226; {description}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  title: {
    color: '#fff',
    fontFamily: 'Rubik_500Medium',
    fontSize: 22,
  },
  description: {
    color: COLOURS.grey,
    fontFamily: 'Rubik',
    fontSize: 15,
    lineHeight: 20,
  },
});
