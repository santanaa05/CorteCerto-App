// Importa o hook 'useRouter' da biblioteca 'expo-router', que permite navegar entre telas
import { useRouter } from "expo-router";

// Importa hooks e componentes do React e React Native
import { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";

// Definindo o componente HomeScreen como exportação padrão
export default function HomeScreen() {
  // Inicializa o hook useRouter, que oferece funcionalidades de navegação
  const router = useRouter();
  
  // Inicializa o estado isReady com o valor inicial 'false'
  const [isReady, setIsReady] = useState(false);

  // O useEffect será executado sempre que o valor de isReady mudar
  useEffect(() => {
    // Atualiza o estado de isReady para 'true', indicando que o layout está pronto
    setIsReady(true);

    // Verifica se o layout está pronto e, caso esteja, redireciona para a tela de login
    if (isReady) {
      // Realiza a navegação para a tela de login
      router.replace("/login");
    }
  }, [isReady]); // O efeito depende do estado 'isReady'

  return (
    // Componente View que usa o estilo flex para centralizar o ActivityIndicator
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* Exibe um ActivityIndicator enquanto a navegação ocorre */}
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
}