import { DataFicha } from "@/types/ficha"
import HeaderFicha from "./HeaderFicha";
import PatientFicha from "./PatientFicha";
import DetailsFicha from "./DetailsFicha";
import Select from "@/components/Select/Select";
import Image from "next/image";
import HeartIcon from "@/public/heart.svg";
import BloodIcon from "@/public/blood.svg";

interface MiniFichaProps {
  dataFicha: DataFicha;
  // idx: number;
  onDragStart: (id: number) => void;
}

function MiniFicha({ dataFicha, onDragStart }: MiniFichaProps) {
  const info = dataFicha.ficha;

  return (
    <div 
      className="bg-background rounded-md mx-2 max-w-[400px] cursor-pointer w-full border-2 border-primary shadow-lg"
      onDragStart={() => onDragStart(dataFicha.id)}
      draggable
    >
      <HeaderFicha title={info.specialty} subtitle={info.specialist}/>

      <div className="gap-1 flex flex-col p-4">
        <PatientFicha name={info.name} age={info.age}/>
        <DetailsFicha info={info}/>

        <div className="flex gap-1">
          <Image src={HeartIcon} width={25} height={25} alt="icon"/>
          <Image src={BloodIcon} width={25} height={25} alt="icon"/>
        </div>

        <Select title="Tipo de Urgencia" content={["Urgente", "Electiva"]} id={dataFicha.id.toString()}/>
      </div>

    </div>
  );
}

export default MiniFicha;