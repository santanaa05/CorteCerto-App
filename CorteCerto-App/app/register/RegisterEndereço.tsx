import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useForm, Controller } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Stack } from "expo-router"; // Importa o Stack do expo-router para navegação entre telas
import { Ionicons } from "@expo/vector-icons"; // Importa os ícones da biblioteca Ionicons
import { useRouter } from "expo-router"; // Importação do expo-router

const schema = yup.object().shape({
    
  patio: yup.string().required("O campo Pátio é obrigatório"),
  cep: yup.string().required("O campo CEP é obrigatório"),
  estado: yup.string().required("O campo Estado é obrigatório"),
  cidade: yup.string().required("O campo Cidade é obrigatório"),
  bairro: yup.string().required("O campo Bairro é obrigatório"),
  rua: yup.string().required("O campo Rua é obrigatório"),
  numero: yup.string().required("O campo Número é obrigatório"),
});

type FormData = {
  patio: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
};

export default function CadastroEndereco() {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    console.log(data);
  };
  const router = useRouter(); // Importação do expo-router
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe o endereço do seu estabelecimento</Text>
      <Text style={styles.subtitle}>Preencha os campos abaixo para seguir com seu cadastro</Text>
      
      {[
        { name: "patio", placeholder: "Pátio" },
        { name: "cep", placeholder: "CEP" },
        { name: "estado", placeholder: "Estado" },
        { name: "cidade", placeholder: "Cidade" },
        { name: "bairro", placeholder: "Bairro" },
        { name: "rua", placeholder: "Rua" },
        { name: "numero", placeholder: "Número" },
      ].map(({ name, placeholder }) => (
        <View key={name}>
          <Controller
            control={control}
            name={name as keyof FormData}
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}
                placeholder={placeholder}
                onChangeText={onChange}
                value={value}
              />
            )}
          />
          {errors[name as keyof FormData] && <Text style={styles.error}>{errors[name as keyof FormData]?.message}</Text>}
        </View>
      ))}
      
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "gray",
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#001F3F",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});

//Cadastro de Endereço