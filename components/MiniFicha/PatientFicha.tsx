import Image from 'next/image';
import faceIcon from '@/public/face.svg';

interface PatientFichaProps {
  name: string;
  age: number;
}


function PatientFicha({ name, age }: PatientFichaProps) {
  return (
    <div className="flex gap-2">
      <Image src={faceIcon} width={20} height={20} alt="icon"/>
      <div className="flex flex-col items-start text-base font-bold">
        <div>{name}</div>
        <div>{age} años</div>
      </div>
    </div>
  );
}

export default PatientFicha;