import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Link, router } from "expo-router";

export default function SignupScreen() {
  function handleSignup() {
    router.replace("/(tabs)/home");
  }

  return (
  <LinearGradient
    colors={["#0f0c29", "#302b63", "#24243e"]}
    style={styles.container}
    >
      <Text style={styles.title}>Welcome! 🛸</Text>
      <TextInput
        placeholder="Nome"
        placeholderTextColor="#fff"
        style={styles.input}
      />

      <TextInput
        placeholder="Email"
        placeholderTextColor="#fff"
        style={styles.input}
      />

      <TextInput
        placeholder="Senha"
        placeholderTextColor="#fff"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleSignup}
      >
        <Text style={styles.buttonText}>
          Registrar
        </Text>
      </TouchableOpacity>
      <Link href="/login">
        <Text style={styles.link}>
          Já tem uma conta? Faça login
        </Text>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 30,
  },

  title: {
    color: "#fff",
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    fontFamily: "Montserrat",
  },

  input: {
    color: "fff",
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    color: "#fff",
    backgroundColor: "#5933ff",
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  link: {
    color: "#fff",
    marginTop: 20,
    textAlign: "center",
    fontFamily: "Montserrat"
  },
});