import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Ejercicio2 = () => {
  const [contador, setContador] = useState(0);

  // Se ejecuta cada vez que cambia el contador
  useEffect(() => {
    console.log(`El contador cambió a: ${contador}`);
  }, [contador]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 2: Contador</Text>

      <Text style={styles.counter}>Contador: {contador}</Text>

      <Button title="Incrementar" onPress={() => setContador(contador + 1)} />

      {contador > 0 && contador % 5 === 0 ? (
        <Text style={styles.message}> Ha alcanzado un múltiplo de 5 </Text>
      ) : null}
    </View>
  );
};

export default Ejercicio2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  counter: {
    fontSize: 24,
    marginVertical: 15,
  },
  message: {
    marginTop: 15,
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
});