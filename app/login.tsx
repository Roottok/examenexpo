import { useAuth } from '@/components/contex/auth-context';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';

export default function LoginScreen() {
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>(''); 
  
  const router = useRouter();
  const { login } = useAuth(); 

  const handleLogin = () => {
    if (password === '1234') {
      setError(''); 
      
      login(email); 

      router.replace('/(tabs)'); // Solución estable: Navega a la raíz del grupo (tabs)

    } else {
      const errorMessage = 'Contraseña incorrecta';
      setError(errorMessage);
      Alert.alert('Error de Acceso', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Inicio de Sesión</Text>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Email:</Text>
        <TextInput 
          style={styles.input} 
          placeholder="Email"
          onChangeText={setEmail}
          keyboardType="email-address"
          value={email}
          autoCapitalize="none"
        />
      </View>
      
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Password:</Text>
        <TextInput 
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={setPassword}
          value={password}
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    maxWidth: 300,
    marginTop: 10,
  },
  label: {
    marginBottom: 5,
    fontWeight: '600',
  },
  input: {
    height: 45,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  errorText: {
    color: 'red',
    marginTop: 10,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    padding: 12,
    backgroundColor: '#068b39ff',
    width: '100%',
    maxWidth: 300,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});