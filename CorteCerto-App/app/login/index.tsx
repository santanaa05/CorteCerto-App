import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context"; // <- Importação da SafeArea

const LoginScreen: React.FC = () => {
  const router = useRouter();

  return (
    // SafeAreaView envolvendo toda a tela
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Exibe a imagem do logo da aplicação */}
        <Image
          source={require("../../assets/images/Logo.png")}
          style={styles.logo}
        />

        {/* Título principal da tela */}
        <Text style={styles.title}>Faça login para continuar</Text>

        {/* Subtítulo explicando os benefícios do login */}
        <Text style={styles.subtitle}>
          Agende online, confira preços, receba notificações e muito mais...
        </Text>

        {/* Botão para continuar com e-mail ou telefone */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/login/SignInUser")}
        >
          <Text style={styles.buttonText}>Continuar com email ou telefone</Text>
        </TouchableOpacity>

        {/* Botão para continuar com o Google */}
        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={() => {}}
        >
          <Text style={styles.buttonText}>Continuar com o Google</Text>
        </TouchableOpacity>

        {/* Botão para acessar serviços para barbeiros e salões de beleza */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("../registerUser/RegisterProfissional")}
        >
          <Text style={styles.buttonText}>Barbeiros e Salões de beleza</Text>
        </TouchableOpacity>

        {/* Botão para registrar um novo cadastro */}
        <TouchableOpacity
          onPress={() => router.push("../registerUser/RegisterUsers")}
        >
          <Text style={styles.registerText}>Novo cadastro</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#fff", // Cor de fundo da área segura
  },
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 25,
  },
  logo: {
    width: 235,
    height: 235,
    resizeMode: "contain",
    marginBottom: -45,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#00223D",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 25,
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    padding: 11,
    backgroundColor: "#00223D",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 16,
  },
  googleButton: {
    backgroundColor: "#00223D",
  },
  buttonText: {
    color: "#A6A6A6",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 10,
    color: "#00223D",
  },
});

export default LoginScreen;
