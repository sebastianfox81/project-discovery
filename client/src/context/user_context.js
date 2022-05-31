import React, { useContext, useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {

  const [ myUser, setMyUser ] = useState(null)

  const { isAuthenticated, loginWithRedirect, logout, user, isLoading} = useAuth0()

  useEffect(() => {
    if (isAuthenticated) {
      setMyUser(user)
    } else {
      setMyUser(false)
    }
  },[isAuthenticated])

  return (
    <UserContext.Provider value={{ loginWithRedirect, myUser, logout}}>{children}</UserContext.Provider>
  )
}
// make sure use
export const useUserContext = () => {
  return useContext(UserContext)
}
