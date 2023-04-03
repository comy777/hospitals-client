export interface StateInitialProps {
  idPage: string | undefined
  modal: boolean
  idQuestion: string | undefined
  comentarioState: string
}

export interface StateContext extends StateInitialProps {
  setIdPage: (id?: string) => void
  setModal: (id?: string) => void
  setComentario: (comentario: string) => void
  restoreComentario: () => void
}