import { StyleSheet, Text, View } from "react-native";

export default function Error({ error }: { error: String }) {
  return (
    <View style={styles.error_wrapper}>
      <Text>{error}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error_wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
