import { LinearGradient } from "expo-linear-gradient";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity
} from "react-native";

import { Link, router } from "expo-router";

export default function LoginScreen() {
  function handleLogin() {
 

    router.replace("/(tabs)/home");
  }

return (
  <LinearGradient
    colors={["#0f0c29", "#302b63", "#24243e"]}
    style={styles.container}
    >
      <Text style={styles.title}>Welcome Back! 🚀</Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <Link href="/sign">
  <Text style={styles.link}>
    Create Account 
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