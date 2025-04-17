// Importação dos módulos necessários do React e React Native
import React from "react"; // Importa o React para criar componentes
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"; // Componentes do React Native
import { useRouter } from "expo-router"; // Para navegação entre telas no Expo
import { Controller, useForm } from "react-hook-form"; // Biblioteca para manipulação de formulários
import * as yup from "yup"; // Biblioteca para validação de dados
import { yupResolver } from "@hookform/resolvers/yup"; // Conector entre react-hook-form e yup para validação

// Definição do esquema de validação com yup
const schema = yup.object().shape({
  nome: yup.string().required("Nome completo é obrigatório"), // Nome é obrigatório
  celular: yup.string().required("Celular é obrigatório"), // Celular é obrigatório
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"), // E-mail deve ser válido e obrigatório
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha obrigatória"), // Senha mínima de 6 caracteres e obrigatória
});

const RegisterScreen = () => {
  // hook useRouter para navegação entre telas
  const router = useRouter();

  // hook useForm para manipulação de formulário com o esquema de validação do yup
  const {
    control,
    handleSubmit,
    formState: { errors }, // Obtém os erros de validação do formulário
  } = useForm({
    resolver: yupResolver(schema), // Conecta o resolver de validação do Yup ao react-hook-form
  });

  // Função que é chamada ao submeter o formulário
  const onSubmit = (data: any) => {
    console.log("Dados do formulário:", data); 
    // Aqui você pode integrar com uma API para cadastrar o usuário
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Informe os dados básicos para criar sua conta</Text>

      {/* Campo para nome completo */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={onChange} // Atualiza o valor do campo
            value={value} // Define o valor do campo
          />
        )}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>} {/* Exibe mensagem de erro, se houver */}

      {/* Campo para celular */}
      <Controller
        control={control}
        name="celular"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Celular"
            keyboardType="phone-pad" // Define o tipo de teclado para número de telefone
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.celular && <Text style={styles.error}>{errors.celular.message}</Text>} {/* Exibe erro para o celular */}

      {/* Campo para e-mail */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address" // Tipo de teclado para e-mail
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>} {/* Exibe erro para o e-mail */}

      {/* Campo para senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry // Torna o campo de senha oculto
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>} {/* Exibe erro para a senha */}

      {/* Botão de cadastro */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Termos de uso */}
      <Text style={styles.termsText}>
        Acessando você concorda com os{" "}
        <Text
          style={styles.link}
          onPress={() => console.log("Abrir termos de uso")} // Aqui você pode abrir os termos de uso
        >
          termos de uso
        </Text>
      </Text>

      {/* Link para login */}
      <Text style={styles.loginText}>
        Já tenho uma conta.{" "}
        <Text
          style={styles.link}
          onPress={() => router.push("/login/SingInProfissional")} // Navega para a tela de login
        >
          Acessar agora!
        </Text>
      </Text>
    </View>
  );
};

// Estilo dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold", // Título em negrito
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666", // Cor de texto mais clara
    marginBottom: 20,
  },
  input: {
    width: "100%", // Largura total do campo
    height: 50,
    backgroundColor: "#f0f7ff", // Cor de fundo do campo
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#0072CE", // Cor de fundo do botão
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 16,
    fontWeight: "bold", // Texto em negrito
  },
  termsText: {
    fontSize: 12,
    color: "#666", // Cor mais clara para o texto dos termos
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "#000", // Cor padrão para o texto de login
    marginTop: 10,
  },
  link: {
    color: "#0072CE", // Cor azul para os links
    fontWeight: "bold",
  },
  error: {
    color: "red", // Cor vermelha para mensagens de erro
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});

export default RegisterScreen; // Exporta o componente Register para ser utilizado em outras partes do aplicativo
