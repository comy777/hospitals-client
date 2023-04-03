import { MouseEvent, useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'
import { Page } from "../interfaces/response"
import { getPagesApi } from "../api/hospital"
import { useForm } from "./useForm"
import { useGetContext } from "./useGetContext"

export const useHome = () => {

  const navigation = useNavigate()
  const { setIdPage } = useGetContext()
  const { page, handleChange } = useForm({ page: 'Select an option' })
  const [loading, setLoading] = useState(true)
  const [dataPages, setDataPages] = useState<Page[]>([])

  const getPages = async () => {
    const data = await getPagesApi()
    if(!data) return
    const { pages } = data
    setDataPages(pages)
    setLoading(false)
  }

  const handleNavigate = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    if(page === 'Select an option') return
    setIdPage(page)
    navigation('/questions')
  }

  useEffect(() => {
    getPages()
  }, [])
  
  return { page, loading, dataPages, handleChange, handleNavigate }
}