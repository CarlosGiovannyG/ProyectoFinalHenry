import React from 'react'
import { CSSTransition } from 'react-transition-group';
import s from './transition.module.css'
const Transsition = ({ children }) => {
  
 
  return (
    <CSSTransition
      in={true}
      timeout={0}
      appear={true}
      key={0}
      classNames={{ appear: s.MyClassEnterActive, enterDone: s.MyClassEnterDone }}
    >
     
        {children}
      
    </CSSTransition>
  )
}

export default Transsition
