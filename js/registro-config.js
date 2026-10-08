/**
 * Academia Bio-Python · Configuración del registro en Google Forms
 *
 * Formularios del profesor creados el 8 de octubre de 2026 con docs/crear_formularios.gs:
 *   - «Academia Bio-Python · Ingreso y salida»
 *   - «Academia Bio-Python · Notas y actividades»
 * Las respuestas llegan a la hoja «Academia Bio-Python · Registros» del Google Drive del profesor.
 * Si se borran estas direcciones (url: ""), la academia deja de enviar datos.
 */
const REGISTRO_CONFIG = {
  "ingreso": {
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSchuEPrNjDFtoRxsI3oyj1OAyeknPhxZFKh2b1XhTE3mTXJWw/formResponse",
    "campos": {
      "usuario": "entry.1097290137",
      "nombre": "entry.1686957651",
      "tipo": "entry.2067743287",
      "ingreso": "entry.1132985",
      "salida": "entry.1853058055",
      "duracion": "entry.1714091751",
      "sesion": "entry.1028169958",
      "origen": "entry.47771288"
    }
  },
  "notas": {
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSernMfLr9KK7nILFcitdDbjz9B18J9wNpGNWsujp2O8slBsTg/formResponse",
    "campos": {
      "usuario": "entry.2124501213",
      "nombre": "entry.196797920",
      "modulo": "entry.1592830532",
      "actividad": "entry.2117575724",
      "detalle": "entry.1630471865",
      "resultado": "entry.795355195",
      "nota": "entry.562983260",
      "xp": "entry.513149539",
      "nivel": "entry.655067729",
      "avance": "entry.997202766",
      "fecha": "entry.1916162121",
      "origen": "entry.1778676116"
    }
  }
};
