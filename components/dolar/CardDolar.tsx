import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Idolares } from "@/interfaces/types";

const CardDolar = ({ data }: { data: Idolares }) => {
  return (
    <View key={data.nombre} style={styles.main_wrapper}>
      <View style={styles.header}>
        <View style={styles.left}>
          <View style={styles.price}>
            <Text style={[styles.text, styles.price_text]}>{data.venta}</Text>
          </View>
          <View style={styles.variation}>
            <Text style={[styles.text, styles.variation_text]}>+0.35%</Text>
          </View>
        </View>
        <View style={styles.right}>
          <View style={styles.graph}>
            <Text style={styles.text}>Graph</Text>
          </View>
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={[styles.text, styles.dolar_text_name]}>
          Dolar {data.nombre.replace("Contado con liquidación", "CCL")}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main_wrapper: {
    width: "80%",
    borderWidth: 2,
    borderColor: "#3a3a3a",
    height: 125,
    alignItems: "center",
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor: "#2d2d2d",
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.6,
    shadowRadius: 10,
    elevation: 5,
  },
  text: {
    color: "white",
    fontFamily: "Virgil",
  },
  header: {
    paddingTop: 10,
    paddingHorizontal: 10,
    flexDirection: "row",
    height: "100%",
    width: "100%",
    flex: 1,
  },
  footer: {
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  dolar_text_name: {
    fontSize: 20,
  },
  left: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    rowGap: 2,
    height: "100%",
  },
  right: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  price: {},
  price_text: {
    fontSize: 28,
  },
  variation: {
    backgroundColor: "#2f9e44",
    padding: 2,
    paddingHorizontal: 5,
    borderRadius: 25,
  },
  variation_text: {
    fontSize: 10,
    color: "rgba(255,255,255,0.8)",
  },
  graph: {},
});

export default CardDolar;
