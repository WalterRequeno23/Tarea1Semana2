import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';

const Ejercicio4 = () => {
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    // Cambia el estado después de 3 segundos
    const temporizador = setTimeout(() => {
      setCargando(false);
    }, 3000);

    // Limpieza del temporizador al desmontar el componente
    return () => clearTimeout(temporizador);
  }, []);

  return (
    <View style={styles.container}>
      {cargando ? (
        <>
          
          <Text style={styles.text}>Cargando...</Text>
        </>
      ) : (
        <Text style={styles.text}> Bienvenido a la aplicación </Text>
      )}
    </View>
  );
};

export default Ejercicio4;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
  },
});
