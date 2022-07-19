import React, { ReactElement } from 'react';
import '../styles/components/_layout.scss'

export const Layout: React.FC<{children: ReactElement}> = ({children}) => {
  return (
    <div className='layout_container'>
        {children}
    </div>
  )
}
