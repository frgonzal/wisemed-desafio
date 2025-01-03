import { DataFicha } from "@/types/ficha"
import { COLUMN_TYPE } from "@/constants/ficha";

export const DATA_FICHAS_TEST: DataFicha[] = [
  {
    id: 1,
    column: COLUMN_TYPE.SOLICITUDES_PENDIENTES,
    ficha: {
      specialist: "Dr. José Pedro Sans",
      specialty: "Traumatología",
      name: "Jorge Avendaño Pérez",
      age: 35,
      medical_record: 77884,
      diagnosis: "Calcificación Talón",
      intervention: "Extirpación en talón",
      preanesthetic_evaluation: true,
      request_time_days: 3,
      suspensions: 2,
    }
  },
  {
    id: 2,
    column: COLUMN_TYPE.POR_PROGRAMAR,
    ficha: {
      specialist: "Dr. Ana María López",
      specialty: "Cardiología",
      name: "Carlos Herrera Díaz",
      age: 58,
      medical_record: 12345,
      diagnosis: "Insuficiencia cardíaca",
      intervention: "Colocación de marcapasos",
      preanesthetic_evaluation: true,
      request_time_days: 2,
      suspensions: 1,
    }
  },
  {
    id: 3,
    column: COLUMN_TYPE.POR_PROGRAMAR,
    ficha: {
      specialist: "Dra. Luisana Pérez",
      specialty: "Pediatría",
      name: "Lucía Fernández Rivera",
      age: 10,
      medical_record: 67890,
      diagnosis: "Asma severa",
      intervention: "Terapia respiratoria intensiva",
      preanesthetic_evaluation: false,
      request_time_days: 1,
      suspensions: 0,
    }
  },
  {
    id: 4,
    column: COLUMN_TYPE.EN_PROGRAMACION,
    ficha: {
      specialist: "Dr. Marcos Jiménez",
      specialty: "Neurología",
      name: "María González Sánchez",
      age: 45,
      medical_record: 11223,
      diagnosis: "Epilepsia crónica",
      intervention: "Monitorización cerebral",
      preanesthetic_evaluation: true,
      request_time_days: 5,
      suspensions: 3,
    }
  },
  {
    id: 5,
    column: COLUMN_TYPE.NO_SE_PROGRAMA,
    ficha: {
      specialist: "Dr. Carolina Martínez",
      specialty: "Dermatología",
      name: "Andrés Pérez Cruz",
      age: 32,
      medical_record: 33456,
      diagnosis: "Melanoma",
      intervention: "Extirpación de tejido",
      preanesthetic_evaluation: true,
      request_time_days: 4,
      suspensions: 0,
    }
  },
  {
    id: 6,
    column: COLUMN_TYPE.SOLICITUDES_PENDIENTES,
    ficha: {
      specialist: "Dra. Fernando Ruiz",
      specialty: "Endocrinología",
      name: "Sofía Castillo Morales",
      age: 27,
      medical_record: 44567,
      diagnosis: "Diabetes tipo 1",
      intervention: "Ajuste de bomba de insulina",
      preanesthetic_evaluation: false,
      request_time_days: 3,
      suspensions: 2,
    }
  },
]
