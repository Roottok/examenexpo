import AuthProvider, { useAuth } from '@/components/contex/auth-context';
import { Redirect, Stack, usePathname } from 'expo-router'; // Importar usePathname
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'react-native-reanimated';

export default function RootLayout() {
  return (
    <AuthProvider>
      <AuthFlow /> 
      <StatusBar style="auto" />
    </AuthProvider>
  );
}

function AuthFlow() {
  const { isAuthenticated } = useAuth();
  const pathname = usePathname(); // Obtenemos la ruta actual
  
  // Condición de redirección mejorada: 
  // Redirige SÓLO si NO está autenticado Y NO está ya en el login
  if (!isAuthenticated && pathname !== '/login') {
    return <Redirect href="/login" />;
  }
  
  return (
    <Stack>
      {/* Si está autenticado o ya estamos en el login */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ title: 'Login', headerShown: false }} />
      <Stack.Screen name="modal" options={{ presentation: 'modal', title: 'Modal' }} />
    </Stack>
  );
}