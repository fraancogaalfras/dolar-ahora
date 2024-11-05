import DolarPage from '@/components/DolarPage';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet } from 'react-native';

export default function App() {
  return (
    <LinearGradient colors={['rgb(5 5 5)', 'rgb(20 20 20)']} style={styles.main_wrapper}>
      <DolarPage />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  main_wrapper: {
    paddingVertical: 50,
    padding: 10,
    fontFamily: 'Virgil',
    flex: 1,
    height: '100%',
    width: '100%',
  },
});
