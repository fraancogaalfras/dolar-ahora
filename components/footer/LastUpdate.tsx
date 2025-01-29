import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

export default function LastUpdate() {
  const { lastUpdate = 'Cargando información...' } = useLocalSearchParams<{ lastUpdate: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Última actualización:{'\n'}
        <Text style={{ fontSize: 14 }}>{lastUpdate}</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingBottom: 20,
  },
  text: {
    color: '#9f9f9f',
    fontFamily: 'Rubik',
    fontSize: 12,
    textAlign: 'center',
    lineHeight: 20,
  },
});
