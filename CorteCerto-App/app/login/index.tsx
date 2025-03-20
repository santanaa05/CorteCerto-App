import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require("../../assets/images/Logo.png")} style={styles.logo} />
      <Text style={styles.title}>Faça login para continuar</Text>
      <Text style={styles.subtitle}>Agende online, confira preços, receba notificações e muito mais...</Text>
      
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar com email ou telefone</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar com o Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Barbeiros e Salões de beleza</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.registerText}>Novo cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 20,
  },
  logo: {
    width: 250,
    height: 250,
    resizeMode: "contain",
    marginBottom: -35,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "gray",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    width: "100%",
    padding: 15,
    backgroundColor: "#1E90FF",
    alignItems: "center",
    borderRadius: 5,
    marginVertical: 5,
  },
  googleButton: {
    backgroundColor: "#1E90FF",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  registerText: {
    marginTop: 15,
    color: "blue",
    textDecorationLine: "underline",
  },
});

export default LoginScreen;
