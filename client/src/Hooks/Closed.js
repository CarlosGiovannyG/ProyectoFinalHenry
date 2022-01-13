import React from 'react'
import { GrClose } from 'react-icons/gr'

const Closed = ({style,click,size}) => {
  
  return (
    <GrClose className={style} onClick={click} size={size} />
      
  )
}

export default Closed
