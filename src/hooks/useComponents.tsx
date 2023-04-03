import { useForm } from "./useForm"
import { useGetContext } from "./useGetContext"

export const useComponents = () => {
  const { comentario, handleChange, resetForm } = useForm({ comentario: '' })
  const { idQuestion, modal, setModal, setComentario } = useGetContext()

  const handleSaveComentario = () => {
    if(!idQuestion || !comentario) return
    setComentario(comentario)
    resetForm()
  }

  return { modal, idQuestion, comentario,handleChange, handleSaveComentario, setModal }

}