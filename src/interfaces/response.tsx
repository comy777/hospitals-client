// Generated by https://quicktype.io

export interface PagesResponse {
  pages: Page[];
}

export interface Page {
  _id: string;
  title: string;
  __v: number;
}

export interface QuestionsResponse {
  questions: Question[];
}

export interface Question {
  _id: string;
  header: string;
  area: string;
  question: string;
  page: string;
  __v: number;
  cumple?: string
  comentario?: string
}
