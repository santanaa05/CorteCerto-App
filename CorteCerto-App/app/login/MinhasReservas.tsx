import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface Reserva {
  id: string;
  servico: string;
  horario: string;
  profissional: string;
  preco: string;
  data: string;
}

const reservas: Reserva[] = [
  {
    id: '1',
    servico: 'Tonalização',
    horario: '16:30 - 17:00',
    profissional: 'Kaio',
    preco: 'R$ 30,00',
    data: '12/12/24',
  },
  {
    id: '2',
    servico: 'Barba Prime',
    horario: '10:30 - 11:00',
    profissional: 'Kaio',
    preco: 'R$ 50,00',
    data: '01/12/24',
  },
];

export default function MinhasReservas() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', padding: 20 }}>
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        Minhas Reservas
      </Text>
      <Text style={{ fontSize: 12, color: 'gray', marginBottom: 10 }}>ITENS</Text>

      <FlatList
        data={reservas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 2 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.servico}</Text>
              <Text style={{ fontSize: 12, color: 'gray' }}>{item.data}</Text>
            </View>
            <Text style={{ fontSize: 14, color: 'gray' }}>⏰ {item.horario}</Text>
            <Text style={{ fontSize: 14, color: 'gray' }}>👤 Profissional: {item.profissional}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
              <Text style={{ fontSize: 16, color: 'green', fontWeight: 'bold' }}>{item.preco}</Text>
              <TouchableOpacity onPress={() => console.log('Remover reserva', item.id)}>
                <FontAwesome name="trash" size={20} color="red" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
}
