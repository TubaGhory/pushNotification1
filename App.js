import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button,TextInput } from 'react-native';
import { requestUserPermission } from './src/utils/PushNotifications';

const App = () => {
  useEffect(()=>{
    requestUserPermission()
  },[])
  var text = ""
}
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={text}
        backgroundColor="#841584"
      />
      <Text>Open up App.js to start working on your app!</Text>
      <Button
  title="Learn More"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/>
      <StatusBar style="auto" />
    </View>
  );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
