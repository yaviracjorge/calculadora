import { ScrollView, Text, TextInput, TouchableOpacity, View,StyleSheet } from "react-native";
import { CalcButton } from "./components/CalcButton";
import { colors, styles } from "./appTheme";
import { useCalculator } from "./hooks/useCalculator";

export default function App() {
  const {
    setNumero1,
    setNumero2,
    respuesta,
    calcular,
    error,
    historial,
    limpiar,
    numero1,
    numero2,
  } = useCalculator();

  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: colors.bg }}
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      {/* ── Header ─────────────────────────────────── */}
      <View style={styles.header}>
        <Text style={styles.headerTitulo}>CALCULADORA</Text>
        <Text style={styles.headerSubtitulo}>Ingresa dos números y elige una operación</Text>
      </View>

      {/* ── Inputs ─────────────────────────────────── */}
      <View style={styles.inputsCard}>
        <Text style={styles.inputLabel}>Primer número</Text>
        <TextInput
          style={styles.ingreso}
          value={numero1}
          placeholder="0"
          placeholderTextColor={colors.textMuted}
          onChangeText={setNumero1}
          keyboardType="numeric"
        />
        <Text style={styles.inputLabel}>Segundo número</Text>
        <TextInput
          style={[styles.ingreso, { marginBottom: 0 }]}
          value={numero2}
          placeholder="0"
          placeholderTextColor={colors.textMuted}
          onChangeText={setNumero2}
          keyboardType="numeric"
        />
      </View>

      {/* ── Error ──────────────────────────────────── */}
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorTexto}>⚠ {error}</Text>
        </View>
      ) : null}

      {/* ── Operaciones ────────────────────────────── */}
      <Text style={styles.seccionLabel}>Operación</Text>
      <View style={styles.fila}>
        <CalcButton
          label="Sumar"
          icono="+"
          color={colors.suma}
          onPress={() => calcular("+")}
        />
        <CalcButton
          label="Restar"
          icono="−"
          color={colors.resta}
          onPress={() => calcular("-")}
        />
        <CalcButton
          label="Mult."
          icono="×"
          color={colors.multi}
          onPress={() => calcular("*")}
        />
        <CalcButton
          label="Dividir"
          icono="÷"
          color={colors.divide}
          onPress={() => calcular("/")}
        />
      </View>

      {/* ── Resultado ──────────────────────────────── */}
      <View style={styles.resultadoCard}>
        <Text style={styles.resultadoLabel}>Resultado</Text>
        <Text style={[styles.resultado, { backgroundColor: colors.bg }]}>{respuesta}</Text>
      </View>

      {/* ── Historial ──────────────────────────────── */}
      <View style={styles.historialCard}>
        <Text style={styles.historialLabel}>Historial</Text>
        <ScrollView>
          {historial.length === 0 ? (
            <Text style={styles.historialVacio}>Sin operaciones aún</Text>
          ) : (
            [...historial].reverse().map((item, index) => (
              <Text
                key={index}
                style={[
                  styles.historialItem,
                  index === 0 && styles.historialItemUltimo,
                ]}
              >
                {item}
              </Text>
            ))
          )}
        </ScrollView>
      </View>

      {/* ── Limpiar ────────────────────────────────── */}
      <TouchableOpacity style={styles.botonLimpiar} onPress={limpiar}>
        <Text style={styles.botonLimpiarTexto}>↺  Limpiar todo</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
