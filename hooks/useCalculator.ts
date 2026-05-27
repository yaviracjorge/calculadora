import { useState } from 'react';

export const useCalculator = () => {

  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [respuesta, setRespuesta] = useState(0);
  const [error, setError] = useState('');
  const [historial, setHistorial] = useState<string[]>([]);



  const calcular = (operacion: string) => {

    setError('');
    
    if (isNaN(parseFloat(numero1)) || isNaN(parseFloat(numero2))) {
      return setError('Por favor ingresa solo números');
    }

    const n1 = parseFloat(numero1);
    const n2 = parseFloat(numero2);
    let resultado = 0;
    let textoOperacion = '';

    switch (operacion) {

      case '+':
        resultado = n1 + n2;
        textoOperacion = `${n1} + ${n2} = ${resultado}`;
        break;

      case '-':
        resultado = n1 - n2;
        textoOperacion = `${n1} - ${n2} = ${resultado}`;
        break;

      case '*':
        resultado = n1 * n2;
        textoOperacion = `${n1} * ${n2} = ${resultado}`;
        break;

      case '/':

        if (n1 === 0 && n2 === 0) {
          return setError('Indeterminación 0/0');
        }

        if (n2 === 0) {
          return setError('No se puede dividir por cero');
        }

        resultado = n1 / n2;
        textoOperacion = `${n1} / ${n2} = ${resultado}`;
        break;
    }

    setRespuesta(resultado);
    setHistorial((prev) => [...prev, textoOperacion]);
  };

  const limpiar = () => {
    setNumero1('');
    setNumero2('');
    setRespuesta(0);
    setError('');
    setHistorial([]);
  };


  return {
    numero1,
    numero2,
    setNumero1,
    setNumero2,
    respuesta,
    error,
    historial,
    calcular,
    limpiar
  };
};