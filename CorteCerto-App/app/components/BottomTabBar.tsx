import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons'; // Ícones utilizados na barra

// Componente que representa a barra de navegação inferior fixa
export default function BottomTabBar() {
  return (
    // Container da barra de navegação
    <View style={styles.tabContainer}>
      
      {/* Botão Home (ativo) */}
      <TouchableOpacity>
        <Ionicons name="home" size={24} color="#000" /> {/* Ícone com destaque */}
      </TouchableOpacity>

      {/* Botão de Pesquisa */}
      <TouchableOpacity>
        <Ionicons name="search" size={24} color="#ccc" /> {/* Ícone apagado (inativo) */}
      </TouchableOpacity>

      {/* Botão de Agenda */}
      <TouchableOpacity>
        <FontAwesome5 name="calendar-alt" size={22} color="#ccc" />
      </TouchableOpacity>

      {/* Botão de Perfil */}
      <TouchableOpacity>
        <Ionicons name="person" size={24} color="#ccc" />
      </TouchableOpacity>
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',              // Itens lado a lado
    justifyContent: 'space-around',   // Espaço igual entre os botões
    backgroundColor: '#f2f2',       // Fundo da barra
    paddingVertical: 10,              // Altura da barra
    paddingBottom: 20,                // Espaço extra para devices com notch
    borderTopWidth: 1,                // Linha superior
    borderColor: '#ddd',              // Cor da linha
    position: 'absolute',             // Fixa na parte de baixo da tela
    bottom: 0,
    left: 0,
    right: 0,
  },
});