import { View, Text, Image, TouchableOpacity } from 'react-native'; 
// Importa os componentes principais do React Native para construir a interface: View, Text, Image, TouchableOpacity

import { useRouter } from 'expo-router'; 
// Importa o hook useRouter da biblioteca Expo Router, usado para navegação entre telas

import { FontAwesome } from '@expo/vector-icons'; 
// Importa a biblioteca de ícones FontAwesome, que será usada para exibir ícones dentro do aplicativo

export default function ProfileScreen() {
  const router = useRouter(); 
  // Inicializa o hook useRouter para navegar entre as telas dentro do aplicativo

  // Define um array de objetos com informações sobre os itens de menu do perfil
  const menuItems = [
    { icon: 'money', label: 'Despesas', description: 'Acompanhe seus gastos', route: '/despesas' },
    { icon: 'history', label: 'Histórico', description: 'Visualize seu histórico de agendamentos', route: '/historico' },
    { icon: 'lock', label: 'Segurança', description: 'Altere sua senha de acesso', route: '/seguranca' },
    { icon: 'cogs', label: 'Preferências', description: 'Personalize sua experiência no aplicativo', route: '/preferencias' },
    { icon: 'file-text', label: 'Termos de uso', description: 'Acesse nossos termos de uso', route: '/termos' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', alignItems: 'center', padding: 20 }}>
      {/* Cabeçalho com a foto e nome do usuário */}
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/80' }} // URL da imagem do perfil (placeholder)
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }} // Estilo da imagem: tamanho, borda arredondada e margem inferior
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Etec Antonio Furlan</Text>
        {/* Nome do usuário */}
        <Text style={{ color: 'gray' }}>etecAnto@gmail.com</Text>
        {/* Email do usuário */}
      </View>

      {/* Renderiza os itens de menu do perfil */}
      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index} // Cada item precisa de uma chave única para renderização
          style={{ 
            flexDirection: 'row', // Disposição dos itens em linha
            alignItems: 'center', // Alinha os itens verticalmente no centro
            backgroundColor: 'white', // Cor de fundo branca para o item do menu
            padding: 15, // Padding interno para os itens
            borderRadius: 10, // Bordas arredondadas
            marginBottom: 10, // Espaçamento entre os itens
            width: '100%', // Define o item para ocupar toda a largura disponível
            shadowColor: '#000', // Cor da sombra do item
            shadowOpacity: 0.1, // Opacidade da sombra
            shadowRadius: 5, // Tamanho da sombra
            elevation: 2 // Elevação para dispositivos Android (somente efeito visual de sombra)
          }}
          onPress={() => router.push(item.route as any)} // Ao pressionar, navega para a tela correspondente (rota do menu)
        >
          <FontAwesome name={item.icon as any} size={24} color="#333" style={{ marginRight: 10 }} />
          {/* Ícone correspondente ao item do menu (usando FontAwesome) */}
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.label}</Text>
            {/* Exibe o nome do item do menu */}
            <Text style={{ color: 'gray' }}>{item.description}</Text>
            {/* Exibe a descrição do item do menu */}
          </View>
        </TouchableOpacity>
      ))}

      {/* Botão de "Sair" para o usuário */}
      <TouchableOpacity onPress={() => console.log('Sair')}>
        <Text style={{ color: 'red', marginTop: 20 }}>Sair</Text>
        {/* Exibe o texto "Sair" em vermelho. Quando pressionado, executa um console.log (essa funcionalidade de logout ainda precisa ser implementada) */}
      </TouchableOpacity>
    </View>
  );
}