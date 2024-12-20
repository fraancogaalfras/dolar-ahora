import { IconFrancoGalfrascoli } from '@/assets/icons/Icons';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MadeBy() {
  return (
    <View>
      <IconFrancoGalfrascoli />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 13,
  },
});
