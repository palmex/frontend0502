import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cars from "./components/Cars";

export default function App() {

// some js code here

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize:35, color: "#887444"}}>
        Welcome to Module 3!
        </Text>
        <Text style={{fontSize:15}}>
        This is our React Native (Web) Frontend
        </Text>  
      </View>
      <Cars title="Cars 1"></Cars>
      <Cars title="Cars 2"></Cars>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 25,
    width: "90%",
    borderColor: "#243783",
    borderWidth: 1,
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
  },
});
