// Importação de dependências necessárias
import React, { useState } from "react";  // Importa o React e o hook useState
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";  // Importa componentes do React Native
import DateTimePicker from "@react-native-community/datetimepicker";  // Importa o componente para seleção de data
import { Ionicons } from "@expo/vector-icons";  // Importa os ícones do Expo

// Define a interface para descrever a estrutura de uma Comanda
interface Comanda {
  id: string;       // ID único da comanda
  nome: string;     // Nome do cliente
  servico: string;  // Serviço realizado (ex: Corte, Barba, etc.)
  preco: number;    // Preço do serviço
  data: string;     // Data do serviço
  horario: string;  // Horário do serviço
}

// Função principal da tela 'ComandasScreen'
export default function ComandasScreen() {
  // Definição dos estados usando o hook useState
  const [startDate, setStartDate] = useState(new Date());  // Data de início do filtro (inicializa com a data atual)
  const [endDate, setEndDate] = useState(new Date());      // Data de fim do filtro (inicializa com a data atual)
  const [showStartPicker, setShowStartPicker] = useState(false);  // Controla a visibilidade do seletor de data de início
  const [showEndPicker, setShowEndPicker] = useState(false);      // Controla a visibilidade do seletor de data de fim
  const [filteredComandas, setFilteredComandas] = useState<Comanda[]>([]);  // Estado para armazenar as comandas filtradas

  // Lista fictícia de comandas para exibir
  const comandas: Comanda[] = [
    { id: "1", nome: "Heber Stein Mazutti", servico: "Corte", preco: 35.0, data: "2024-12-01", horario: "11:30" },
    { id: "2", nome: "João Silva", servico: "Barba", preco: 20.0, data: "2024-11-27", horario: "14:00" },
  ];

  // Função para filtrar as comandas com base nas datas de início e fim selecionadas
  const handleFilter = () => {
    // Filtra as comandas pela data, verificando se a data da comanda está dentro do intervalo especificado
    const filtered = comandas.filter((comanda) => {
      const comandaDate = new Date(comanda.data);  // Converte a string de data para objeto Date
      return comandaDate >= startDate && comandaDate <= endDate;  // Verifica se a data da comanda está no intervalo
    });
    setFilteredComandas(filtered);  // Atualiza o estado com as comandas filtradas
  };

  // Componente para o menu inferior fixo (com os ícones de navegação)
  const BottomNav = () => {
    return (
      <View style={styles.bottomNav}>  {/* Contêiner do menu inferior */}
        {/* Botão de ícone de "newspaper-outline" */}
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="newspaper-outline" size={22} color="white" />
        </TouchableOpacity>
        {/* Botão de ícone de "list-outline" */}
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="list-outline" size={24} color="gray" />
        </TouchableOpacity>
        {/* Botão de ícone de "person-outline" */}
        <TouchableOpacity style={styles.navButton}>
          <Ionicons name="person-outline" size={24} color="gray" />
        </TouchableOpacity>
      </View>
    );
  };

  // Retorna o JSX que representa a tela de Comandas
  return (
    <View style={styles.container}>  {/* Contêiner principal da tela */}
      {/* Título da tela */}
      <Text style={styles.title}>Comandas</Text>

      {/* Seção de Filtro de Data */}
      <View style={styles.filterContainer}>
        <Text>Escolha um período que deseja filtrar</Text>  {/* Texto explicativo */}
        <View style={styles.datePickerContainer}>  {/* Contêiner para as seleções de data */}
          {/* Botão para selecionar a data de início */}
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <Text style={styles.dateText}>{startDate.toLocaleDateString()}</Text>  {/* Exibe a data de início */}
          </TouchableOpacity>
          <Text>—</Text>
          {/* Botão para selecionar a data de fim */}
          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <Text style={styles.dateText}>{endDate.toLocaleDateString()}</Text>  {/* Exibe a data de fim */}
          </TouchableOpacity>
          {/* Botão de busca que aplica o filtro */}
          <TouchableOpacity style={styles.searchButton} onPress={handleFilter}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {/* Exibe o DateTimePicker se o estado showStartPicker for verdadeiro */}
        {showStartPicker && (
          <DateTimePicker
            value={startDate}  // Data de início selecionada
            mode="date"  // Define o modo como "date"
            display="default"  // Exibe o seletor de data padrão
            onChange={(_, date) => {  // Atualiza a data ao selecionar uma nova
              setShowStartPicker(false);
              if (date) setStartDate(date);  // Atualiza o estado com a nova data de início
            }}
          />
        )}

        {/* Exibe o DateTimePicker se o estado showEndPicker for verdadeiro */}
        {showEndPicker && (
          <DateTimePicker
            value={endDate}  // Data de fim selecionada
            mode="date"  // Define o modo como "date"
            display="default"  // Exibe o seletor de data padrão
            onChange={(_, date) => {  // Atualiza a data ao selecionar uma nova
              setShowEndPicker(false);
              if (date) setEndDate(date);  // Atualiza o estado com a nova data de fim
            }}
          />
        )}
      </View>

      {/* Exibe o título da lista de comandas */}
      <Text style={styles.subTitle}>Comandas Abertas</Text>
      {/* Exibe a lista de comandas usando o FlatList */}
      <FlatList
        data={filteredComandas.length > 0 ? filteredComandas : comandas}  // Exibe as comandas filtradas, ou todas se não houver filtro
        keyExtractor={(item) => item.id}  // A chave única para cada item na lista
        renderItem={({ item }) => (
          <View style={styles.card}>  {/* Estilo do cartão de cada comanda */}
            {/* Nome do cliente */}
            <Text style={styles.clientName}>{item.nome}</Text>
            {/* Serviço e preço */}
            <Text style={styles.service}>
              {item.servico} R$ {item.preco.toFixed(2)}  {/* Exibe o preço formatado com 2 casas decimais */}
            </Text>
            {/* Data da comanda */}
            <Text style={styles.date}>{item.data}</Text>
            {/* Horário da comanda */}
            <Text style={styles.time}>⏰ {item.horario}</Text>
            {/* Botão para finalizar a comanda */}
            <TouchableOpacity style={styles.finalizeButton}>
              <Text style={styles.finalizeButtonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        )}
      />

      {/* Exibe o menu inferior fixo */}
      <BottomNav />
    </View>
  );
}

// Estilos para a tela
// Definindo os estilos da aplicação com StyleSheet.create
const styles = StyleSheet.create({
  // Estilo para o contêiner principal da tela
  container: {
    flex: 1,  // Ocupa toda a altura da tela
    padding: 20,  // Adiciona um padding de 20 em todos os lados
    backgroundColor: "#fff",  // Cor de fundo branca para o contêiner
    paddingBottom: 60,  // Espaço extra na parte inferior para o menu inferior
  },

  // Estilo para o título da tela
  title: {
    fontSize: 18,  // Tamanho da fonte 18
    fontWeight: "bold",  // Torna o título em negrito
    marginBottom: 10,  // Adiciona uma margem inferior de 10 pixels
  },

  // Estilo para o container do filtro de data
  filterContainer: {
    backgroundColor: "#f0f0f0",  // Cor de fundo cinza claro para a área do filtro
    padding: 10,  // Padding de 10 ao redor do conteúdo
    borderRadius: 5,  // Bordas arredondadas de 5 pixels
  },

  // Estilo para o contêiner dos seletores de data (início e fim)
  datePickerContainer: {
    flexDirection: "row",  // Organiza os itens em uma linha (horizontalmente)
    alignItems: "center",  // Alinha os itens verticalmente no centro
    justifyContent: "space-between",  // Distribui os itens igualmente ao longo da linha
  },

  // Estilo para os textos das datas (início e fim)
  dateText: {
    fontSize: 16,  // Tamanho da fonte de 16
    padding: 10,  // Padding de 10 ao redor do texto
    backgroundColor: "#fff",  // Fundo branco para os textos das datas
    borderRadius: 5,  // Bordas arredondadas de 5 pixels para os textos das datas
  },

  // Estilo para o botão de busca
  searchButton: {
    backgroundColor: "green",  // Cor de fundo verde para o botão
    padding: 10,  // Padding de 10 dentro do botão
    borderRadius: 5,  // Bordas arredondadas de 5 pixels
  },

  // Estilo para o texto do botão de busca
  searchButtonText: {
    color: "#fff",  // Cor do texto do botão de busca em branco
    fontWeight: "bold",  // Torna o texto em negrito
  },

  // Estilo para o subtítulo na tela (como "Comandas Abertas")
  subTitle: {
    fontSize: 16,  // Tamanho da fonte de 16
    fontWeight: "bold",  // Torna o subtítulo em negrito
    marginVertical: 10,  // Adiciona uma margem vertical de 10 pixels
  },

  // Estilo para os cartões que exibem as comandas
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,
    boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", // novo estilo compatível com web
  },  

  // Estilo para o nome do cliente no cartão
  clientName: {
    fontSize: 16,  // Tamanho da fonte de 16
    fontWeight: "bold",  // Torna o nome do cliente em negrito
  },

  // Estilo para o serviço e o preço no cartão
  service: {
    color: "green",  // Cor do texto em verde para o serviço
    marginBottom: 5,  // Margem inferior de 5 pixels entre o texto do serviço e outros elementos
  },

  // Estilo para a data da comanda
  date: {
    color: "gray",  // Cor do texto em cinza para a data
  },

  // Estilo para o horário da comanda
  time: {
    fontSize: 14,  // Tamanho da fonte de 14
    marginVertical: 5,  // Margem vertical de 5 pixels entre o horário e outros elementos
  },

  // Estilo para o botão de finalizar a comanda
  finalizeButton: {
    backgroundColor: "#001F3F",  // Cor de fundo do botão de finalizar (azul escuro)
    padding: 7,  // Padding de 10 dentro do botão
    borderRadius: 5,  // Bordas arredondadas de 5 pixels para o botão
    alignItems: "center",  // Alinha o texto do botão no centro
  },

  // Estilo para o texto dentro do botão de finalizar
  finalizeButtonText: {
    color: "#fff",  // Cor do texto do botão em branco
    fontWeight: "bold",  // Torna o texto do botão em negrito
  },

  // Estilo para o menu inferior fixo
  bottomNav: {
    position: "absolute",  // Posiciona o menu de forma absoluta na tela
    bottom: 0,  // Fixa o menu no fundo da tela
    left: 0,  // Alinha o menu à esquerda
    right: 0,  // Alinha o menu à direita
    backgroundColor: "#001F3F",  // Cor de fundo azul escuro para o menu inferior
    flexDirection: "row",  // Organiza os ícones do menu na horizontal
    justifyContent: "space-around",  // Distribui os ícones igualmente ao longo da linha
    paddingVertical: 5,  // Padding de 5 no topo e fundo do menu
    paddingBottom: 5,  // Padding adicional no fundo do menu
  },

  // Estilo para os botões dentro do menu inferior
  navButton: {
    padding: 10,  // Padding de 10 dentro de cada botão do menu inferior
  },
});