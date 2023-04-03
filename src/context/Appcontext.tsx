import { createContext } from 'react'
import { useContextApp } from '../hooks/useContextApp'
import { StateContext } from '../interfaces/context'

export const AppContext = createContext({} as StateContext)

export function AppContextProvider({ children }: any){

  const { state, setIdPage, setModal, setComentario, restoreComentario } = useContextApp()

  return(
    <AppContext.Provider value={{ ...state, setIdPage, setModal, setComentario, restoreComentario }}>
      { children }
    </AppContext.Provider>
  )
  
}