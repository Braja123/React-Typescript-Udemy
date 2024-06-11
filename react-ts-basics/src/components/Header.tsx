import React, { Children, type ReactNode } from 'react'

interface imageObject {
    src: string;
    alt: string;
}

interface HeaderProps {
    image: imageObject
    children: ReactNode
}

const Header = ({image, children}: HeaderProps) => {
    console.log({...image});
    
  return (
    <header>
        <img {...image} />
        {children}
    </header>
  )
}

export default Header