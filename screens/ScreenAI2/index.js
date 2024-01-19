import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = () => {// Handle login with Magic.Link and phone number
  };

  return <SafeAreaView style={styles.container}>
      <Image style={styles.logo} source={{
      uri: 'https://tinyurl.com/42evm3m3'
    }} />
      <Text style={styles.title}>Welcome Back!</Text>
      <Text style={styles.subtitle}>Please enter your phone number to continue</Text>
      <TextInput style={styles.input} onChangeText={setPhoneNumber} value={phoneNumber} placeholder="Phone Number" keyboardType="phone-pad" />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 50
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 30
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: '#CCC',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 20
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18
  }
});
export default LoginScreen;