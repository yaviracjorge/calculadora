import { useState } from 'react';

export const useCalculator = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [respuesta, setRespuesta] = useState(0);

  const calcular = (operacion: string) => {
 
    const n1 = parseFloat(numero1) || 0;
    const n2 = parseFloat(numero2) || 0;

   
    switch (operacion) {
      case '+':
        setRespuesta(n1 + n2);
        break;
      case '-':
        setRespuesta(n1 - n2);
        break;
      case '*':
        setRespuesta(n1 * n2);
        break;
      case '/':
        setRespuesta(n1 / n2);
        break;
    }
  };

  return {
    numero1,
    setNumero1,
    numero2,
    setNumero2,
    respuesta,
    setRespuesta,
    calcular
  };
};