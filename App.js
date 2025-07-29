import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Some Text</Text>
      </View>
      <Text style={{margin: 20, borderWidth: 2, borderColor: 'red', padding: 16}}>Another Text</Text>
      <Button title='Click me'/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
