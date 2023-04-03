import { QuestionByHerder } from "../interfaces/interfaces";
import { Question } from "../interfaces/response";

export const orderQuestionsByHeader = (data: Question[]): QuestionByHerder[] => {
  let newData: QuestionByHerder[] = []
  let oldData: string = ''
  let contador = 0
  let questions: any[] = []
  let page = 1

  data.forEach((value, i) => {
    const { header, ...res } = value
    if (!header) {
      questions[contador] = { ...res }
      contador++
    }
    if (header || i === data.length - 1) {
      newData.push({ header: oldData, questions, page: 0 })
      contador = 0
      questions = []
      oldData = header
    }
  })

  const newResponse: QuestionByHerder[] = []

  newData.forEach((value, i) => {
    const { questions, header } = value
    const newQuestions: Question[] = []
    questions.forEach((question) => {
      newQuestions.push({ ...question, cumple: 'select', comentario: '' })
    })
    if(header || questions.length > 0) {
      newResponse.push({ ...value, questions: newQuestions, page })
      page++
    }
  })

  return newResponse

}

export const validateResponseByPage = (data: QuestionByHerder): boolean => {
  let bandera = true
  const { questions } = data
  questions.forEach((value) => {
    if(!bandera) return
    const { comentario, cumple } = value
    if(cumple === 'select') bandera = false
    if(cumple === 'no cumple' && !comentario) bandera = false
  })
  return bandera
}

export const getResponses = (data: QuestionByHerder[]) => {
  const responses: any[] = []
  data.forEach((q) => {
    const { questions } = q
    questions.forEach((value) => {
      const { cumple, comentario, _id } = value
      responses.push({ cumple, comentario, id: _id })
    })
  })
  return responses
}