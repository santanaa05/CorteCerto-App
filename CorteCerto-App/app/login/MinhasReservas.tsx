import { View, Text, FlatList, TouchableOpacity } from 'react-native'; 
// Importa os componentes essenciais do React Native para construir a interface: 
// View (contêiner para conteúdo), Text (texto), FlatList (lista otimizada de dados), TouchableOpacity (botões com interação tátil)

import { FontAwesome } from '@expo/vector-icons'; 
// Importa a biblioteca FontAwesome de ícones, permitindo a utilização de ícones como "trash" para o botão de remoção de reserva.

interface Reserva { 
  id: string; 
  servico: string; 
  horario: string; 
  profissional: string; 
  preco: string; 
  data: string; 
} 
// Define uma interface para o tipo de dados de uma reserva. Cada reserva tem um ID, serviço, horário, profissional, preço e data.

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
// Declara um array de objetos do tipo Reserva, que será exibido na interface. Cada objeto contém dados de uma reserva.

export default function MinhasReservas() { 
  return ( 
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', padding: 20 }}>
      {/* View principal com fundo claro e padding */}
      
      <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>
        Minhas Reservas
      </Text> 
      {/* Título da tela exibido no centro */}
      
      <Text style={{ fontSize: 12, color: 'gray', marginBottom: 10 }}>ITENS</Text> 
      {/* Texto que indica a seção dos itens (reservas) */}
      
      <FlatList 
        data={reservas} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item }) => ( 
          <View style={{ backgroundColor: 'white', padding: 15, borderRadius: 10, marginBottom: 10, elevation: 2 }}>
            {/* View que envolve cada item da lista, com fundo branco e sombra para parecer uma carta flutuante */}
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              {/* Flexbox para alinhar os elementos (serviço e data) no mesmo nível e distribuí-los */}
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.servico}</Text>
              {/* Exibe o nome do serviço com estilo em negrito */}
              <Text style={{ fontSize: 12, color: 'gray' }}>{item.data}</Text>
              {/* Exibe a data da reserva em formato reduzido e cinza */}
            </View>
            
            <Text style={{ fontSize: 14, color: 'gray' }}>⏰ {item.horario}</Text>
            {/* Exibe o horário da reserva */}
            <Text style={{ fontSize: 14, color: 'gray' }}>👤 Profissional: {item.profissional}</Text>
            {/* Exibe o nome do profissional responsável pela reserva */}
            
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 5 }}>
              {/* Alinha o preço e o ícone de exclusão no final da linha */}
              <Text style={{ fontSize: 16, color: 'green', fontWeight: 'bold' }}>{item.preco}</Text>
              {/* Exibe o preço da reserva em verde e em negrito */}
              
              <TouchableOpacity onPress={() => console.log('Remover reserva', item.id)}>
                {/* Botão de exclusão de reserva */}
                <FontAwesome name="trash" size={20} color="red" />
                {/* Ícone de lixo (trash) da FontAwesome, que serve como botão de exclusão */}
              </TouchableOpacity>
            </View>
          </View> 
        )} 
      />
    </View>
  ); 
} 
// O FlatList é usado para renderizar as reservas, proporcionando uma lista otimizada. Para cada reserva, exibe informações como serviço, horário, profissional e preço, além de um botão para excluir a reserva (a ação de exclusão está apenas logando o ID da reserva no console).
