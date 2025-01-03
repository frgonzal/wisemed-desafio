import { InfoMiniFicha } from "@/types/ficha";
import DetailRow from "./DetailRow";

interface DetailsFichaProps {
  info: InfoMiniFicha;
}

function DetailsFicha({ info }: DetailsFichaProps) {
  return (
    <div>
      <DetailRow title="Historia Clinica" content={info.medical_record.toString()}/>
      <DetailRow title="Diagnostico" content={info.diagnosis}/>
      <DetailRow title="Intervencion" content={info.intervention}/>
      <DetailRow title="Evaluacion Preanestesica" content={info.preanesthetic_evaluation ? "Sí" : "No"}/>
      <DetailRow title="Tiempo de solicitud" content={info.request_time_days.toString() + " días"}/>
      <DetailRow title="Suspensiones" content={info.suspensions.toString()}/>
    </div>
  )
}

export default DetailsFicha;