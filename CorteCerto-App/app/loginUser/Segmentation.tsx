import React, { useState } from "react"; // Importa o React para criar componentes e o hook useState para gerenciar estados.
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native"; // Importa os componentes básicos do React Native para a interface do usuário.
import { Controller, useForm } from "react-hook-form"; // Importa os hooks e componentes do react-hook-form para controlar o formulário.
import * as yup from "yup"; // Importa a biblioteca yup para validação de esquemas.
import { useRouter } from "expo-router"; // Importação do expo-router
import { yupResolver } from "@hookform/resolvers/yup"; // Importa o conector para integrar o yup com o react-hook-form.

// Definição do tipo FormData para os dados do formulário
type FormData = {
  servico: string; // Nome do serviço
  valor: string; // Valor do serviço
  quantidadeProfissionais: string; // Quantidade de profissionais
};

// Definição do esquema de validação com o yup
const schema = yup.object().shape({
  servico: yup.string().required("Nome do serviço é obrigatório"), // Campo "servico" é obrigatório.
  valor: yup.string().required("Valor do serviço é obrigatório"), // Campo "valor" é obrigatório.
  quantidadeProfissionais: yup.string().required("Selecione uma quantidade de profissionais"), // Campo "quantidadeProfissionais" é obrigatório.
});

const Segmentation = () => {
  // Hook para controlar o formulário com validação usando o yup
  const {
    control,
    handleSubmit, // Função para manipular o envio do formulário
    formState: { errors }, // Obtenção dos erros de validação
  } = useForm<FormData>({
    resolver: yupResolver(schema), // Conecta a validação do yup com o react-hook-form
  });

  const [selected, setSelected] = useState<string | null>(null); // Estado para armazenar a opção de profissionais selecionada.

  // Função chamada ao submeter o formulário, processando os dados coletados.
  const onSubmit = (data: FormData) => {
    console.log("Dados da segmentação:", data); // Aqui, os dados do formulário podem ser enviados ou processados.
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Segmentação do estabelecimento</Text>
      {/* Título da tela */}
      <Text style={styles.subtitle}>Preencha os campos abaixo para seguir com seu cadastro</Text>
      {/* Subtítulo explicativo */}

      {/* Campo para o nome do serviço */}
      <Controller
        control={control}
        name="servico"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Nome do Serviço"
            onChangeText={onChange} // Atualiza o valor do campo
            value={value} // Valor atual do campo
          />
        )}
      />
      {errors.servico && <Text style={styles.error}>{errors.servico.message}</Text>} 
      {/* Exibe a mensagem de erro caso o campo "servico" não passe na validação */}

      {/* Campo para o valor do serviço */}
      <Controller
        control={control}
        name="valor"
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            placeholder="Valor do serviço"
            keyboardType="numeric" // Define o teclado como numérico para este campo
            onChangeText={onChange} // Atualiza o valor do campo
            value={value} // Valor atual do campo
          />
        )}
      />
      {errors.valor && <Text style={styles.error}>{errors.valor.message}</Text>} 
      {/* Exibe a mensagem de erro caso o campo "valor" não passe na validação */}

      {/* Texto explicativo sobre a quantidade de profissionais */}
      <Text style={styles.label}>Quantidade de Profissionais</Text>
      <Text style={styles.description}>Selecione a quantidade de profissionais (incluindo gestores e recepcionistas)</Text>

      {/* Campo para selecionar a quantidade de profissionais */}
      <Controller
        control={control}
        name="quantidadeProfissionais"
        render={({ field: { onChange } }) => (
          <View style={styles.professionalsContainer}>
            {/* Mapeia as opções de quantidade de profissionais */}
            {[
              "1 Profissional",
              "2 a 5 Profissionais",
              "6 a 15 Profissionais",
              "+ 15 Profissionais",
            ].map((option) => (
              <TouchableOpacity
                key={option}
                style={[styles.option, selected === option && styles.selectedOption]} // Aplica a classe "selectedOption" se a opção estiver selecionada
                onPress={() => {
                  setSelected(option); // Atualiza o estado da opção selecionada
                  onChange(option); // Atualiza o valor do campo com a opção selecionada
                }}
              >
                <Text style={styles.optionText}>{option}</Text>
              </TouchableOpacity>
            ))}
          </View>
        )}
      />
      {errors.quantidadeProfissionais && (
        <Text style={styles.error}>{errors.quantidadeProfissionais.message}</Text>
      )}
      {/* Exibe a mensagem de erro caso o campo "quantidadeProfissionais" não passe na validação */}

      {/* Botão para submeter o formulário */}
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