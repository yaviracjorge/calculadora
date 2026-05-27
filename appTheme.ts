import { StyleSheet } from 'react-native';

// Paleta de colores centralizada
export const colors = {
  bg:          '#0D0F14',   // fondo principal casi negro
  card:        '#161B25',   // fondo de secciones
  border:      '#252D3D',   // bordes sutiles
  inputBg:     '#1C2333',   // fondo de inputs
  accent:      '#5B8DEF',   // azul eléctrico
  accentSoft:  '#1E2D4D',   // azul oscuro para hover
  danger:      '#EF5B5B',   // rojo para dividir/error
  success:     '#4ECDC4',   // verde azulado para resultado
  textPrimary: '#E8EDF5',   // texto principal
  textMuted:   '#FFF',   // texto secundario
  suma:        '#5B8DEF',   // azul
  resta:       '#A78BFA',   // violeta
  multi:       '#F59E0B',   // ámbar
  divide:      '#EF5B5B',   // rojo
  limpiar:     '#374151',   // gris oscuro
};

export const styles = StyleSheet.create({
  // ─── Layout ──────────────────────────────────────────────
  container: {
    flex: 1,
    backgroundColor: colors.bg,
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  // ─── Header ──────────────────────────────────────────────
  header: {
    marginBottom: 28,
  },
  headerTitulo: {
    fontSize: 48,
    fontWeight: '800',
    color: colors.textPrimary,
    letterSpacing: 1,
    alignSelf: 'center',
  },
  headerSubtitulo: {
    fontSize: 20,
    color: colors.textMuted,
    marginTop: 4,
    letterSpacing: 0.5,
  },

  // ─── Inputs ──────────────────────────────────────────────
  inputsCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  inputLabel: {
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 6,
    marginTop: 4,
  },
  ingreso: {
    backgroundColor: colors.inputBg,
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 20,
    color: colors.textPrimary,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  ingresoFocused: {
    borderColor: colors.accent,
  },

  // ─── Sección operaciones ─────────────────────────────────
  seccionLabel: {
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 12,
  },
  fila: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    gap: 10,
  },

  // ─── Botones de operación ─────────────────────────────────
  boton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonTexto: {
    fontSize: 13,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.5,
  },
  botonIcono: {
    fontSize: 20,
    color: 'white',
    marginBottom: 4,
  },

  // ─── Botón limpiar ────────────────────────────────────────
  botonLimpiar: {
    backgroundColor: colors.limpiar,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  botonLimpiarTexto: {
    fontSize: 14,
    color: colors.textMuted,
    fontWeight: '600',
    letterSpacing: 0.5,
  },

  // ─── Resultado ───────────────────────────────────────────
  resultadoCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    alignItems: 'center',
  },
  resultadoLabel: {
    fontSize: 20,
    color: colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 8,
    alignSelf: 'flex-start',
  },
  resultado: {
    fontSize: 45,
    fontWeight: '500',
    color: colors.success,
    letterSpacing: -1,
  },

  // ─── Error ───────────────────────────────────────────────
  errorContainer: {
    backgroundColor: '#2D1515',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 16,
    borderLeftWidth: 3,
    borderLeftColor: colors.danger,
  },
  errorTexto: {
    color: colors.danger,
    fontSize: 13,
    fontWeight: '500',
  },

  // ─── Historial ───────────────────────────────────────────
  historialCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: colors.border,
    maxHeight: 160,
  },
  historialLabel: {
    fontSize: 11,
    color: colors.textMuted,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  historialItem: {
    fontSize: 14,
    color: colors.textMuted,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  historialItemUltimo: {
    color: colors.success,
    fontWeight: '600',
    fontSize: 20
  },
  historialVacio: {
    fontSize: 13,
    color: colors.border,
    fontStyle: 'italic',
    textAlign: 'center',
    paddingVertical: 10,
  },
});