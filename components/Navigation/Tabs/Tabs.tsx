'use client';
import React from "react";
import TabItem from './TabItem';
import { useState } from 'react';

function Tabs() {
  const [activeTab, setActiveTab] = useState(3);

  const onClickTab = (index: number) => {
    setActiveTab(index);
  }

  return (
    <div className="tabs flex width-full height-[28px] gap-16 border-b border-b-2 border-b-[var(--primary)] px-8">
      <TabItem id={1} onClick={onClickTab} active={activeTab === 1}>
        Agenda
      </TabItem>
      <TabItem id={2} onClick={onClickTab} active={activeTab === 2}>
        Programación
      </TabItem>
      <TabItem id={3} onClick={onClickTab} active={activeTab === 3}>
        Priorización
      </TabItem>
      <TabItem id={4} onClick={onClickTab} active={activeTab === 4}>
        Solicitudes
      </TabItem>
      <TabItem id={5} onClick={onClickTab} active={activeTab === 5}>
        Tabla Final
      </TabItem>
    </div>
  );
}

export default Tabs;