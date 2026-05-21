import { StyleSheet, Text, View, TextInput, } from 'react-native';
import { CalcButton } from './components/CalcButton';
import { styles } from './appTheme';
import { useCalculator } from './hooks/useCalculator';


export default function App() {
const { numero1, setNumero1, numero2 , setNumero2, respuesta, calcular } = useCalculator();
   return (
    <View>
      
      <TextInput style={styles.ingreso} placeholder="Ingrese el Primer Número"onChangeText={setNumero1} />
      <TextInput style={styles.ingreso} placeholder="Ingrese el Segundo Número"onChangeText={setNumero2} />
      <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 10}}>Seleccione una operación:</Text>
      <View style={styles.fila}>
      
      <CalcButton label='Sumar' onPress={()=> calcular ('+')}></CalcButton>
      <CalcButton label='Restar' onPress={()=> calcular ('-')}></CalcButton>
      <CalcButton label='Multiplicar' onPress={()=> calcular ('*')}></CalcButton>
      <CalcButton label='Dividir' onPress={()=> calcular ('/')}></CalcButton>
      </View>
      

      <Text style={styles.resultado}> resultado {respuesta}</Text>

    </View>
   )

}