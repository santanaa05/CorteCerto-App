import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons'; // Ícones da Expo

// Componente funcional que representa um cartão de serviço
export function ServiceCard() {
  return (
    // Container principal do cartão
    <View style={styles.card}>
      
      {/* Imagem do avatar/logo do serviço */}
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }} // Imagem estática por enquanto
        style={styles.avatar}
      />
      
      {/* Informações do serviço */}
      <View style={styles.info}>
        <Text style={styles.name}>Barbearia CorteCerto</Text> {/* Nome do serviço */}
        <Text style={styles.detail}>Corte cabelo • ⭐ 4.9 • 1.2km</Text> {/* Categoria + avaliação + distância */}
        <Text style={styles.location}>Rua Estevão, 123 • Ao lado de você</Text> {/* Localização */}
      </View>

      {/* Ícone de favorito (coração) */}
      <Feather name="heart" size={20} color="#ccc" style={styles.icon} />
    </View>
  );
}

// Estilos do componente
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',             // Itens lado a lado
    backgroundColor: '#fff',          // Fundo branco
    padding: 12,                      // Espaçamento interno
    borderRadius: 12,                 // Bordas arredondadas
    marginBottom: 12,                 // Espaçamento entre cards
    alignItems: 'center',             // Alinhamento vertical centralizado
    elevation: 2,                     // Sombra (funciona no Android)
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,                 // Deixa a imagem circular
    marginRight: 12,                  // Espaço entre imagem e texto
  },
  info: {
    flex: 1,                          // Ocupa o máximo de espaço disponível
  },
  name: {
    fontWeight: 'bold',               // Texto em negrito
    fontSize: 16,
  },
  detail: {
    fontSize: 13,
    color: '#666',                    // Cinza médio
  },
  location: {
    fontSize: 12,
    color: '#999',                    // Cinza claro
  },
  icon: {
    marginLeft: 8,                    // Espaço entre texto e ícone
  },
});