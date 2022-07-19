import React from 'react';
import '../styles/components/_doublering.scss';

interface IRing {
    text?:string
}

export const DoubleRing:React.FC<IRing> = (IRing) => {
  return (
    <div className='doublering_'> 
        <div className='doublering_container'>
            <div className="doublering_content">
            </div>
        </div>
        <p>{IRing?.text}</p>
    </div>
  )
}