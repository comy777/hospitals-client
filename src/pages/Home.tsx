import { useHome } from "../hooks/useHome"

export default function Home() {

  const { page, loading, dataPages, handleChange, handleNavigate } = useHome()
  
  if (loading) return <>Cargando...</>

  return (
    <div className="flex justify-center items-center">
      <div className="w-96">
        <div className="mb-4">
          <h3 className="text-center">Seleccione el area</h3>
        </div>
        <form onSubmit={handleNavigate}>
          <select
            value={page}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={handleChange}
            name="page"
          >
            <option disabled>Select an option</option>
            {
              dataPages.map((page) => (
                <option value={page._id} key={page._id}>{page.title}</option>
              ))
            }
          </select>
          <div className="flex justify-center items-center mt-4">
            {
              page !== 'Select an option' && (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  type="submit"
                >
                  Seleccionar
                </button>
              )
            }
          </div>
        </form>
      </div>
    </div>
  )
}
