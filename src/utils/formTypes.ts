export const FORM_TYPES = [
    'Epicrisis adultos y pediatria',
    'Admisiones internación adultos',
    'Evolucion'
]

export const FORM_LABELS = {
    [FORM_TYPES[0]]: 'Epicrisis adultos y pediatria',
    [FORM_TYPES[1]]: 'Admisiones internación adultos',
    [FORM_TYPES[2]]: 'Evolución'
}

export const EPICRISIS_STRUCTURE = ["Nombre", "Apellido", "Historia clinica", "Staff a cargo de la internacion",
    "Motivo de admision", "Antecedentes relevantes", "Evaluacion de internacion", "Estudios realizados",
    "Diagnostico principal de egreso/transferencia", "Diagnostico secundario de egreso/transferencia",
    "Medicaciones al egreso", "Dosis", "Frecuencia", "Duracion",
    "Via", "Dieta", "Medicacion previa del paciente" , "Medicacion previa del paciente suspendida/modifficada",
    "Instrucciones de seguimiento", "Pautas de alarma", "Confeccion de epicrisis"]

export const ADMISSIONS_STRUCTURE = ["Tipo de evaluacion",
    "Edad",
    "Sexo",
    "Raza",
    "Motivo de consulta/ingreso",
    "Enfermedad actual y sus antecedentes",
    "Medicacion que recibe actualmente",
    "Otros datos de medicacion actual",
    "Antecedentes patologicos",
    "Tabaquismo"]

export const EVOLUTION_STRUCTURE = [
    "Nombre",
    "Apellido",
    "Medico a cargo",
    "Motivo de internaci\u00f3n",
    "Dolor",
    "Diuresis",
    "Par\u00e1metros hemodin\u00e1micos y de perfusi\u00f3n",
    "SpO2",
    "Alimentaci\u00f3n",
    "Catarsis",
    "Pro\ufb01laxis para hemorragia digestiva",
    "Disfunci\u00f3n renal",
    "Control de glucemia",
    "ATB y d\u00edas de ATB",
    "Cultivos",
    "Aislamiento",
    "Transfusi\u00f3n",
    "Pro\ufb01laxis de TVP",
    "Accesos vasculares",
    "Ulceras por presi\u00f3n",
    "Laboratorio",
    "Otros estudios",
    "Acciones educativas implementadas",
    "Impresi\u00f3n diagn\u00f3stica",
    "Diagn\u00f3sticos diferenciales",
    "Interpretaci\u00f3n de diagn\u00f3sticos",
    "Permanece internado en",
    "Debido a",
    "El paciente requiere intervenciones con \ufb01n",
    "Se estima como fecha probable de alta o traslado",
    "Problemas para la continuidad en la atenci\u00f3n",
    "Posibles necesidades y requerimientos al egreso",
    "Decisiones tomadas en reuniones multidisciplinarias",
    "Neurol\u00f3gico",
    "Cardiovascular",
    "Asistencia kin\u00e9sica motriz",
    "Respiratorio",
    "AKR",
    "Gastrointestinal",
    "Genitourinario",
    "Infectol\u00f3gico",
    "Hematol\u00f3gico",
    "Medio interno, \ufb02uidos, glucemias o endocrino",
    "Manejo del dolor",
    "Soporte vital avanzado",
    "Acciones educativas a implementar",
    "Aspectos psicosociales, culturales y religiosos que puedan afectar la atenci\u00f3n",
    "Informe que se le brinda a la familia",
    "Necesidad de interconsultas o reuniones interdisciplinarias, reuniones con la familia, evoluci\u00f3n por asistente social o salud mental"]

export const STRUCTURE_MAP = {
    [FORM_TYPES[0]]: EPICRISIS_STRUCTURE,
    [FORM_TYPES[1]]: ADMISSIONS_STRUCTURE,
    [FORM_TYPES[2]]: EVOLUTION_STRUCTURE
}
