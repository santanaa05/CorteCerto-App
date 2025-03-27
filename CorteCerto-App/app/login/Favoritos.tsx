import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface FavoriteItem {
  id: string;
  name: string;
  rating: number;
  address: string;
  imageUrl: string;
}

const favorites: FavoriteItem[] = [
  {
    id: "1",
    name: "Glamour Studio",
    rating: 4.9,
    address: "Rua Campos Sales, 647",
    imageUrl: "https://via.placeholder.com/50", // Substituir pela URL correta
  },
  {
    id: "2",
    name: "Barbearia na Porta",
    rating: 4.9,
    address: "Rua Campos Sales, 647",
    imageUrl: "https://via.placeholder.com/50",
  },
  {
    id: "3",
    name: "ShopBarber",
    rating: 5.0,
    address: "Rua Campos Sales, 647",
    imageUrl: "https://via.placeholder.com/50",
  },
];

const FavoritesScreen: React.FC = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#f8f9fa", padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", marginBottom: 10 }}>
        Favoritos
      </Text>
      <FlatList
        data={favorites}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
              marginVertical: 5,
              shadowColor: "#000",
              shadowOpacity: 0.1,
              shadowRadius: 4,
              elevation: 2,
            }}
          >
            <Image source={{ uri: item.imageUrl }} style={{ width: 50, height: 50, borderRadius: 25 }} />
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={{ fontWeight: "bold" }}>{item.name}</Text>
              <Text style={{ fontSize: 12 }}>{item.address}</Text>
              <Text>⭐ {item.rating}</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default FavoritesScreen;
