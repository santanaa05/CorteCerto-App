// Importação dos módulos necessários do React e React Native
import React from "react"; // Importa o React, necessário para criar componentes
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native"; // Importa componentes do React Native para construir a UI

// Definindo o componente funcional LoginScreen com tipagem TypeScript (React.FC)
const LoginScreen: React.FC = () => {
  return (
    // O componente View é usado para criar o layout, o contêiner principal da tela
    <View style={styles.container}>
      {/* Exibe a imagem do logo da aplicação */}
      <Image source={require("../../assets/images/Logo.png")} style={styles.logo} />
      
      {/* Título principal da tela */}
      <Text style={styles.title}>Faça login para continuar</Text>
      
      {/* Subtítulo explicando os benefícios do login */}
      <Text style={styles.subtitle}>Agende online, confira preços, receba notificações e muito mais...</Text>
      
      {/* Botão para continuar com e-mail ou telefone */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar com email ou telefone</Text>
      </TouchableOpacity>
      
      {/* Botão para continuar com o Google, com estilo diferente (cor) */}
      <TouchableOpacity style={[styles.button, styles.googleButton]} onPress={() => {}}>
        <Text style={styles.buttonText}>Continuar com o Google</Text>
      </TouchableOpacity>
      
      {/* Botão para acessar serviços para barbeiros e salões de beleza */}
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Barbeiros e Salões de beleza</Text>
      </TouchableOpacity>
      
      {/* Botão para registrar um novo cadastro */}
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.registerText}>Novo cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definindo os estilos para os elementos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    justifyContent: "center", // Centraliza os itens verticalmente
    alignItems: "center", // Centraliza os itens horizontalmente
    backgroundColor: "#fff", // Cor de fundo da tela
    paddingHorizontal: 20, // Padding nas laterais
  },
  logo: {
    width: 250, // Largura da imagem
    height: 250, // Altura da imagem
    resizeMode: "contain", // Ajusta a imagem dentro do container sem distorcer
    marginBottom: -35, // Desloca a imagem para cima para alinhar melhor o layout
  },
  title: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: "bold", // Peso da fonte (negrito)
    marginBottom: 15, // Margem inferior
    textAlign: "center", // Alinha o texto no centro
  },
  subtitle: {
    fontSize: 14, // Tamanho da fonte
    color: "gray", // Cor do texto
    textAlign: "center", // Alinha o texto no centro
    marginBottom: 20, // Margem inferior
  },
  button: {
    width: "100%", // O botão ocupa toda a largura disponível
    padding: 15, // Padding interno do botão
    backgroundColor: "#00223D", // Cor de fundo padrão do botão
    alignItems: "center", // Centraliza o texto dentro do botão
    borderRadius: 5, // Bordas arredondadas
    marginVertical: 5, // Espaço entre os botões
  },
  googleButton: {
    backgroundColor: "#db4437", // Cor de fundo específica para o botão do Google
  },
  buttonText: {
    color: "white", // Cor do texto do botão
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Texto em negrito
  },
  registerText: {
    marginTop: 15, // Margem superior para separar do conteúdo anterior
    color: "blue", // Cor do texto
    textDecorationLine: "underline", // Deixa o texto sublinhado (para indicar um link)
  },
});

// Exporta o componente LoginScreen como padrão para ser utilizado em outras partes do aplicativo
export default LoginScreen;