import React from 'react'
import NavBarV2 from '../NavBarV2/NavBarV2'
// <MenuHeader />
// modalControl1 = { open } modalControl2 = { open2 }
const Layouts = ({children}) => {
  return (
    <>
<NavBarV2  />
      {children}
    </>
  )
}

export default Layouts
