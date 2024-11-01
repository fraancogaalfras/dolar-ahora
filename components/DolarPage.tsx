import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Idolares } from "@/interfaces/types";
import CardDolar from "./dolar/CardDolar";
import { HandleDate } from "@/utils/date";

export default function DolarPage() {
  const [data, setData] = useState<Idolares[]>([
    {
      moneda: "",
      casa: "",
      nombre: "",
      compra: 0,
      venta: 0,
      fechaActualizacion: "",
    },
  ]);
  const [error, setError] = useState("");

  const getDolarData = async () => {
    try {
      const response = await fetch("https://dolarapi.com/v1/dolares");
      if (!response.ok) {
        setError("Error de conexion");
        return;
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError("Error interno");
    }
  };

  useEffect(() => {
    getDolarData();
  }, []);

  return (
    <View style={styles.main_wrapper}>
      <View style={{ width: "100%", height: "100%" }}>
        <FlatList
          data={data}
          renderItem={({ item }) => <CardDolar data={item} />}
          contentContainerStyle={{ gap: 30 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main_wrapper: {
    padding: 10,
    fontFamily: "Virgil",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#191919",
  },
});
