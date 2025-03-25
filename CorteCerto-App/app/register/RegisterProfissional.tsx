import React from "react"; // Importa o React para criar componentes
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"; // Importa os componentes básicos do React Native para a interface do usuário.
import { useRouter } from "expo-router"; // Importa o hook useRouter do expo-router para navegação entre telas.
import { Controller, useForm, SubmitHandler } from "react-hook-form"; // Importa os hooks e componentes do react-hook-form para controle de formulários.
import * as yup from "yup"; // Importa a biblioteca yup para validação de esquemas.
import { yupResolver } from "@hookform/resolvers/yup"; // Importa o conector para resolver o esquema de validação com react-hook-form.

// Definição do esquema de validação com yup
const schema = yup.object().shape({
  nome: yup.string().required("Nome completo é obrigatório"), // Validação para o campo "nome", que é obrigatório.
  estabelecimento: yup.string().required("Nome do estabelecimento é obrigatório"), // Validação para o campo "estabelecimento", que é obrigatório.
  telefone: yup.string().required("Telefone é obrigatório"), // Validação para o campo "telefone", que é obrigatório.
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"), // Validação para o campo "email", que deve ser um e-mail válido e obrigatório.
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha obrigatória"), // Validação para o campo "senha", que deve ter no mínimo 6 caracteres e ser obrigatória.
});

// Interface para definir a tipagem dos dados do formulário.
interface FormData {
  nome: string;
  estabelecimento: string;
  telefone: string;
  email: string;
  senha: string;
}

const Register: React.FC = () => {
  const router = useRouter(); // Inicializa o hook de navegação para trocar de telas.

  // Inicializa o hook useForm com o esquema de validação do yup.
  const {
    control,
    handleSubmit,
    formState: { errors }, // Obtém os erros de validação do formulário.
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Conecta o esquema de validação do yup ao react-hook-form.
  });

  // Função chamada ao submeter o formulário, com os dados validados.
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Dados do formulário:", data); // Aqui você pode processar ou enviar os dados para uma API.
  };

  return (
    <View style={styles.container}> 
      {/* Contêiner principal da tela, com estilo para centralizar os elementos */}
      <Text style={styles.title}>Cadastre-se</Text>
      {/* Título da tela de cadastro */}
      <Text style={styles.subtitle}>Informe os dados básicos para criar sua conta</Text>
      {/* Subtítulo explicativo */}

      {/* Campo para o nome completo */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={onChange} value={value} />
        )}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>} {/* Exibe erro de validação, se houver */}

      {/* Campo para nome do estabelecimento */}
      <Controller
        control={control}
        name="estabelecimento"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Nome do seu estabelecimento" onChangeText={onChange} value={value} />
        )}
      />
      {errors.estabelecimento && <Text style={styles.error}>{errors.estabelecimento.message}</Text>} {/* Exibe erro de validação */}

      {/* Campo para telefone */}
      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Telefone para contato" keyboardType="phone-pad" onChangeText={onChange} value={value} />
        )}
      />
      {errors.telefone && <Text style={styles.error}>{errors.telefone.message}</Text>} {/* Exibe erro de validação */}

      {/* Campo para email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={onChange} value={value} />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>} {/* Exibe erro de validação */}

      {/* Campo para senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={onChange} value={value} />
        )}
      />
      {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>} {/* Exibe erro de validação */}

      {/* Botão de cadastro, que envia o formulário */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      {/* Texto sobre os termos de uso */}
      <Text style={styles.termsText}>
        Acessando você concorda com os{" "}
        <Text style={styles.link} onPress={() => console.log("Abrir termos de uso")}>
          termos de uso
        </Text>
      </Text>

      {/* Link para acessar a tela de login */}
      <Text style={styles.loginText}>
        Já tenho uma conta.{" "}
        <Text style={styles.link} onPress={() => router.push("/register/RegisterProfissional")}>
          Acessar agora!
        </Text>
      </Text>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    padding: 20, // Adiciona um padding em volta dos elementos
    backgroundColor: "#fff", // Cor de fundo da tela
  },
  title: {
    fontSize: 22, // Tamanho da fonte do título
    fontWeight: "bold", // Deixa o título em negrito
    marginBottom: 5, // Espaço abaixo do título
  },
  subtitle: {
    fontSize: 14, // Tamanho da fonte do subtítulo
    color: "#666", // Cor do subtítulo
    marginBottom: 20, // Espaço abaixo do subtítulo
  },
  input: {
    width: "100%", // Largura total do campo de input
    height: 50, // Altura do campo de input
    backgroundColor: "#f0f7ff", // Cor de fundo do input
    borderRadius: 8, // Bordas arredondadas
    paddingHorizontal: 10, // Espaçamento interno do campo
    marginBottom: 10, // Espaço entre os campos
  },
  button: {
    width: "100%", // Largura total do botão
    height: 50, // Altura do botão
    backgroundColor: "#00223D", // Cor de fundo do botão
    justifyContent: "center", // Centraliza o conteúdo dentro do botão
    alignItems: "center", // Alinha o conteúdo do botão ao centro
    borderRadius: 8, // Bordas arredondadas
    marginTop: 10, // Espaço acima do botão
  },
  buttonText: {
    color: "#fff", // Cor do texto no botão
    fontSize: 16, // Tamanho da fonte
    fontWeight: "bold", // Texto em negrito
  },
  termsText: {
    fontSize: 12, // Tamanho da fonte do texto dos termos
    color: "#666", // Cor do texto dos termos
    marginTop: 20, // Espaço acima do texto
  },
  loginText: {
    fontSize: 14, // Tamanho da fonte do texto de login
    color: "#000", // Cor do texto de login
    marginTop: 10, // Espaço acima do texto
  },
  link: {
    color: "#0072CE", // Cor do link
    fontWeight: "bold", // Texto em negrito para o link
  },
  error: {
    color: "red", // Cor do texto de erro
    fontSize: 12, // Tamanho da fonte do erro
    alignSelf: "flex-start", // Alinha o texto de erro à esquerda
    marginBottom: 5, // Espaço abaixo do erro
  },
});

export default Register; // Exporta o componente Register para ser utilizado em outras partes do aplicativo.
