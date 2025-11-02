import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const IndexScreen = () => {
  const [usuario, setUsuario] = useState({ nombre: '', edad: '' });

  const handleNombre = (text: string) => setUsuario({ ...usuario, nombre: text });
  const handleEdad = (text: string) => {
    if (/^\d*$/.test(text)) setUsuario({ ...usuario, edad: text });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Ejercicio 1: Manejo de estado con useState</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        value={usuario.nombre}
        onChangeText={handleNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu edad"
        value={usuario.edad}
        onChangeText={handleEdad}
        keyboardType="numeric"
      />
      {usuario.nombre && usuario.edad ? (
        <Text>Hola, {usuario.nombre}. Tienes {usuario.edad} años.</Text>
      ) : null}
    </View>
  );
};

export default IndexScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#f0f0f0' },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', padding: 10, borderRadius: 5, marginBottom: 10, width: '100%' },
});


