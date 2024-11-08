import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Easing } from 'react-native';

const SpinningBills = () => {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const startRotation = () => {
      spinValue.setValue(0);
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 1,
          duration: 3000,
          useNativeDriver: false,
          easing: Easing.linear,
        })
      ).start();
    };

    startRotation();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View style={styles.container}>
      <Animated.Image style={{ transform: [{ rotate: spin }, { scale: 0.2 }] }} source={require('../assets/images/rotate_bills.png')} />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default SpinningBills;
