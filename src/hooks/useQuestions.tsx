import { useEffect, useState } from "react"
import { toast } from 'react-toastify'
import { getQuestionsByPageApi, saveResponsesApi } from "../api/hospital"
import { QuestionByHerder } from "../interfaces/interfaces"
import { getResponses, orderQuestionsByHeader, validateResponseByPage } from "../utils/questions"
import { useForm } from "./useForm"
import { useGetContext } from "./useGetContext"

export const useQuestions = () => {

  const [state, setState] = useState<QuestionByHerder[]>([])
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const { idPage, comentarioState, idQuestion, setModal, restoreComentario } = useGetContext()
  const { cumple, comentario, handleChange } = useForm({ cumple: '', comentario: '' })

  const getQuestionsByPage = async () => {
    if(!idPage) {
      setLoading(false)
      return
    }
    const resp = await getQuestionsByPageApi(idPage)
    setLoading(false)
    if(!resp) return
    const { questions } = resp
    const orderByHeader = orderQuestionsByHeader(questions)
    setState([...orderByHeader])
  }

  const handleChangePage = (next: boolean) => {
    const validate = validateResponseByPage(state[page - 1])
    if(!validate) {
      toast.error('Todos los campos son obligatorios', { position: toast.POSITION.TOP_CENTER })
      return
    }
    if(page === state.length) return
    if(!next && page === 1) return
    const newPage = next ? page + 1 : page - 1
    setPage(newPage)
  }
  
  
  const saveResponse = (id: string, campo: 'cumple' | 'comentario', value?: string) => {
    if(!value) return
    const newValue = campo === 'cumple' ? { cumple: value } : { comentario: value }
    if(campo === 'cumple' && value === 'no cumple'){
      setModal(id)
      return 
    }
    const { questions } = state[page - 1]
    const result = questions.map((q) => q._id === id ? { ...q, ...newValue } : q)
    const newState = state.map((values) => values.page === page ? { ...values, questions: result } : values)
    setState(newState)
  }

  const handleSaveComentario = () => {
    if(!idQuestion || !comentarioState) return
    const { questions } = state[page - 1]
    const result = questions.map((q) => q._id === idQuestion ? { ...q, comentario: comentarioState, cumple: 'no cumple' } : q)
    const newState = state.map((values) => values.page === page ? { ...values, questions: result } : values)
    setState(newState)
    restoreComentario()
  }

  const saveData = async () => {
    if(!idPage) return
    const data = getResponses(state)
    await saveResponsesApi(idPage, data)
  }


  useEffect(() => {
    getQuestionsByPage()
  }, [idPage])

  useEffect(() => {
    if(comentarioState) handleSaveComentario()
  }, [comentarioState])
  
  return { state, loading, page, handleChangePage, saveResponse, handleChange, saveData }

}