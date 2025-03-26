import React from "react";  // Importa o React, necessário para criar componentes React.
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";  // Importa componentes básicos do React Native.
import { useRouter } from "expo-router";  // Importa hook de navegação do expo-router.
import { Controller, useForm, SubmitHandler } from "react-hook-form";  // Importa as funções do react-hook-form para gerenciar o estado do formulário.
import * as yup from "yup";  // Importa o Yup para validação de esquema.
import { yupResolver } from "@hookform/resolvers/yup";  // Resolve a validação com Yup integrado ao react-hook-form.


// Definindo o esquema de validação com Yup para garantir que os campos do formulário sejam preenchidos corretamente
const schema = yup.object().shape({
  nome: yup.string().required("Nome completo é obrigatório"),  // O campo "nome" é obrigatório
  estabelecimento: yup.string().required("Nome do estabelecimento é obrigatório"),  // O campo "estabelecimento" é obrigatório
  telefone: yup.string().required("Telefone é obrigatório"),  // O campo "telefone" é obrigatório
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),  // O campo "email" é obrigatório e deve ser um e-mail válido
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha obrigatória"),  // A senha deve ter no mínimo 6 caracteres e é obrigatória
});

// Interface para definir a estrutura dos dados que serão submetidos
interface FormData {
  nome: string;
  estabelecimento: string;
  telefone: string;
  email: string;
  senha: string;
}

const Register: React.FC = () => {
  const router = useRouter();  // Hook para navegação entre telas

  // Usando o useForm para criar e gerenciar o formulário. O resolver conecta o react-hook-form ao schema de validação do Yup
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),  // Integra a validação do Yup ao react-hook-form
  });

  // Função chamada quando o formulário for submetido com dados válidos
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Dados do formulário:", data);  // Aqui você pode processar ou enviar os dados para uma API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>  {/* Título da tela */}
      <Text style={styles.subtitle}>Informe os dados básicos para criar sua conta</Text>  {/* Subtítulo informativo */}

      {/* Campo para o nome completo */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome Completo"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}  {/* Exibe erro de validação se houver */}

      {/* Campo para nome do estabelecimento */}
      <Controller
        control={control}
        name="estabelecimento"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome do seu estabelecimento"
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.estabelecimento && <Text style={styles.error}>{errors.estabelecimento.message}</Text>}  {/* Exibe erro de validação se houver */}

      {/* Campo para telefone */}
      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Telefone para contato"
            keyboardType="phone-pad"  // Definindo o tipo de teclado para números de telefone
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.telefone && <Text style={styles.error}>{errors.telefone.message}</Text>}  {/* Exibe erro de validação se houver */}

      {/* Campo para e-mail */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"  // Definindo o tipo de teclado para e-mails
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}  {/* Exibe erro de validação se houver */}

      {/* Campo para senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry  // Torna o texto da senha oculto
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}  {/* Exibe erro de validação se houver */}

      {/* Botão de cadastro */}
      <TouchableOpacity
        style={[styles.button, isSubmitting && styles.buttonDisabled]}  // Adiciona a classe 'buttonDisabled' quando o formulário está sendo enviado
        onPress={handleSubmit(onSubmit)}  // Chama a função onSubmit ao pressionar o botão
        disabled={isSubmitting}  // Desabilita o botão durante o envio do formulário
      >
        <Text style={styles.buttonText}>{isSubmitting ? "Enviando..." : "Cadastrar"}</Text>  {/* Exibe "Enviando..." quando o formulário está sendo submetido */}
      </TouchableOpacity>

      {/* Texto sobre os termos de uso */}
      <Text style={styles.termsText}>
        Acessando você concorda com os{" "}
        <Text style={styles.link} onPress={() => console.log("Abrir termos de uso")}>
          termos de uso
        </Text>
      </Text>

      {/* Texto para acessar a tela de login */}
      <Text style={styles.loginText}>
        Já tenho uma conta.{" "}
        <Text style={styles.link} onPress={() => router.push("/login/SingInProfissional")}>
          Acessar agora!
        </Text>
      </Text>
    </View>
  );
};

// Estilos para os componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Faz com que o container ocupe toda a tela
    justifyContent: "center",  // Centraliza os itens verticalmente
    alignItems: "center",  // Centraliza os itens horizontalmente
    padding: 20,  // Adiciona padding ao redor da tela
    backgroundColor: "#fff",  // Cor de fundo do container
  },
  title: {
    fontSize: 22,  // Tamanho da fonte do título
    fontWeight: "bold",  // Título em negrito
    marginBottom: 5,  // Espaço abaixo do título
  },
  subtitle: {
    fontSize: 14,  // Tamanho da fonte do subtítulo
    color: "#666",  // Cor do texto do subtítulo
    marginBottom: 20,  // Espaço abaixo do subtítulo
  },
  input: {
    width: "100%",  // O campo ocupa toda a largura disponível
    height: 50,  // Altura do campo
    backgroundColor: "#f0f7ff",  // Cor de fundo do campo de texto
    borderRadius: 8,  // Borda arredondada
    paddingHorizontal: 10,  // Adiciona espaço interno à esquerda e à direita
    marginBottom: 10,  // Espaço abaixo do campo de texto
  },
  button: {
    width: "100%",  // O botão ocupa toda a largura disponível
    height: 50,  // Altura do botão
    backgroundColor: "#00223D",  // Cor de fundo do botão
    justifyContent: "center",  // Centraliza o texto no botão
    alignItems: "center",  // Centraliza o texto no botão
    borderRadius: 8,  // Borda arredondada do botão
    marginTop: 10,  // Espaço acima do botão
  },
  buttonDisabled: {
    backgroundColor: "#aaa",  // Cor do botão quando desabilitado
  },
  buttonText: {
    color: "#fff",  // Cor do texto no botão
    fontSize: 16,  // Tamanho da fonte do texto do botão
    fontWeight: "bold",  // Texto em negrito
  },
  termsText: {
    fontSize: 12,  // Tamanho da fonte do texto dos termos
    color: "#666",  // Cor do texto dos termos
    marginTop: 20,  // Espaço acima do texto
  },
  loginText: {
    fontSize: 14,  // Tamanho da fonte do texto de login
    color: "#000",  // Cor do texto de login
    marginTop: 10,  // Espaço acima do texto de login
  },
  link: {
    color: "#0072CE",  // Cor do link
    fontWeight: "bold",  // Link em negrito
  },
  error: {
    color: "red",  // Cor da mensagem de erro
    fontSize: 12,  // Tamanho da fonte da mensagem de erro
    alignSelf: "flex-start",  // Alinha a mensagem de erro à esquerda
    marginBottom: 5,  // Espaço abaixo da mensagem de erro
  },
});

export default Register;  // Exporta o componente para ser utilizado em outras partes do projeto.