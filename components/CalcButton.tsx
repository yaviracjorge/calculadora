import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { styles } from '../appTheme';

interface Props {
  label: string;
  onPress: () => void;
}

export const CalcButton = ({ label, onPress }: Props) => {
  return (
    <TouchableOpacity style={styles.boton} onPress={onPress}>
      <Text style={styles.botonTexto}>{label}</Text>
    </TouchableOpacity>
  );
};
