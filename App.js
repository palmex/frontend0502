import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

// some js code here

  return (
    <View style={styles.container}>
      <View>

        <Text style={{fontSize:35}}>
        Welcome to Module 3!
        </Text>
        <Text style={{fontSize:15}}>
        This is our React Native (Web) Frontend
        </Text>
        
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    backgroundColor: '#f5f',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
