'use client';
import { useState } from 'react';
import Column from './Column';
import { InfoMiniFicha } from '@/types/ficha';
import { DataFicha } from '@/types/ficha';
import { COLUMN_TYPE } from '@/constants/ficha';
import React from 'react';
import { DATA_FICHAS_TEST } from '@/constants/data_fichas';


function Table(){
  const [dataFichas, setDataFichas] = useState<DataFicha[]>(DATA_FICHAS_TEST);
  const [draggedItem, setDraggedItem] = useState<DataFicha | null>(null);

  const fichasCol1 = dataFichas.filter(ficha => ficha.column === COLUMN_TYPE.NO_SE_PROGRAMA);
  const fichasCol2 = dataFichas.filter(ficha => ficha.column === COLUMN_TYPE.SOLICITUDES_PENDIENTES);
  const fichasCol3 = dataFichas.filter(ficha => ficha.column === COLUMN_TYPE.POR_PROGRAMAR);
  const fichasCol4 = dataFichas.filter(ficha => ficha.column === COLUMN_TYPE.EN_PROGRAMACION);

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }

  const handleDragStart = (id: number) => {
    const dragged = dataFichas.find(ficha => ficha.id === id);
    if (dragged) {
      setDraggedItem(dragged);
    }
  }

  const handleDragDrop = (column: Symbol) => {
    if (draggedItem === null) return;

    const updatedFichas = dataFichas.filter(ficha => ficha.id !== draggedItem.id);
    const updatedItem = {...draggedItem, column};
    updatedFichas.splice(0, 0, updatedItem);

    setDraggedItem(null);
    setDataFichas(updatedFichas);
  }

  return (
    <div
      className="w-full flex justify-between mt-5 h-screen min-h-full"
      onDragOver={handleDragOver}
    >

      <Column 
        title="No se programa" 
        type={COLUMN_TYPE.NO_SE_PROGRAMA}
        bgColor="bg-light_red"
        dataFichas={fichasCol1}
        iconRight="arrow-right.svg"
        iconRightColor="bg-sky_blue"
        onDragStart={handleDragStart}
        onDragDrop={handleDragDrop}
        onDragOver={handleDragOver}
      />
      <Column 
        title="Solicitudes Pendientes" 
        type={COLUMN_TYPE.SOLICITUDES_PENDIENTES}
        bgColor="bg-light_blue" 
        dataFichas={fichasCol2}
        iconLeft="arrow-left.svg"
        iconLeftColor="bg-light_red"
        iconRight="arrow-right.svg"
        iconRightColor="bg-sky_blue"
        onDragStart={handleDragStart}
        onDragDrop={handleDragDrop}
        onDragOver={handleDragOver}
      />
      <Column 
        title="Por Programar" 
        type={COLUMN_TYPE.POR_PROGRAMAR}
        bgColor="bg-sky_blue" 
        dataFichas={fichasCol3}
        iconRight="arrow-right.svg"
        iconRightColor="bg-sky_blue"
        onDragStart={handleDragStart}
        onDragDrop={handleDragDrop}
        onDragOver={handleDragOver}
      />
      <Column 
        title="En Programación" 
        type={COLUMN_TYPE.EN_PROGRAMACION}
        bgColor="bg-light_green" 
        dataFichas={fichasCol4}
        iconRight="check-lg.svg"
        iconRightColor="bg-light_green"
        onDragStart={handleDragStart}
        onDragDrop={handleDragDrop}
        onDragOver={handleDragOver}
      />
    </div>
  );
};

export default Table;