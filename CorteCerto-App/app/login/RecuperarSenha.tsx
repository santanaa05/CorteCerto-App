// Importação dos módulos necessários do React e React Native
import React from 'react'; // Importa o React, necessário para criar componentes
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native'; // Importa componentes do React Native para construir a UI
import { useRouter } from "expo-router"; // Importação do expo-router
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones da biblioteca Ionicons

// Definindo o componente funcional RecuperarSenha com tipagem TypeScript (React.FC)
const RecuperarSenha: React.FC = () => {
    const router = useRouter(); // Importação do expo-router   
    
  return (
    // O componente View é usado para criar o layout, o contêiner principal da tela
    <View style={styles.container}>
      {/* Exibe a imagem do logo da aplicação */}
      <Image source={require('../../assets/images/Logo.png')} style={styles.logo} />
      
      {/* Título principal da tela */}
      <Text style={styles.title}>Recupere sua senha</Text>
      
      {/* Campo de entrada de e-mail */}
      <View style={styles.inputContainer}>
        <Ionicons name="mail" size={20} color="gray" style={styles.icon} />
        <TextInput placeholder="Email" style={styles.input} keyboardType="email-address" />
      </View>
      
      {/* Botão para recuperar a senha */}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Recuperar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definindo os estilos para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    alignItems: 'center', // Centraliza os itens horizontalmente
    justifyContent: 'center', // Centraliza os itens verticalmente
    backgroundColor: 'white', // Cor de fundo da tela
    paddingHorizontal: 20, // Espaçamento nas laterais
  },
  backIcon: {
    position: 'absolute', // Posição absoluta no layout
    top: 40, // Distância do topo
    left: 20, // Distância da esquerda
  },
  logo: {
    width: 240, // Define a largura da imagem do logo
    height: 240, // Define a altura da imagem do logo
    resizeMode: "contain", // Mantém a proporção da imagem sem distorcer
    marginBottom: 20, // Adiciona um espaçamento abaixo do logo
  },
  title: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Peso da fonte (negrito)
    marginBottom: 20, // Espaçamento inferior
  },
  inputContainer: {
    flexDirection: 'row', // Alinha os elementos na mesma linha
    alignItems: 'center', // Centraliza verticalmente
    backgroundColor: '#F0F4F8', // Cor de fundo do campo de entrada
    width: '100%', // Largura total
    padding: 10, // Espaçamento interno
    borderRadius: 5, // Bordas arredondadas
    marginBottom: 20, // Espaçamento inferior
  },
  icon: {
    marginRight: 10, // Espaço entre o ícone e o campo de entrada
  },
  input: {
    flex: 1, // Ocupa o espaço restante dentro do container
  },
  button: {
    backgroundColor: '#007BFF', // Cor de fundo do botão
    width: '100%', // Largura total
    padding: 15, // Espaçamento interno
    borderRadius: 5, // Bordas arredondadas
    alignItems: 'center', // Centraliza o texto
  },
  buttonText: {
    color: 'white', // Cor do texto
    fontSize: 16, // Tamanho da fonte
    fontWeight: 'bold', // Texto em negrito
  },
});

// Exporta o componente RecuperarSenha como padrão para ser utilizado em outras partes do aplicativo
export default RecuperarSenha;