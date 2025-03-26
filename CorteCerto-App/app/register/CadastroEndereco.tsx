import React from "react"; // Importa o React para criar componentes
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";  // Importação dos componentes do React Native
import { useForm, Controller } from "react-hook-form";  // Importação do React Hook Form para gerenciamento de formulários
import * as yup from "yup";  // Importação do Yup para validação de esquema
import { yupResolver } from "@hookform/resolvers/yup";  // Resolver de Yup para integração com o React Hook Form
import { useRouter } from "expo-router";  // Importação do useRouter para navegação entre telas

// Definição do esquema de validação usando o Yup
const schema = yup.object().shape({
  país: yup.string().required("O campo País é obrigatório"),  // Validação do campo 'país'
  cep: yup.string().required("O campo CEP é obrigatório"),  // Validação do campo 'cep'
  estado: yup.string().required("O campo Estado é obrigatório"),  // Validação do campo 'estado'
  cidade: yup.string().required("O campo Cidade é obrigatório"),  // Validação do campo 'cidade'
  bairro: yup.string().required("O campo Bairro é obrigatório"),  // Validação do campo 'bairro'
  rua: yup.string().required("O campo Rua é obrigatório"),  // Validação do campo 'rua'
  numero: yup.string().required("O campo Número é obrigatório"),  // Validação do campo 'numero'
});

// Definição do tipo de dados do formulário
type FormData = {
  país: string;
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  rua: string;
  numero: string;
};

export default function CadastroEndereco() {
  // Definindo o hook useForm para gerenciar o formulário e integrando com o esquema de validação
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),  // Integração com o esquema de validação do Yup
  });

  const router = useRouter();  // Definindo o router para navegação

  // Função chamada ao submeter o formulário com dados válidos
  const onSubmit = (data: FormData) => {
    console.log(data);  // Exibe os dados do formulário no console
    router.push("../comanda/ComandasScreen");  // Redireciona para a tela ComandasScreen
  };

  return (
    <View style={styles.container}>  {/* Container principal da tela */}
      <Text style={styles.title}>Informe o endereço do seu estabelecimento</Text>  {/* Título da tela */}
      <Text style={styles.subtitle}>Preencha os campos abaixo para seguir com seu cadastro</Text>  {/* Subtítulo informativo */}
      
      {/* Mapeia os campos do formulário */}
      {[
        { name: "país", placeholder: "País" },
        { name: "cep", placeholder: "CEP" },
        { name: "estado", placeholder: "Estado" },
        { name: "cidade", placeholder: "Cidade" },
        { name: "bairro", placeholder: "Bairro" },
        { name: "rua", placeholder: "Rua" },
        { name: "numero", placeholder: "Número" },
      ].map(({ name, placeholder }) => (
        <View key={name}>  {/* Para cada campo de entrada, criamos um campo de formulário */}
          <Controller
            control={control}  // Integra o formulário com o react-hook-form
            name={name as keyof FormData}  // Nome do campo de acordo com a definição no tipo FormData
            render={({ field: { onChange, value } }) => (
              <TextInput
                style={styles.input}  // Estilo do campo de entrada
                placeholder={placeholder}  // Texto de sugestão (placeholder) do campo
                onChangeText={onChange}  // Função que será chamada ao alterar o valor
                value={value}  // Valor do campo
              />
            )}
          />
          {/* Exibe a mensagem de erro caso o campo não seja preenchido corretamente */}
          {errors[name as keyof FormData] && <Text style={styles.error}>{errors[name as keyof FormData]?.message}</Text>}
        </View>
      ))}
      
      {/* Botão para enviar o formulário */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Continuar</Text>  {/* Texto do botão */}
      </TouchableOpacity>
    </View>
  );
}

// Definição do estilo dos componentes
const styles = StyleSheet.create({
  container: {
    flex: 1,  // Preenche a tela inteira
    padding: 20,  // Adiciona espaço ao redor dos elementos
    backgroundColor: "#fff",  // Cor de fundo do container
  },
  title: {
    fontSize: 18,  // Tamanho da fonte do título
    fontWeight: "bold",  // Deixa o título em negrito
    marginBottom: 5,  // Espaço abaixo do título
  },
  subtitle: {
    fontSize: 14,  // Tamanho da fonte do subtítulo
    marginBottom: 20,  // Espaço abaixo do subtítulo
    color: "gray",  // Cor cinza para o subtítulo
  },
  input: {
    height: 50,  // Altura do campo de entrada
    borderColor: "#ccc",  // Cor da borda do campo de entrada
    borderWidth: 1,  // Largura da borda
    borderRadius: 5,  // Borda arredondada
    marginBottom: 10,  // Espaço abaixo do campo de entrada
    paddingLeft: 10,  // Espaço à esquerda do texto dentro do campo de entrada
  },
  error: {
    color: "red",  // Cor vermelha para mensagens de erro
    marginBottom: 10,  // Espaço abaixo da mensagem de erro
  },
  button: {
    backgroundColor: "#001F3F",  // Cor de fundo do botão
    padding: 15,  // Espaço interno do botão
    borderRadius: 5,  // Borda arredondada do botão
    alignItems: "center",  // Centraliza o texto no botão
  },
  buttonText: {
    color: "#fff",  // Cor do texto do botão
    fontWeight: "bold",  // Deixa o texto do botão em negrito
  },
});
