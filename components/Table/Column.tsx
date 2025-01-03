import { InfoMiniFicha } from "@/types/ficha";
import MiniFicha from "@/components/MiniFicha/MiniFicha";
import { DataFicha } from "@/types/ficha";
import Image from "next/image";

interface ColumnProps {
  dataFichas: DataFicha[];
  bgColor: string;
  title: string;
  type: Symbol;
  onDragStart: (id: number) => void;
  onDragDrop: (column: Symbol) => void;
  onDragOver: (event: React.DragEvent<HTMLDivElement>) => void;
  iconLeft?: string;
  iconRight?: string;
  iconLeftColor?: string;
  iconRightColor?: string;
}


function Column({ dataFichas, bgColor, title, type, onDragStart, onDragDrop, onDragOver, iconLeft, iconRight, iconLeftColor, iconRightColor}: ColumnProps) {
  return (
    <div 
      className={`w-1/4 mx-2 rounded-md min-h-full h-full ${bgColor}`}
      onDrop={() => onDragDrop(type)}
    >

      <div className="relative bg-gray-200 flex items-center justify-center rounded-t-md text-sm py-3 text-base">
        {title}

        {
          iconLeft && (
            <div className={`absolute ${iconLeftColor} left-2 top-[30%] rounded-full p-1`}>
              <Image src={iconLeft} width={15} height={15} alt="icon"/>
            </div>
          )
        }
        {
          iconRight && (
            <div className={`absolute ${iconRightColor} right-2 top-[30%] rounded-full p-1`}>
              <Image src={iconRight} width={15} height={15} alt="icon"/>
            </div>
          )
        }
      </div>

      <div className="h-full w-full flex flex-col gap-8 py-5 justify-start align-center overflow-y-auto">
        {
          dataFichas.map((data, index) => (
            <div key={index} className="w-full flex justify-center">
              <MiniFicha dataFicha={data} onDragStart={onDragStart}/>
            </div>
          ))
        }
      </div>

    </div>
  );
}

export default Column;