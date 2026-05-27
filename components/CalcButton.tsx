import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../appTheme';

interface Props {
  label: string;
  icono?: string;       // símbolo grande arriba del texto
  color: string;        // color de fondo del botón
  onPress: () => void;
}

export const CalcButton = ({ label, icono, color, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={[styles.boton, { backgroundColor: color }]}
      onPress={onPress}
      activeOpacity={0.75}
    >
      {icono && <Text style={styles.botonIcono}>{icono}</Text>}
      <Text style={styles.botonTexto}>{label}</Text>
    </TouchableOpacity>
  );
};