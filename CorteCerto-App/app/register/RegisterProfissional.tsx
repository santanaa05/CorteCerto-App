import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import { Controller, useForm, SubmitHandler } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Definindo o esquema de validação com yup
const schema = yup.object().shape({
  nome: yup.string().required("Nome completo é obrigatório"),
  estabelecimento: yup.string().required("Nome do estabelecimento é obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
  senha: yup.string().min(6, "A senha deve ter pelo menos 6 caracteres").required("Senha obrigatória"),
});

// Interface para tipagem dos dados do formulário
interface FormData {
  nome: string;
  estabelecimento: string;
  telefone: string;
  email: string;
  senha: string;
}

const Register: React.FC = () => {
  const router = useRouter();

  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Dados do formulário:", data); // Aqui você pode processar ou enviar os dados para uma API
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Informe os dados básicos para criar sua conta</Text>

      {/* Campo para o nome completo */}
      <Controller
        control={control}
        name="nome"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={onChange} value={value} />
        )}
      />
      {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}

      {/* Campo para nome do estabelecimento */}
      <Controller
        control={control}
        name="estabelecimento"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Nome do seu estabelecimento" onChangeText={onChange} value={value} />
        )}
      />
      {errors.estabelecimento && <Text style={styles.error}>{errors.estabelecimento.message}</Text>}

      {/* Campo para telefone */}
      <Controller
        control={control}
        name="telefone"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Telefone para contato" keyboardType="phone-pad" onChangeText={onChange} value={value} />
        )}
      />
      {errors.telefone && <Text style={styles.error}>{errors.telefone.message}</Text>}

      {/* Campo para email */}
      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Email" keyboardType="email-address" onChangeText={onChange} value={value} />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      {/* Campo para senha */}
      <Controller
        control={control}
        name="senha"
        render={({ field: { onChange, value } }) => (
          <TextInput style={styles.input} placeholder="Senha" secureTextEntry onChangeText={onChange} value={value} />
        )}
      />
      {errors.senha && <Text style={styles.error}>{errors.senha.message}</Text>}

      {/* Botão de cadastro, que envia o formulário */}
      <TouchableOpacity
        style={[styles.button, isSubmitting && styles.buttonDisabled]} // Desabilita o botão durante o envio
        onPress={handleSubmit(onSubmit)}
        disabled={isSubmitting} // Desabilita o botão durante o envio
      >
        <Text style={styles.buttonText}>{isSubmitting ? "Enviando..." : "Cadastrar"}</Text>
      </TouchableOpacity>

      {/* Texto sobre os termos de uso */}
      <Text style={styles.termsText}>
        Acessando você concorda com os{" "}
        <Text style={styles.link} onPress={() => console.log("Abrir termos de uso")}>
          termos de uso
        </Text>
      </Text>

      {/* Texto para login */}
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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#f0f7ff",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: "#00223D",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  buttonDisabled: {
    backgroundColor: "#aaa", // Cor do botão desabilitado
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  termsText: {
    fontSize: 12,
    color: "#666",
    marginTop: 20,
  },
  loginText: {
    fontSize: 14,
    color: "#000",
    marginTop: 10,
  },
  link: {
    color: "#0072CE",
    fontWeight: "bold",
  },
  error: {
    color: "red",
    fontSize: 12,
    alignSelf: "flex-start",
    marginBottom: 5,
  },
});

export default Register;