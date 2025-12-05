// app/_layout.tsx

import { Stack } from 'expo-router';

/**
 * EXPLICAÇÃO:
 * 
 * _layout.tsx = Configuração da navegação
 * Stack = Navegação empilhada (tipo app nativo)
 * 
 * headerShown: false = Remove header padrão
 * (criamos nossos próprios headers customizados)
 */

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false, // Remove header padrão
        contentStyle: { backgroundColor: '#fff' },
      }}
    >
      {/* Tela Home (index) */}
      <Stack.Screen 
        name="index" 
        options={{
          title: 'Contatos',
        }}
      />

      {/* Tela Profile (rota dinâmica) */}
      <Stack.Screen 
        name="profile/[username]" 
        options={{
          title: 'Perfil',
          presentation: 'card', // Animação de card (iOS style)
        }}
      />
    </Stack>
  );
}