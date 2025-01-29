import { IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_SHADOW_COLOR, LINE_COLOR } from '@/constants/constants';
import { IDollar } from '@/interfaces/IDollar';
import { useState } from 'react';
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, TouchableOpacity, View } from 'react-native';

export default function Converter({ data }: { data: IDollar[] }) {
  const [firstCurrency, setFirstCurrency] = useState({
    name: 'ARS',
    currency: '',
    value: 1000,
  });

  const [secondCurrency, setSecondCurrency] = useState({
    name: 'Blue',
    currency: 'USD',
    value: data[2].venta,
  });

  const [unityConversion, setUnityConversion] = useState({
    value: (1 / secondCurrency.value).toFixed(5),
  });

  const handleOnChange = (event: NativeSyntheticEvent<TextInputChangeEventData>, id: string) => {
    const text = event.nativeEvent.text;

    if (id === 'firstCurrency') {
      setFirstCurrency({ ...firstCurrency, value: Number(text) });
    }
  };

  const handleReverse = () => {
    const temp = { ...secondCurrency };
    setSecondCurrency(firstCurrency);
    setFirstCurrency(temp);
  };
  console.log(firstCurrency.value, secondCurrency.value, (firstCurrency.value / secondCurrency.value).toFixed(2));

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>
          {firstCurrency.name} a {secondCurrency.name}
        </Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput id={'firstCurrency'} inputMode={'numeric'} value={String(firstCurrency.value)} style={styles.input} onChange={(e) => handleOnChange(e, 'firstCurrency')}></TextInput>
        <Text style={styles.currencyInsideInput}>{firstCurrency.name}</Text>
      </View>
      <TouchableOpacity style={styles.reverse} onPress={handleReverse}>
        <IconReverse />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          id={'secondCurrency'}
          inputMode={'numeric'}
          value={(firstCurrency.value / secondCurrency.value).toFixed(2)}
          style={styles.input}
          onChange={(e) => handleOnChange(e, 'secondCurrency')}
        ></TextInput>
        <Text style={styles.currencyInsideInput}>{secondCurrency.name}</Text>
      </View>
      <View style={styles.conversionContainer}>
        <Text style={styles.textConversion}>
          1 {firstCurrency.currency} {firstCurrency.name} = {unityConversion.value} {secondCurrency.currency} {secondCurrency.name}
        </Text>
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
