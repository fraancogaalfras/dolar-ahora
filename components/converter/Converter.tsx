import { IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_SHADOW_COLOR, LINE_COLOR } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Converter({ data }: { data: IDollar[] }) {
  const [firstCurrency, setFirstCurrency] = useState('ARS');
  const [secondCurrency, setSecondCurrency] = useState('Blue');
  const [valueFirstCurrency, setValueFirstCurrency] = useState(1000);
  const [valueSecondCurrency, setValueSecondCurrency] = useState(data[1].venta);

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>
          {firstCurrency} a {secondCurrency}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={String(valueFirstCurrency)}></TextInput>
        <Text style={styles.currencyInsideInput}>{firstCurrency}</Text>
      </View>
      <View style={styles.reverse}>
        <IconReverse />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} value={String(valueSecondCurrency)}></TextInput>
        <Text style={styles.currencyInsideInput}>{secondCurrency}</Text>
      </View>
      <View style={styles.conversionContainer}>
        <Text style={styles.textConversion}>1 ARS = 1230 USD BLUE</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    gap: 20,
  },
  title: {
    fontFamily: 'Rubik',
    color: '#fff',
    fontSize: 23,
  },
  inputContainer: {
    width: 300,
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: CARD_BORDER_RADIUS,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderColor: LINE_COLOR,
    boxShadow: '0px 8px 10px ' + CARD_SHADOW_COLOR,
  },

  input: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#fff',
    paddingHorizontal: 15,
    width: '80%',
  },
  currencyInsideInput: {
    fontFamily: 'Rubik',
    color: '#fff',
    fontSize: 14,
    width: '20%',
    textAlign: 'center',
  },
  conversionContainer: {
    alignItems: 'center',
    width: 300,
  },
  textConversion: {
    fontFamily: 'Rubik',
    color: '#fff',
    opacity: 0.5,
  },
  reverse: {},
});
