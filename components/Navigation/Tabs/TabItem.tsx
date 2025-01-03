import React from 'react'

interface TabItemProps {
  children: React.ReactNode
  id: number
  onClick: (id: number) => void
  active?: boolean
}

function TabItem({ children, id, onClick, active = false}: TabItemProps) {
  return (
    <div 
      className={`${active && 'text-[var(--primary)] border-b border-b-2 border-b-[var(--primary)]'} cursor-pointer`}
      onClick={() => onClick(id)}
    >
      {children}
    </div>
  )
}

export default TabItem;