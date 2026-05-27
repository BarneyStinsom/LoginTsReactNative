import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";
import { StyleSheet, Text } from "react-native";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#0f0c29", "#302b63", "#24243e"]}
      style={styles.container}
    >
      <Text style={styles.font}>Usuário logado</Text>

      <Link href="/sign">
        <Text style={styles.link}>Criar conta</Text>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  font: {
    fontFamily: "Montserrat",
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  link: {
    marginTop: 20,
    color: "#fff",
    fontFamily: "Montserrat",
     fontSize: 16,
  },
});