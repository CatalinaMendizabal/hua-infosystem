export const FORM_TYPES = [
    'Epicrisis adultos y pediatria',
    'Admisiones internación adultos',
    'Evolución'
]

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

export const STRUCTURE_MAP = {
    [FORM_TYPES[0]]: EPICRISIS_STRUCTURE,
    [FORM_TYPES[1]]: ADMISSIONS_STRUCTURE,
    [FORM_TYPES[2]]: []
}
