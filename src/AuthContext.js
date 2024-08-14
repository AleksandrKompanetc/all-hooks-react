import { createContext, Dispatch, SetStateAction, FC, useMemo, useState } from "react";

interface IContext {
  isAuth: Boolean,
  setIsAuth: Dispatch<SetStateAction<boolean>>
}

export const AuthProvider:FC = ({children}) => {
  const [isAuth, setIsAuth] = useState(false)

  const value = useMemo(() => ({
    isAuth,
    setIsAuth
  }), [isAuth])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)