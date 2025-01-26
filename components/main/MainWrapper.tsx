import React from 'react';
import Header from '../header/Header';
import { StyleSheet, View } from 'react-native';
import { BACKGROUND_COLOR } from '@/constants/constants';

export default function MainWrapper({ children, hideSplashOnLayout }: { children: React.ReactNode; hideSplashOnLayout?: () => void }) {
  return (
    <View style={styles.mainWrapper} onLayout={hideSplashOnLayout ? hideSplashOnLayout : undefined}>
      <Header />
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: BACKGROUND_COLOR,
  },
});
