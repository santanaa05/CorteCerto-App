import React from "react"; // Importa o React para criar componentes
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native"; // Importa os componentes nativos do React Native
import { Stack } from "expo-router"; // Importa o Stack do expo-router para navegação entre telas
import { useRouter } from "expo-router"; // Importação do expo-router
import { Ionicons } from "@expo/vector-icons"; // Importa os ícones da biblioteca Ionicons

// Componente funcional para a tela de login
export default function SignInUser() {
  const router = useRouter(); // Importação do expo-router

  return (
    <View style={styles.container}>
      {/* Configuração do cabeçalho da página dentro do Stack Navigator */}
      <Stack.Screen options={{ title: "Acessar", headerTintColor: "#A6A6A6" }} />

      {/* Logo da aplicação */}
      <Image source={require("../../assets/images/Logo.png")} style={styles.logo} />

      {/* Campo de entrada para email ou telefone */}
      <View style={styles.inputContainer}>
        <Ionicons name="person" size={20} color="#A6A6A6" style={styles.icon} />
        <TextInput placeholder="Email ou telefone" style={styles.input} />
      </View>

      {/* Campo de entrada para senha */}
      <View style={styles.inputContainer}>
        <Ionicons name="lock-closed" size={20} color="#A6A6A6" style={styles.icon} />
        <TextInput placeholder="Senha" secureTextEntry style={styles.input} />
      </View>

      {/* Botão de acesso */}
      <TouchableOpacity style={styles.button} onPress={() => router.push("/home/MinhasReservas")}>
        <Text style={styles.buttonText}>Acessar</Text>
      </TouchableOpacity>

      {/* Link para recuperação de senha */}
      <TouchableOpacity onPress={() => router.push("/login/RecuperarSenha")}>
        <Text style={styles.linkText}>Recuperar senha</Text>
      </TouchableOpacity>
    </View>
  );
}

// Estilização dos componentes da tela de login
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa toda a altura da tela
    alignItems: "center", // Centraliza os elementos na horizontal
    justifyContent: "center", // Centraliza os elementos na vertical
    backgroundColor: "#FFF", // Define a cor de fundo da tela como branca
    paddingHorizontal: 20, // Adiciona espaçamento lateral
  },
  logo: {
    width: 240, // Define a largura da imagem do logo
    height: 240, // Define a altura da imagem do logo
    resizeMode: "contain", // Mantém a proporção da imagem sem distorcer
    marginBottom: 20, // Adiciona um espaçamento abaixo do logo
  },
  inputContainer: {
    flexDirection: "row", // Organiza os elementos em linha (ícone + input)
    alignItems: "center", // Alinha os itens ao centro
    backgroundColor: "#C5DDF5", // Define um fundo cinza claro para os inputs
    paddingHorizontal: 10, // Adiciona espaçamento interno horizontal
    borderRadius: 5, // Arredonda as bordas do campo de entrada
    width: "100%", // Ocupa toda a largura disponível
    marginBottom: 15, // Adiciona espaçamento abaixo do input
  },
  icon: {
    marginRight: 15, // Adiciona espaçamento entre o ícone e o campo de entrada
  },
  input: {
    flex: 1, // O input ocupa todo o espaço disponível dentro do container
    height: 50, // Define a altura do campo de entrada
  },
  button: {
    width: "100%", // O botão ocupa toda a largura disponível
    padding: 12, // Adiciona espaçamento interno
    backgroundColor: "#007BFF", // Define a cor azul para o botão
    alignItems: "center", // Centraliza o texto dentro do botão
    borderRadius: 5, // Arredonda as bordas do botão
    marginTop: 10, // Adiciona espaçamento acima do botão
  },
  buttonText: {
    color: "#FFF", // Define a cor do texto como branco
    fontSize: 16, // Define o tamanho da fonte
    fontWeight: "bold", // Deixa o texto em negrito
  },
  linkText: {
    marginTop: 75, // Adiciona um espaçamento acima do link
    color: "#007BFF", // Define a cor azul para o link
  },
});