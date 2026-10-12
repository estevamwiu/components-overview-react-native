import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Alert } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}
      //onTouchStart={() => Alert.alert("Toque iniciado")}
      //onTouchEnd={() => Alert.alert("Toque finalizado")}
    >
      <View
        //onTouchStart={() => Alert.alert("Toque iniciado")}
        //onTouchEnd={() => Alert.alert("Toque finalizado")}
      >
        <Text
          style={[styles.headerTitle, {color: 'yellow'}, styles.highlightText]}
          selectable={true}
        >
          DevBadge Profile</Text>
      </View>

      <View style={styles.textComposition}>
        <Text style={styles.baseText}>Status do sistema: <Text style={styles.highlightText}>Online </Text></Text>
      </View>

      <Text
        style={{color:'#fff'}}
        onPress={() => console.log("Pressionamento rapido")}
        onLongPress={() => Alert.alert('Dica', 'Preencha seus dados abaixo.')}
      >
        (Pressione e segure para dicas)
      </Text>
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D1117',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#58A6FF',
    backgroundColor: '#0D1117',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderColor: '#3FB950'
  },
  textComposition:{
    marginBottom: 20
  },
  baseText: {
    color: '#fff',
    fontSize: 16
  },
  highlightText: {
    color: '#3FB950',
    fontWeight: 'bold'
  }
});
