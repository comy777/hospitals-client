import { useState } from "react"
import { StateInitialProps } from "../interfaces/context"

export const useContextApp = () => {

  const [state, setState] = useState<StateInitialProps>({ idPage: undefined, modal: false, idQuestion: undefined, comentarioState: '' })

  const setIdPage = (id?: string) => setState({ ...state, idPage: id })

  const setModal = (id?: string) => setState({ ...state, modal: !state.modal, idQuestion: id })

  const setComentario = (comentario: string) => setState({ ...state, comentarioState: comentario })

  const restoreComentario = () => setState({ ...state, modal: false, comentarioState: '', idQuestion: undefined })

  return { state, setIdPage, setModal, setComentario, restoreComentario }
  
}