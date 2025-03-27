import React from "react"; // Importa o React para usar JSX e componentes React
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native"; // Importa componentes essenciais do React Native para layout e interação
import { Ionicons } from "@expo/vector-icons"; // Importa o Ionicons para usar ícones da biblioteca

// Interface que define a estrutura dos itens de favorito
interface FavoriteItem {
  id: string;
  name: string;
  rating: number;
  address: string;
  imageUrl: string;
}

// Lista de itens favoritos que será exibida na tela
const favorites: FavoriteItem[] = [
  {
    id: "1",
    name: "Glamour Studio", // Nome do estabelecimento
    rating: 4.9, // Avaliação do estabelecimento
    address: "Rua Campos Sales, 647", // Endereço do estabelecimento
    imageUrl: "https://via.placeholder.com/50", // URL da imagem do estabelecimento
  },
  {
    id: "2",
    name: "Barbearia na Porta",
    rating: 4.9,
    address: "Rua Campos Sales, 647",
    imageUrl: "https://via.placeholder.com/50", // URL da imagem
  },
  {
    id: "3",
    name: "ShopBarber",
    rating: 5.0,
    address: "Rua Campos Sales, 647",
    imageUrl: "https://via.placeholder.com/50", // URL da imagem
  },
];

// Componente funcional que renderiza a tela de favoritos
const FavoritesScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 20 }}>
      {/* Cabeçalho da tela */}
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
        Favoritos
      </Text>
      
      {/* Lista de itens favoritos */}
      <FlatList
        data={favorites} // Dados que serão exibidos na lista
        keyExtractor={(item) => item.id} // Usado para identificar unicamente cada item na lista
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row", // Organiza os itens na horizontal
              alignItems: "center", // Alinha os itens ao centro verticalmente
              backgroundColor: "white", // Fundo branco para cada item
              padding: 10, // Padding interno para os itens
              borderRadius: 10, // Arredonda os cantos dos itens
              marginVertical: 5, // Espaçamento vertical entre os itens
              shadowColor: "#000", // Cor da sombra para o item
              shadowOpacity: 0.1, // Opacidade da sombra
              shadowRadius: 4, // Tamanho da sombra
              elevation: 2, // Elevação da sombra em Android (para dar o efeito de sombra)
            }}
          >
            {/* Imagem do item (imagem do estabelecimento) */}
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              {/* Nome do estabelecimento */}
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              {/* Endereço do estabelecimento */}
              <Text style={{ fontSize: 12 }}>{item.address}</Text>
              {/* Avaliação do estabelecimento */}
              <Text>⭐ {item.rating}</Text>
            </View>
            {/* Ícone de "lixeira" para remover o item */}
            <TouchableOpacity>
              <Ionicons name="trash" size={24} color="red" /> {/* Ícone de lixeira */}
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen; // Exporta o componente para ser utilizado em outro lugar