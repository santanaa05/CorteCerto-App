import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function ProfileScreen() {
  const router = useRouter();

  const menuItems = [
    { icon: 'money', label: 'Despesas', description: 'Acompanhe seus gastos', route: '/despesas' },
    { icon: 'history', label: 'Histórico', description: 'Visualize seu histórico de agendamentos', route: '/historico' },
    { icon: 'lock', label: 'Segurança', description: 'Altere sua senha de acesso', route: '/seguranca' },
    { icon: 'cogs', label: 'Preferências', description: 'Personalize sua experiência no aplicativo', route: '/preferencias' },
    { icon: 'file-text', label: 'Termos de uso', description: 'Acesse nossos termos de uso', route: '/termos' },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: '#F8FAFC', alignItems: 'center', padding: 20 }}>
      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/80' }} 
          style={{ width: 80, height: 80, borderRadius: 40, marginBottom: 10 }}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Etec Antonio Furlan</Text>
        <Text style={{ color: 'gray' }}>etecAnto@gmail.com</Text>
      </View>

      {menuItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{ 
            flexDirection: 'row', 
            alignItems: 'center', 
            backgroundColor: 'white', 
            padding: 15, 
            borderRadius: 10, 
            marginBottom: 10, 
            width: '100%', 
            shadowColor: '#000',
            shadowOpacity: 0.1,
            shadowRadius: 5,
            elevation: 2
          }}
          onPress={() => router.push(item.route as any)}
        >
          <FontAwesome name={item.icon as any} size={24} color="#333" style={{ marginRight: 10 }} />
          <View>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{item.label}</Text>
            <Text style={{ color: 'gray' }}>{item.description}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <TouchableOpacity onPress={() => console.log('Sair')}>
        <Text style={{ color: 'red', marginTop: 20 }}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

