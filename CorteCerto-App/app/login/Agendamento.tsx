import { View, Text, TouchableOpacity, FlatList } from 'react-native'; // Importa os componentes necessários do React Native
import { FontAwesome } from '@expo/vector-icons'; // Importa ícones do FontAwesome para usar na interface
import { useState } from 'react'; // Importa o hook useState para gerenciar o estado do componente

// Lista de profissionais com id e nome
const profissionais = [
  { id: '1', nome: 'Emanuel' },
  { id: '2', nome: 'Kauan' },
  { id: '3', nome: 'Kaio' },
];

// Lista de horários disponíveis para o agendamento
const horarios = ['10:00', '11:00', '12:00', '10:30', '11:30', '12:30'];

// Componente principal para a tela de agendamento
export default function Agendamento() {
  // Estados para controlar o profissional e horário selecionados
  const [profissionalSelecionado, setProfissionalSelecionado] = useState<string | null>(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState<string | null>(null);

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', padding: 20 }}>
      {/* Cabeçalho com seta de voltar e mês/ano */}
      <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
        <FontAwesome name="arrow-left" size={20} color="#000" /> {/* Ícone de seta para voltar */}
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 10 }}>Novembro 2024</Text> {/* Título com o mês e ano */}
      </View>
      
      {/* Exibição dos dias da semana horizontalmente */}
      <FlatList
        horizontal // A lista será exibida horizontalmente
        data={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']} // Dias da semana
        renderItem={({ item }) => <Text style={{ marginHorizontal: 10 }}>{item}</Text>} // Exibe cada dia
      />
      
      {/* Seção para selecionar o profissional */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Selecione um profissional</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
        {/* Mapeia os profissionais e exibe um botão para cada um */}
        {profissionais.map((prof) => (
          <TouchableOpacity key={prof.id} onPress={() => setProfissionalSelecionado(prof.id)}>
            {/* Exibe uma "bolinha" representando o profissional */}
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: profissionalSelecionado === prof.id ? '#ccc' : '#E5E7EB', // Muda a cor dependendo se o profissional foi selecionado
                alignItems: 'center',
                justifyContent: 'center',
              }}
            />
            {/* Exibe o nome do profissional abaixo da bolinha */}
            <Text style={{ textAlign: 'center', marginTop: 5 }}>{prof.nome}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Seção para selecionar o horário */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 20 }}>Horário</Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 10 }}>
        {/* Mapeia os horários e exibe um botão para cada um */}
        {horarios.map((hora) => (
          <TouchableOpacity key={hora} onPress={() => setHorarioSelecionado(hora)}>
            {/* Exibe cada horário como um botão */}
            <View
              style={{
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: '#000',
                margin: 5,
                backgroundColor: horarioSelecionado === hora ? '#007AFF' : '#FFF', // Muda a cor de fundo dependendo se o horário foi selecionado
              }}
            >
              {/* Muda a cor do texto conforme o horário selecionado */}
              <Text style={{ color: horarioSelecionado === hora ? '#FFF' : '#000' }}>{hora}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Aviso sobre o pagamento */}
      <Text style={{ color: 'gray', marginTop: 20, textAlign: 'center' }}>
        Este estabelecimento não aceita pagamento online!
      </Text>

      {/* Botão para confirmar o agendamento */}
      <TouchableOpacity style={{ backgroundColor: '#007AFF', padding: 15, borderRadius: 10, marginTop: 20 }}>
        <Text style={{ color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>
          Confirmar agendamento
        </Text>
      </TouchableOpacity>
    </View>
  );
}