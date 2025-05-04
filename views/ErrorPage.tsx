import { MARGIN_TAB_BOTTOM } from '@/constants/constants';
import { IError } from '@/interfaces/IError';
import { router } from 'expo-router';
import { memo } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ErrorPage({ error, customError, retry }: IError) {
  const handleCancel = () => {
    router.navigate('/');
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Ups! Algo salió mal</Text>
      </View>
      <View style={styles.errorContainer}>
        <Text textBreakStrategy={'balanced'} style={styles.errorMessage}>
          {customError ? customError.message : 'Pero tranquilo, no es tu culpa, vuelve a intentar.'}
        </Text>
      </View>
      <TouchableOpacity onPress={retry ? retry : handleCancel}>
        <Text style={{ color: '#fff', fontSize: 20 }}>{retry ? 'Reintentar' : 'Volver'}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 25,
    gap: 10,
    marginBottom: MARGIN_TAB_BOTTOM,
  },
  errorContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
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

export default memo(ErrorPage);
