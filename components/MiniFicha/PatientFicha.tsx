import Image from 'next/image';

interface PatientFichaProps {
  name: string;
  age: number;
}


function PatientFicha({ name, age }: PatientFichaProps) {
  return (
    <div className="flex flex gap-2">
      <Image src="/face_24px.svg" width={20} height={20} alt="icon"/>
      <div className="flex flex-col items-start text-base font-bold">
        <div>{name}</div>
        <div>{age} años</div>
      </div>
    </div>
  );
}

export default PatientFicha;