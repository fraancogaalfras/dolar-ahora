import DolarPage from "@/components/DolarPage";
import { useFonts } from "expo-font";

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Virgil: require("../assets/fonts/Virgil.ttf"),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return <DolarPage />;
}
