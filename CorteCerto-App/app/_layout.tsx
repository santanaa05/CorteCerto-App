// Importa o componente 'Stack' da biblioteca 'expo-router'.
// O 'Stack' é usado para gerenciar a navegação em pilha (stack navigation), ou seja,
// permite navegar entre telas de maneira sequencial (como em um fluxo de navegação).
import { Stack } from "expo-router";

// Definindo o componente Layout como exportação padrão
export default function Layout() {
  // Retorna o componente 'Stack', que gerenciará a navegação entre as telas.
  return <Stack />;
}