import { IconCoffee, IconGithub } from '@/assets/icons/Icons';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Links() {
  return (
    <View style={styles.container}>
      <IconCoffee />
      <IconGithub />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
});
