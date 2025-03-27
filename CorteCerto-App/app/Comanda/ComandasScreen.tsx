import React, { useState } from "react"; // Importa o React, necessário para criar componentes
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native"; // Importa os componentes nativos do React Native
import DateTimePicker from "@react-native-community/datetimepicker";

// Definindo o tipo de dado para "Comanda"
interface Comanda {
  id: string;
  nome: string;
  servico: string;
  preco: number;
  data: string;
  horario: string;
}

// Componente principal que exibe a tela de comandas
export default function ComandasScreen() {
  // Definindo estados para armazenar as datas selecionadas, visibilidade do DateTimePicker e as comandas filtradas
  const [startDate, setStartDate] = useState(new Date()); // Data de início do filtro
  const [endDate, setEndDate] = useState(new Date()); // Data de fim do filtro
  const [showStartPicker, setShowStartPicker] = useState(false); // Controla a visibilidade do DateTimePicker de início
  const [showEndPicker, setShowEndPicker] = useState(false); // Controla a visibilidade do DateTimePicker de fim
  const [filteredComandas, setFilteredComandas] = useState<Comanda[]>([]); // Comandas filtradas

  // Dados fictícios das comandas
  const comandas: Comanda[] = [
    { id: "1", nome: "Heber Stein Mazutti", servico: "Corte", preco: 35.0, data: "2024-12-01", horario: "11:30" },
    { id: "2", nome: "João Silva", servico: "Barba", preco: 20.0, data: "2024-11-27", horario: "14:00" },
  ];

  // Função que filtra as comandas com base nas datas selecionadas
  const handleFilter = () => {
    const filtered = comandas.filter(comanda => {
      const comandaDate = new Date(comanda.data); // Converte a string de data para um objeto Date
      return comandaDate >= startDate && comandaDate <= endDate; // Verifica se a data da comanda está dentro do intervalo
    });
    setFilteredComandas(filtered); // Atualiza o estado com as comandas filtradas
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comandas</Text>

      {/* Seção de filtro para escolher o período */}
      <View style={styles.filterContainer}>
        <Text>Escolha um período que deseja filtrar</Text>
        <View style={styles.datePickerContainer}>
          {/* Seletor de data de início */}
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <Text style={styles.dateText}>{startDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <Text>—</Text>
          {/* Seletor de data de fim */}
          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <Text style={styles.dateText}>{endDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          {/* Botão para acionar a busca */}
          <TouchableOpacity style={styles.searchButton} onPress={handleFilter}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {/* DateTimePicker para selecionar a data de início */}
        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowStartPicker(false); // Fecha o picker após selecionar a data
              if (date) setStartDate(date); // Atualiza o estado com a nova data
            }}
          />
        )}

        {/* DateTimePicker para selecionar a data de fim */}
        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowEndPicker(false); // Fecha o picker após selecionar a data
              if (date) setEndDate(date); // Atualiza o estado com a nova data
            }}
          />
        )}
      </View>

      {/* Lista de comandas filtradas */}
      <Text style={styles.subTitle}>Comandas Abertas</Text>
      <FlatList
        data={filteredComandas.length > 0 ? filteredComandas : comandas} // Exibe as comandas filtradas ou todas as comandas se não houver filtro
        keyExtractor={(item) => item.id} // A chave única para cada item da lista
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.clientName}>{item.nome}</Text>
            <Text style={styles.service}>{item.servico}  R$ {item.preco.toFixed(2)}</Text>
            <Text style={styles.date}>{item.data}</Text>
            <Text style={styles.time}>⏰ {item.horario}</Text>
            {/* Botão para finalizar a comanda */}
            <TouchableOpacity style={styles.finalizeButton}>
              <Text style={styles.finalizeButtonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

// Estilos para a interface
const styles = StyleSheet.create({
  container: {
    flex: 1, // Permite que o conteúdo ocupe toda a tela
    padding: 20, // Espaçamento interno da tela
    backgroundColor: "#fff", // Cor de fundo
  },
  title: { 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 10 
  },
  filterContainer: {
    backgroundColor: "#f0f0f0", // Cor de fundo do filtro
    padding: 10, // Padding para o filtro
    borderRadius: 5, // Bordas arredondadas
  },
  datePickerContainer: { 
    flexDirection: "row", // Organiza os elementos em linha
    alignItems: "center", // Alinha os itens verticalmente ao centro
    justifyContent: "space-between" // Espaça os itens igualmente
  },
  dateText: { 
    fontSize: 16, 
    padding: 10, 
    backgroundColor: "#fff", 
    borderRadius: 5 
  },
  searchButton: { 
    backgroundColor: "green", // Cor do botão
    padding: 10, 
    borderRadius: 5 
  },
  searchButtonText: { 
    color: "#fff", // Cor do texto
    fontWeight: "bold" 
  },
  subTitle: { 
    fontSize: 16, 
    fontWeight: "bold", 
    marginVertical: 10 
  },
  card: { 
    backgroundColor: "#fff", // Cor de fundo do cartão
    padding: 15, // Padding interno do cartão
    borderRadius: 5, // Bordas arredondadas
    marginVertical: 5, // Espaçamento vertical entre os cartões
    shadowColor: "#000", // Cor da sombra
    shadowOpacity: 0.1, // Opacidade da sombra
    shadowRadius: 5 // Raio da sombra
  },
  clientName: { 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  service: { 
    color: "green", // Cor verde para o serviço
    marginBottom: 5 
  },
  date: { 
    color: "gray" 
  },
  time: { 
    fontSize: 14, 
    marginVertical: 5 
  },
  finalizeButton: { 
    backgroundColor: "#001F3F", // Cor do botão de finalizar
    padding: 10, 
    borderRadius: 5, 
    alignItems: "center" // Alinha o texto ao centro
  },
  finalizeButtonText: { 
    color: "#fff", // Cor do texto do botão
    fontWeight: "bold" 
  },
});