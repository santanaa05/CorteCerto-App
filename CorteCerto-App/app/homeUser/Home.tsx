import React from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

// Importa o componente do cartão de serviço
import { ServiceCard } from '../../components/ServiceCard';

// Importa a barra de navegação inferior fixa
import { BottomTabBar } from '../../components/BottomTabBar';

// Componente principal da tela inicial
export default function HomeScreen() {
  return (
    <View style={styles.container}> {/* Container principal da tela */}
      
      {/* ScrollView para permitir rolagem dos cards */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Texto de boas-vindas */}
        <Text style={styles.title}>Seja bem-vindo</Text>
        <Text style={styles.subtitle}>Agende seus horários online</Text>

        {/* Campo de pesquisa */}
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar serviço..."
          placeholderTextColor="#999"
        />

        {/* Lista de cards de serviços mockada (12 cards) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <ServiceCard key={i} /> // Componente reutilizável de cartão
        ))}
      </ScrollView>

      {/* Barra inferior fixa com navegação */}
      <BottomTabBar />
    </View>
  );
}

// Estilos da tela
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa a tela inteira
  },
  scrollContainer: {
    padding: 16,         // Padding em volta do conteúdo
    paddingBottom: 100,  // Espaço extra no final para não cobrir os cards com o tab bar
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 12,
    color: '#000',       // Cor preta
  },
  subtitle: {
    fontSize: 14,
    color: '#666',       // Cinza médio
    marginBottom: 12,
  },
  searchInput: {
    backgroundColor: '#eee', // Cor de fundo do campo de busca
    borderRadius: 10,
    padding: 12,
    marginBottom: 16,
  },
});