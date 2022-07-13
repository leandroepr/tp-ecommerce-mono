import React from 'react'


type FlexProps = {
  children: React.ReactNode
  className?: string
}

export default function Flex ({children, className}: FlexProps) {
  return(
    <div className={`flex justify-center ${className}`}>
      {children}
    </div>
  )
}