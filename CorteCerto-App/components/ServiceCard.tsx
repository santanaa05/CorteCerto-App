import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';

export function ServiceCard() {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: 'https://via.placeholder.com/50' }}
        style={styles.avatar}
      />
      <View style={styles.info}>
        <Text style={styles.name}>Nome do serviço</Text>
        <Text style={styles.detail}>Corte cabelo • ⭐ 4.9 • 1.2km</Text>
        <Text style={styles.location}>Rua Exemplo, 123 • Ao lado de você</Text>
      </View>
      <Feather name="heart" size={20} color="#ccc" style={styles.icon} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 2,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detail: {
    fontSize: 13,
    color: '#666',
  },
  location: {
    fontSize: 12,
    color: '#999',
  },
  icon: {
    marginLeft: 8,
  },
});
