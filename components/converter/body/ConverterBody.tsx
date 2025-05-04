import { IconReverse } from '@/assets/icons/Icons';
import { CARD_BACKGROUND_COLOR, CARD_BORDER_RADIUS, CARD_BOX_SHADOW, LINE_COLOR } from '@/constants/constants';
import { ICurrency } from '@/interfaces/ICurrency';
import React, { memo } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

function ConverterBody({
  usdCurrency,
  arsCurrency,
  isReverse,
  handleUsdChange,
  handleArsChange,
  handleReverse,
}: {
  usdCurrency: ICurrency;
  arsCurrency: ICurrency;
  isReverse: boolean;
  handleUsdChange: (value: string) => void;
  handleArsChange: (value: string) => void;
  handleReverse: () => void;
}) {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          inputMode="numeric"
          value={(isReverse ? usdCurrency.amount : arsCurrency.amount).toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
          onChangeText={isReverse ? handleUsdChange : handleArsChange}
        />
        <Text style={styles.currencyInsideInput}>{isReverse ? `${usdCurrency.name}` : `${arsCurrency.name}`}</Text>
      </View>
      <TouchableOpacity accessible={true} accessibilityLabel={'Cambiar orden de conversion'} onPress={handleReverse}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    gap: 20,
  },
  inputContainer: {
    width: 300,
    backgroundColor: CARD_BACKGROUND_COLOR,
    borderRadius: CARD_BORDER_RADIUS,
    height: 60,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    boxShadow: CARD_BOX_SHADOW,
    paddingLeft: 15,
  },
  input: {
    fontFamily: 'Rubik',
    fontSize: 16,
    color: '#fff',
    width: '70%',
    height: '100%',
  },
  currencyInsideInput: {
    fontFamily: 'Rubik_500Medium',
    color: '#fff',
    fontSize: 18,
    width: '30%',
    textAlign: 'center',
  },
});

export default memo(ConverterBody);
