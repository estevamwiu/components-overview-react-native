import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  View,
} from 'react-native';

const LOGO = { uri: 'https://reactnative.dev/img/tiny_logo.png' };

const ELEMENTOS = [1, 2, 3, 4, 5, 6];

export default function App() {
  const [nome, setNome] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const registrar = () => {
    if (nome.trim() === '') {
      Alert.alert('Erro', 'Digite seu nome de desenvolvedor antes de registrar.');
      return;
    }

    Alert.alert(
      'Credencial registrada',
      `Dev: ${nome.trim()}\nAcesso: ${isAdmin ? 'Total (Admin)' : 'Básico'}`
    );
    setNome('');
  };

  return (
    <ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <Text style={styles.headerTitle} selectable={true}>
        DevBadge Profile
      </Text>

      <View style={styles.textComposition}>
        <Text style={styles.baseText}>
          Status do Sistema: <Text style={styles.highlightText}>Online</Text>
        </Text>
      </View>

      <Image source={LOGO} style={styles.logo} />

      <Text
        style={styles.hint}
        onPress={() => console.log('Pressionamento rapido')}
        onLongPress={() => Alert.alert('Dica', 'Preencha seus dados abaixo.')}
      >
        (Pressione e segure para dicas)
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Digite seu nome de desenvolvedor..."
        placeholderTextColor="#6E7681"
        value={nome}
        onChangeText={setNome}
      />

      <View style={styles.buttonWrapper}>
        <Button title="Registrar Credencial" color="#00a8be" onPress={registrar} />
      </View>

      <View style={styles.switchRow}>
        <Text style={styles.baseText}>Ativar Modo Admin?</Text>
        <Switch
          value={isAdmin}
          onValueChange={setIsAdmin}
          trackColor={{ false: '#30363D', true: '#3FB950' }}
          thumbColor="#fff"
        />
      </View>

      <Text style={[styles.badge, isAdmin ? styles.badgeAdmin : styles.badgeBasic]}>
        {isAdmin ? 'Acesso Total (Admin)' : 'Acesso Básico'}
      </Text>

      {ELEMENTOS.map((n) => (
        <Text
          key={n}
          style={styles.elemento}
          onPress={() => Alert.alert(`Elemento ${n}`, 'Toque rápido')}
          onLongPress={() => Alert.alert(`Elemento ${n}`, 'Pressionamento longo')}
        >
          Elemento {n}
        </Text>
      ))}

      <StatusBar style="light" />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: '#0D1117',
  },
  container: {
    alignItems: 'center',
    paddingTop: 60,
    paddingBottom: 40,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: "#00a8be",
  },
  textComposition: {
    marginBottom: 20,
  },
  baseText: {
    color: '#fff',
    fontSize: 16,
  },
  highlightText: {
    color: '#00a8be',
    fontWeight: 'bold',
  },
  logo: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#21262D',
    marginBottom: 20,
  },
  hint: {
    color: '#8B949E',
    fontSize: 12,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: '#00a8be',
    borderRadius: 8,
    color: '#fff',
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 14,
    marginBottom: 16,
  },
  buttonWrapper: {
    width: '100%',
    marginBottom: 24,
  },
  switchRow: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#161B22',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 14,
    marginBottom: 20,
  },
  badge: {
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  badgeBasic: {
    color: '#8B949E',
    borderColor: '#8B949E',
  },
  badgeAdmin: {
    color: '#00a8be',
    borderColor: '#00a8be',
  },
  elemento: {
    width: 135,
    textAlign: 'center',
    color: '#00a8be',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#161B22',
    borderWidth: 1,
    borderColor: '#00a8be',
    borderRadius: 8,
    paddingVertical: 20,
    marginTop: 10,
    overflow: 'hidden',
  },
});
