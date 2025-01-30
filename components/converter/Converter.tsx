import { IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_SHADOW_COLOR, LINE_COLOR } from '@/constants/constants';
import { ICurrency } from '@/interfaces/ICurrency';
import { IDollar } from '@/interfaces/IDollar';
import { useState } from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Converter({ data }: { data: IDollar[] }) {
  const [arsCurrency, setArsCurrency] = useState<ICurrency>({
    amount: 1,
    name: 'ARS',
  });
  const [usdCurrency, setUsdCurrency] = useState<ICurrency>({
    amount: data[1].venta || 0,
    name: 'USD ' + data[1].nombre || '',
  });
  const [exchangeRate, setExchangeRate] = useState(1 / usdCurrency.amount);
  const [isReverse, setIsReverse] = useState(false);

  const handleArsChange = (value: string) => {
    if (value == '') {
      value = '0';
    }
    value = value.replace(/\D/g, '');
    setArsCurrency({
      ...arsCurrency,
      amount: parseFloat(value),
    });
    setUsdCurrency({
      ...usdCurrency,
      amount: parseFloat(value) * exchangeRate,
    });
  };

  const handleUsdChange = (value: string) => {
    if (value == '') {
      value = '0';
    }
    value = value.replace(/\D/g, '');
    setUsdCurrency({
      ...usdCurrency,
      amount: parseFloat(value),
    });
    setArsCurrency({
      ...arsCurrency,
      amount: parseFloat(value) / exchangeRate,
    });
  };

  const handleReverse = () => {
    setIsReverse(!isReverse);
  };

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>{isReverse ? `${usdCurrency.name} a ${arsCurrency.name}` : `${arsCurrency.name} a ${usdCurrency.name}`}</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          value={(isReverse ? usdCurrency.amount : arsCurrency.amount).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          onChangeText={isReverse ? handleUsdChange : handleArsChange}
        />
        <Text style={styles.currencyInsideInput}>{isReverse ? `${usdCurrency.name}` : `${arsCurrency.name}`}</Text>
      </View>
      <TouchableOpacity style={styles.reverse} onPress={handleReverse}>
        <IconReverse />
      </TouchableOpacity>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          value={(isReverse ? arsCurrency.amount : usdCurrency.amount).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          onChangeText={isReverse ? handleArsChange : handleUsdChange}
        />
        <Text style={styles.currencyInsideInput}>{isReverse ? `${arsCurrency.name}` : `${usdCurrency.name}`}</Text>
      </View>
      {/* <View style={styles.conversionContainer}>
        <Text style={styles.textConversion}>
          1 {firstCurrency.currency} {firstCurrency.name} = {unityConversion.value} {secondCurrency.currency} {secondCurrency.name}
        </Text>
      </View> */}
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
    paddingLeft: 15,
  },
  input: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#fff',
    width: '70%',
  },
  currencyInsideInput: {
    fontFamily: 'Rubik',
    color: '#fff',
    fontSize: 14,
    width: '30%',
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
