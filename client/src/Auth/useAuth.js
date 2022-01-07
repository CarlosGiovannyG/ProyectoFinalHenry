import { useContext } from 'react'
import { AuthContex } from './AuthProvider'

const useAuth = () => {
  const contextValue = useContext(AuthContex)
  return contextValue
}

export default useAuth
