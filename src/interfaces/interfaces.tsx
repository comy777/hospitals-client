import { Question } from "./response"

export interface QuestionByHerder {
  header: string
  questions: Question[]
  page: number
}