import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const FormScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nombre:</Text>
      <TextInput style={styles.input} placeholder="Escribe tu nombre" />
      <Button title="Enviar" onPress={() => alert('Formulario enviado')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
});

export default FormScreen;
