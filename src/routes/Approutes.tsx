import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/Home'
import Questions from '../pages/Questions'

const router = createBrowserRouter([
  {
    path: '/',
    Component: Home
  },
  {
    path: '/questions',
    Component: Questions
  }
])

export function AppRouter(){
  return (
    <RouterProvider router={router} />
  )
}