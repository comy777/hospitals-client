import { PagesResponse, QuestionsResponse } from "../interfaces/response"
import { apiHospitals } from "./config"

export const getPagesApi = async ():Promise<PagesResponse | undefined> => {
  try {
    const { data } = await apiHospitals.get<PagesResponse>('/pages')
    return data
  } catch (error) {
    console.log(error)
  }
}

export const getQuestionsByPageApi = async (id: string):Promise<QuestionsResponse | undefined> => {
  try {
    const { data } = await apiHospitals.get<QuestionsResponse>(`/questions/${id}`)
    return data
  } catch (error) {
    console.log(error)
  }
}

export const saveResponsesApi = async (page: string, responses: any) => {
  try {
    const { data } = await apiHospitals.post<QuestionsResponse>(`/${page}`, responses)
    return data
  } catch (error) {
    console.log(error)
  }
}