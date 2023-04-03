import { ChangeEvent, useState } from "react"

export const useForm = <T extends Object>(initialState: T) => {
  const [form, setForm] = useState(initialState)

  const handleChange = (e: ChangeEvent<HTMLSelectElement | HTMLTextAreaElement>, index?: number) => {
    if(index || index === 0) console.log(index)
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const resetForm = () => setForm(initialState)

  return { ...form, handleChange, resetForm }

}