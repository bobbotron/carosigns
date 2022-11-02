import { StyleSheet, Text, View } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import AppController from "./AppController";

export default function App() {
  
  return (
    <PaperProvider>
      <AppController />
    </PaperProvider>
  );
}


