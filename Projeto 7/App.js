import React, { useState } from 'react';
import { View, Text, TextInput, ScrollView, StyleSheet } from 'react-native';

const CustomInput = ({ label, placeholder, value, onChangeText, secureTextEntry }) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [petName, setPetName] = useState('');
  const [petBirthday, setPetBirthday] = useState('');
  const [petBreed, setPetBreed] = useState('');
  const [favoriteToy, setFavoriteToy] = useState('');

  return (
    <ScrollView style={styles.container}>
      <CustomInput
        label="Email"
        placeholder="Digite seu email"
        value={email}
        onChangeText={setEmail}
      />
      <CustomInput
        label="Senha"
        placeholder="Digite sua senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <CustomInput
        label="Nome do Pet"
        placeholder="Digite o nome do seu pet"
        value={petName}
        onChangeText={setPetName}
      />
      <CustomInput
        label="Data de Aniversário do Pet"
        placeholder="Digite a data de aniversário do seu pet"
        value={petBirthday}
        onChangeText={setPetBirthday}
      />
      <CustomInput
        label="Raça do Pet"
        placeholder="Digite a raça do seu pet"
        value={petBreed}
        onChangeText={setPetBreed}
      />
      <CustomInput
        label="Brinquedo Favorito"
        placeholder="Digite o brinquedo favorito do seu pet"
        value={favoriteToy}
        onChangeText={setFavoriteToy}
      />
    
      
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
});

export default App;
