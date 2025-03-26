import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

interface Comanda {
  id: string;
  nome: string;
  servico: string;
  preco: number;
  data: string;
  horario: string;
}

export default function ComandasScreen() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showStartPicker, setShowStartPicker] = useState(false);
  const [showEndPicker, setShowEndPicker] = useState(false);
  const [filteredComandas, setFilteredComandas] = useState<Comanda[]>([]);

  const comandas: Comanda[] = [
    { id: "1", nome: "Heber Stein Mazutti", servico: "Corte", preco: 35.0, data: "2024-12-01", horario: "11:30" },
    { id: "2", nome: "João Silva", servico: "Barba", preco: 20.0, data: "2024-11-27", horario: "14:00" },
  ];

  const handleFilter = () => {
    const filtered = comandas.filter(comanda => {
      const comandaDate = new Date(comanda.data);
      return comandaDate >= startDate && comandaDate <= endDate;
    });
    setFilteredComandas(filtered);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Comandas</Text>

      {/* Seletor de datas */}
      <View style={styles.filterContainer}>
        <Text>Escolha um período que deseja filtrar</Text>
        <View style={styles.datePickerContainer}>
          <TouchableOpacity onPress={() => setShowStartPicker(true)}>
            <Text style={styles.dateText}>{startDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <Text>—</Text>
          <TouchableOpacity onPress={() => setShowEndPicker(true)}>
            <Text style={styles.dateText}>{endDate.toLocaleDateString()}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchButton} onPress={handleFilter}>
            <Text style={styles.searchButtonText}>Buscar</Text>
          </TouchableOpacity>
        </View>

        {showStartPicker && (
          <DateTimePicker
            value={startDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowStartPicker(false);
              if (date) setStartDate(date);
            }}
          />
        )}

        {showEndPicker && (
          <DateTimePicker
            value={endDate}
            mode="date"
            display="default"
            onChange={(_, date) => {
              setShowEndPicker(false);
              if (date) setEndDate(date);
            }}
          />
        )}
      </View>

      {/* Lista de comandas filtradas */}
      <Text style={styles.subTitle}>Comandas Abertas</Text>
      <FlatList
        data={filteredComandas.length > 0 ? filteredComandas : comandas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.clientName}>{item.nome}</Text>
            <Text style={styles.service}>{item.servico}  R$ {item.preco.toFixed(2)}</Text>
            <Text style={styles.date}>{item.data}</Text>
            <Text style={styles.time}>⏰ {item.horario}</Text>
            <TouchableOpacity style={styles.finalizeButton}>
              <Text style={styles.finalizeButtonText}>Finalizar</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  filterContainer: { backgroundColor: "#f0f0f0", padding: 10, borderRadius: 5 },
  datePickerContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  dateText: { fontSize: 16, padding: 10, backgroundColor: "#fff", borderRadius: 5 },
  searchButton: { backgroundColor: "green", padding: 10, borderRadius: 5 },
  searchButtonText: { color: "#fff", fontWeight: "bold" },
  subTitle: { fontSize: 16, fontWeight: "bold", marginVertical: 10 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 5, marginVertical: 5, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5 },
  clientName: { fontSize: 16, fontWeight: "bold" },
  service: { color: "green", marginBottom: 5 },
  date: { color: "gray" },
  time: { fontSize: 14, marginVertical: 5 },
  finalizeButton: { backgroundColor: "#001F3F", padding: 10, borderRadius: 5, alignItems: "center" },
  finalizeButtonText: { color: "#fff", fontWeight: "bold" },
});

//Comanda