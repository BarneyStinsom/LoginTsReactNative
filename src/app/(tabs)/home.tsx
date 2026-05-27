import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.font}>Usuário logado</Text>
       <Link href="/sign">
  <Text style={styles.link}>
    Criar conta
  </Text>
</Link>
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  font: {
    fontFamily: "Montserrat",
    fontSize: 24,
     fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    textAlign: "center",
  },
});