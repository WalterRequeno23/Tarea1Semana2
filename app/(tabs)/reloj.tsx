import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Ejercicio3 = () => {
  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    // Se ejecuta cada segundo para actualizar la hora
    const intervalo = setInterval(() => {
      setHora(new Date());
    }, 1000);

    // Limpieza del intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []);

  // Formato HH:mm:ss
  const horaFormateada = hora.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Ejercicio 3: Reloj en tiempo real</Text>
      <Text style={styles.clock}>{horaFormateada}</Text>
    </View>
  );
};

export default Ejercicio3;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  clock: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'Black',
  },
});
