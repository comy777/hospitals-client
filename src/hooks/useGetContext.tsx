import { useContext } from "react"
import { AppContext } from "../context/Appcontext"

export const useGetContext = () => {
  
  const state = useContext(AppContext)

  return { ...state }

}