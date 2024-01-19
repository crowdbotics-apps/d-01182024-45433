import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, TextInput, View, Image, Button, Text } from 'react-native';

const MagicLinkScreen = () => {
  const [code, setCode] = useState('');
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={{
        uri: 'https://tinyurl.com/42evm3m3'
      }} />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.text}>Enter the 6-digit code sent to your phone:</Text>
        <TextInput style={styles.input} onChangeText={setCode} value={code} keyboardType="numeric" maxLength={6} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Submit" onPress={() => console.log('Submit code')} />
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  inputContainer: {
    flex: 1,
    width: '80%'
  },
  text: {
    fontSize: 16,
    marginBottom: 10
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingLeft: 10
  },
  buttonContainer: {
    flex: 1,
    width: '80%',
    justifyContent: 'center'
  }
});
export default MagicLinkScreen;