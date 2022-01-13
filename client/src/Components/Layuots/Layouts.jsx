import React from 'react'
import NavBar from '../NavBar/NavBar'
// <MenuHeader />
// modalControl1 = { open } modalControl2 = { open2 }
const Layouts = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}

export default Layouts
