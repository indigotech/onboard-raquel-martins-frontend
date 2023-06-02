import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text, TouchableOpacity } from 'react-native';
import { validateEmail, validatePassword } from './validate-functions';

interface Input {
  value: string;
  isValid: boolean;
  shouldValidate: boolean;
}

const LoginScreen = () => {
  const [email, setEmail] = useState({ value: '', isValid: false, shouldValidate: false });
  const [password, setPassword] = useState({ value: '', isValid: false, shouldValidate: false });

  const checkFields = (email: Input, password: Input) => {
    const isValidEmail = validateEmail(email.value);
    const isValidPassword = validatePassword(password.value);

    if (isValidEmail) {
      setEmail({ value: email.value, isValid: true, shouldValidate: true });
    } else {
      setEmail({ value: email.value, isValid: false, shouldValidate: true });
    }

    if (isValidPassword) {
      setPassword({ value: password.value, isValid: true, shouldValidate: true });
    } else {
      setPassword({ value: password.value, isValid: false, shouldValidate: true });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>Bem-vindo(a) à Taqtile!</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>E-mail</Text>

        <TextInput
          style={styles.input}
          value={email.value}
          onChangeText={(newValue) => setEmail({ value: newValue, shouldValidate: false, isValid: false })}
        />
        {email.isValid || !email.shouldValidate ? null : <Text style={styles.captionText}>Email inválido</Text>}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          value={password.value}
          onChangeText={(newValue) => setPassword({ value: newValue, shouldValidate: false, isValid: false })}
          secureTextEntry={true}
        />
        {password.isValid || !password.shouldValidate ? null : <Text style={styles.captionText}>Senha inválido</Text>}
      </View>
      <TouchableOpacity style={styles.button} onPress={() => checkFields(email, password)}>
        <Text style={styles.buttonText}>Entrar!</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20
  },
  textHeader: {
    fontSize: 35,
    color: '#000000',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingBottom: 50,
    paddingTop: 50
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: '#c8c8c8',
    padding: 10,
    width: '100%'
  },
  inputContainer: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    paddingBottom: 30
  },
  label: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    color: '#000000',
    paddingTop: 10,
    fontSize: 16
  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    elevation: 3,
    backgroundColor: '#6d50f2',
    margin: 18,
    borderRadius: 15,
    width: '100%',
    height: 50
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  captionText: {
    color: 'red',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingLeft: 15,
    paddingTop: 5,
    fontSize: 12
  }
});

export default LoginScreen;
