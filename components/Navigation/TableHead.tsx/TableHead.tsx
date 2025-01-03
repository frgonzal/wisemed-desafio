import Image from "next/image";
import Select from "@/components/Select/Select";

function TableHead() {
  return (
    <div className="bg-[var(--light-blue)] pl-4 pr-2 py-4 flex justify-between items-center">

      <div className="flex gap-1 items-center">
        <Image src="/Checkup.svg" width={28} height={28} alt="icon"/>
        <div className="text-2xl font-bold text-primary"> 
          Tabla de Evaluación Quirúrgica
        </div>
      </div>

      <div className="flex gap-4 w-[50%]">
        <Select title="Especialidad" content={["Traumatología", "Cardiología", "Neurología"]}/>
        <Select title="Médico Asignado" content={["Dr. Juan Perez", "Dr. Maria Lopez", "Dr. Pedro Ramirez"]}/>
      </div>

    </div>

  );
}

export default TableHead;