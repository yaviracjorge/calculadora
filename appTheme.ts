import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    padding: 10,
    backgroundColor: '#fff', // Fondo blanco normal
  },
  ingreso:{
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    fontSize: 18,
     backgroundColor: '#f0f0f0', // Fondo gris claro para inputs
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 18,
    paddingHorizontal: 10
  },
  boton: {
    height: 100,
    width: 150,
    backgroundColor: '#2D2D2D',
    borderRadius: 10,
    justifyContent: 'center',
    marginHorizontal: 10
  },
  botonTexto: {
    textAlign: 'center',
    padding: 10,
    fontSize: 20,
    color: 'white',
    fontWeight: '300'
  },
  resultado: {
    fontSize: 24,
    textAlign: 'center',
    marginTop: 20,
    color: '#d62222'
  }
});
