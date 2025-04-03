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
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingBottom: 60,  // Espaço extra para o menu inferior
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  filterContainer: {
    backgroundColor: "#f0f0f0",  // Fundo do container do filtro
    padding: 10,
    borderRadius: 5,
  },
  datePickerContainer: {
    flexDirection: "row",  // Organiza os botões de data lado a lado
    alignItems: "center",
    justifyContent: "space-between",
  },
  dateText: {
    fontSize: 16,
    padding: 10,
    backgroundColor: "#fff",  // Fundo branco para os textos das datas
    borderRadius: 5,
  },
  searchButton: {
    backgroundColor: "green",  // Cor do botão de buscar
    padding: 10,
    borderRadius: 5,
  },
  searchButtonText: {
    color: "#fff",  // Cor do texto no botão de buscar
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
  },
  card: {
    backgroundColor: "#fff",  // Cor de fundo do cartão
    padding: 15,
    borderRadius: 5,
    marginVertical: 5,  // Espaçamento entre os cartões
    shadowColor: "#000",  // Sombra do cartão
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  clientName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  service: {
    color: "green",  // Cor verde para o serviço
    marginBottom: 5,
  },
  date: {
    color: "gray",  // Cor cinza para a data
  },
  time: {
    fontSize: 14,
    marginVertical: 5,
  },
  finalizeButton: {
    backgroundColor: "#001F3F",  // Cor de fundo do botão de finalizar
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  finalizeButtonText: {
    color: "#fff",  // Cor do texto do botão de finalizar
    fontWeight: "bold",
  },
  // Estilos do menu inferior fixo
  bottomNav: {
    position: "absolute",  // Fixa o menu na parte inferior da tela
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#001F3F",  // Cor de fundo do menu inferior
    flexDirection: "row",  // Organiza os ícones lado a lado
    justifyContent: "space-around",
    paddingVertical: 5,
    paddingBottom: 5,
  },
  navButton: {
    padding: 10,  // Espaçamento dentro de cada botão do menu
  },
});