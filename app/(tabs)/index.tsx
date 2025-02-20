// 


import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  // Function to handle password input (only letters and numbers allowed)
  const handlePasswordChange = (input:any) => {
    const filteredInput = input.replace(/[^a-zA-Z0-9]/g, ''); // Remove special characters
    setPassword(filteredInput);
  };

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  // Validate email format
  const validateEmail = (email:any) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Handle login
  const handleLogin = () => {
    // Reset error messages
    setEmailError('');
    setPasswordError('');

    // Validate email
    if (!validateEmail(username)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    // Validate password (no special characters)
    if (password.length < 6 || /[^a-zA-Z0-9]/.test(password)) {
      setPasswordError('Password must only contain letters and numbers.');
      return;
    }
    // Proceed with login logic
    alert('Login successful!');
    setUsername('');
    setPassword('');
    setEmailError('');
    setPasswordError('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        WELCOME TO <Text style={styles.highlight}>PRAWN</Text> EXPRESS...
      </Text>

      <Image source={require('../../assets/images/lo3.png')} style={styles.image} />

      <Text style={styles.label}>USER NAME</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setUsername(text)}
        value={username}
        placeholder="ex: pw@gmail.com"
        placeholderTextColor="#999"
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <Text style={styles.label}>PASSWORD</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={handlePasswordChange}
          value={password}
          placeholder="********"
          placeholderTextColor="#999"
          secureTextEntry={!isPasswordVisible}
        />
        {/* Eye icon to toggle password visibility */}
        <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon}>
          <Icon name={isPasswordVisible ? 'eye' : 'eye-off'} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>SIGNUP</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.forgotPassword}>FORGOT PASSWORD ?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8CACC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: -80,
    color: '#000',
    textAlign: 'center',
  },
  highlight: {
    color: 'red',
  },
  image: {
    width: 400,
    height: 400,
    resizeMode: 'contain',
    marginBottom: -160,
  },
  label: {
    alignSelf: 'flex-start',
    color: 'red',
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    height: 40,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#fff',
  },
  passwordInput: {
    flex: 1,
    height: 40,
    padding: 10,
  },
  eyeIcon: {
    padding: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  forgotPassword: {
    marginTop: 15,
    color: '#000',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
  },
});
