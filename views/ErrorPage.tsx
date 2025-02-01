import { PADDING_TAB_BOTTOM } from '@/constants/constants';
import { Ierror } from '@/interfaces/IError';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function ErrorPage({ error }: { error: Ierror }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ups! Algo salió mal</Text>
      </View>
      <View style={styles.errorContainer}>
        <Text style={styles.errorMessage}>{error.message}</Text>
      </View>
      <TouchableOpacity onPress={error.retry}>
        <Text style={{ color: '#fff', fontSize: 20 }}>Reintentar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingBottom: PADDING_TAB_BOTTOM,
  },
  errorContainer: {
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'Rubik',
    color: '#fff',
  },
  errorMessage: {
    fontSize: 14,
    opacity: 0.7,
    fontFamily: 'Rubik',
    color: '#fff',
    textAlign: 'center',
  },
});
