import { View, Text, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useState } from 'react';

const profissionais = [
  { id: '1', nome: 'Emanuel' },
  { id: '2', nome: 'Kauan' },
  { id: '3', nome: 'Kaio' },
];

const horarios = ['10:00', '11:00', '12:00', '10:30', '11:30', '12:30'];

export default function Agendamento() {
  const [profissionalSelecionado, setProfissionalSelecionado] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', padding: 20 }}>
      {/* Cabeçalho */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <FontAwesome name="arrow-left" size={20} color="#000" />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Novembro 2024</Text>
      </View>
      
      {/* Dias da Semana */}
      <FlatList
        horizontal
        data={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
        renderItem={({ item }) => <Text style={{ marginHorizontal: 10 }}>{item}</Text>}
      />
      
      {/* Seleção de Profissional */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Selecione um profissional</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        {profissionais.map((prof) => (
          <TouchableOpacity key={prof.id} onPress={() => setProfissionalSelecionado(prof.id)}>
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: profissionalSelecionado === prof.id ? '#ccc' : '#E5E7EB',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{prof.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seleção de Horário */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Horário</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        {horarios.map((hora) => (
          <TouchableOpacity key={hora} onPress={() => setHorarioSelecionado(hora)}>
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#000',
                margin: 5,
                backgroundColor: horarioSelecionado === hora ? '#007AFF' : '#FFF',
              }}
            >
              <Text style={{ color: horarioSelecionado === hora ? '#FFF' : '#000' }}>{hora}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Aviso */}
      <Text style={{ color: 'gray', marginTop: 20, textAlign: 'center' }}>
        Este estabelecimento não aceita pagamento online!
      </Text>

      {/* Botão de Confirmação */}
      <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Confirmar agendamento</Text>
      </TouchableOpacity>
    </View>
  );
}
