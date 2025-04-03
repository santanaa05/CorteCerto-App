import React, { useState } from "react"; // Importa o React para criar componentes
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"; // Importação dos componentes do React Native
import { Controller, useForm } from "react-hook-form"; // Importa o Controller e useForm do react-hook-form para gerenciar o formulário
import * as yup from "yup"; // Importa o yup para validação de esquema
import { yupResolver } from "@hookform/resolvers/yup"; // Importa o resolver do yup para integrar com react-hook-form
import { useRouter } from "expo-router"; // Importa o useRouter do expo-router para navegação

// Definindo o tipo de dados que o formulário vai receber (serviço, valor e quantidade de profissionais)
type FormData = {
  servico: string;
  valor: string;
  quantidadeProfissionais: string;
};

// Definindo o esquema de validação com yup
const schema = yup.object().shape({
  servico: yup.string().required("Nome do serviço é obrigatório"), // O nome do serviço é obrigatório
  valor: yup.string().required("Valor do serviço é obrigatório"), // O valor do serviço é obrigatório
  quantidadeProfissionais: yup.string().required("Selecione uma quantidade de profissionais"), // A quantidade de profissionais deve ser selecionada
});

const Segmentation = () => {
  // Inicializa o formulário com useForm e validação do esquema com yupResolver
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema), // Integra a validação do yup com o react-hook-form
  });

  const [selected, setSelected] = useState<string | null>(null); // Estado que armazena a opção selecionada de profissionais
  const router = useRouter(); // Usando o hook useRouter para navegação

  // Função chamada quando o formulário é enviado com sucesso
  const onSubmit = (data: FormData) => {
    console.log("Dados da segmentação:", data); // Exibe os dados do formulário no console
    router.push("../register/CadastroEndereco"); // Navega para a página de CadastroEndereco
  };

  return (
    <View style={styles.container}>
      {/* Título da tela */}
      <Text style={styles.title}>Segmentação do estabelecimento</Text>
      {/* Subtítulo explicativo */}
      <Text style={styles.subtitle}>Preencha os campos abaixo para seguir com seu cadastro</Text>

      {/* Campo para o nome do serviço */}
      <Controller
        control={control} // Controlador de formulário do react-hook-form
        name="servico" // Nome do campo que será controlado
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input} // Estilo do campo de input
            placeholder="Nome do Serviço" // Texto exibido como sugestão
            onChangeText={onChange} // Função chamada ao alterar o valor
            value={value} // Valor atual do campo
          />
        )}
      />
      {errors.servico && <Text style={styles.error}>{errors.servico.message}</Text>} {/* Exibe erro de validação se houver */}

      {/* Campo para o valor do serviço */}
      <Controller
        control={control}
        name="valor"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Valor do serviço"
            keyboardType="numeric" // Tipo de teclado numérico
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors.valor && <Text style={styles.error}>{errors.valor.message}</Text>} {/* Exibe erro de validação se houver */}

      {/* Label e descrição para o campo de quantidade de profissionais */}
      <Text style={styles.label}>Quantidade de Profissionais</Text>
      <Text style={styles.description}>Selecione a quantidade de profissionais (incluindo gestores e recepcionistas)</Text>

      {/* Opções de quantidade de profissionais */}
      <Controller
        control={control}
        name="quantidadeProfissionais"
        render={({ field: { onChange } }) => (
          <View style={styles.professionalsContainer}>
            {/* Mapeando as opções de profissionais e exibindo como botões */}
            {[
              "1 Profissional",
              "2 a 5 Profissionais",
              "6 a 15 Profissionais",
              "+ 15 Profissionais",
            ].map((option) => (
              <TouchableOpacity
                key={option} // Cada opção precisa de uma chave única
                style={[styles.option, selected === option && styles.selectedOption]} // Aplica o estilo de seleção se a opção for escolhida
                onPress={() => {
                  setSelected(option); // Atualiza o estado com a opção selecionada
                  onChange(option); // Atualiza o valor do campo com a opção escolhida
                }}
              >
                <Text style={styles.optionText}>{option}</Text> {/* Exibe o texto da opção */}
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      {errors.quantidadeProfissionais && <Text style={styles.error}>{errors.quantidadeProfissionais.message}</Text>} {/* Exibe erro de validação se houver */}

      {/* Botão para continuar e submeter o formulário */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.buttonText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

// Definição dos estilos utilizando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Preenche toda a tela
    justifyContent: "center", // Centraliza o conteúdo verticalmente
    alignItems: "center", // Centraliza o conteúdo horizontalmente
    padding: 20, // Espaçamento interno da tela
    backgroundColor: "#fff", // Cor de fundo da tela
  },
  title: {
    fontSize: 22, // Tamanho da fonte do título
    fontWeight: "bold", // Texto em negrito
    marginBottom: 5, // Espaçamento abaixo do título
  },
  subtitle: {
    fontSize: 14, // Tamanho da fonte do subtítulo
    color: "#666", // Cor do subtítulo
    marginBottom: 20, // Espaçamento abaixo do subtítulo
  },
  input: {
    width: "100%", // Largura total do campo de input
    height: 50, // Altura do campo
    backgroundColor: "#f0f7ff", // Cor de fundo do campo
    borderRadius: 8, // Bordas arredondadas
    paddingHorizontal: 10, // Espaçamento interno do campo
    marginBottom: 10, // Espaço abaixo do campo
  },
  label: {
    fontSize: 16, // Tamanho da fonte do label
    fontWeight: "bold", // Texto em negrito
    marginBottom: 5, // Espaçamento abaixo do label
  },
  description: {
    fontSize: 12, // Tamanho da fonte da descrição
    color: "#666", // Cor da descrição
    marginBottom: 10, // Espaço abaixo da descrição
    textAlign: "center", // Centraliza o texto
  },
  professionalsContainer: {
    width: "100%", // Largura total do contêiner
    flexDirection: "row", // Exibe as opções em linha
    flexWrap: "wrap", // Permite quebrar a linha quando não há espaço suficiente
    justifyContent: "space-between", // Espaça as opções de maneira uniforme
    marginBottom: 10, // Espaço abaixo do contêiner
  },
  option: {
    width: "48%", // Largura das opções (quase 50% para cada opção)
    height: 50, // Altura das opções
    backgroundColor: "#d3d3d3", // Cor de fundo das opções
    justifyContent: "center", // Centraliza o conteúdo da opção
    alignItems: "center", // Alinha o conteúdo ao centro
    borderRadius: 8, // Bordas arredondadas
    marginBottom: 10, // Espaço abaixo das opções
  },
  selectedOption: {
    backgroundColor: "#00223D", // Cor de fundo para a opção selecionada
  },
  optionText: {
    color: "#000", // Cor do texto da opção
    fontWeight: "bold", // Texto em negrito
  },
  button: {
    width: "100%", // Largura total do botão
    height: 50, // Altura do botão
    backgroundColor: "#00223D", // Cor de fundo do botão
    justifyContent: "center", // Centraliza o conteúdo dentro do botão
    alignItems: "center", // Alinha o conteúdo ao centro
    borderRadius: 8, // Bordas arredondadas
    marginTop: 10, // Espaço acima do botão
  },
  buttonText: {
    color: "#fff", // Cor do texto do botão
    fontSize: 16, // Tamanho da fonte do botão
    fontWeight: "bold", // Texto em negrito
  },
  error: {
    color: "red", // Cor do texto de erro
    fontSize: 12, // Tamanho da fonte do erro
    alignSelf: "flex-start", // Alinha o erro à esquerda
    marginBottom: 5, // Espaço abaixo do erro
  },
});

export default Segmentation; // Exporta o componente Segmentation para ser utilizado em outras partes do aplicativo.