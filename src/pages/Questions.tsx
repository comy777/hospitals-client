import { useQuestions } from "../hooks/useQuestions"

export default function Questions() {

  const { loading, state, page, handleChangePage, saveResponse, saveData } = useQuestions()

  if (loading) return <>Cargando...</>

  return (
    <div className="px-4">
      <div>
        <div>
          {
            <div className="bg-slate-500 p-4 my-4">
              <h1 className="font-bold text-white">{state[page - 1].header}</h1>
            </div>
          }
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Pregunta</th>
                <th scope="col" className="px-6 py-3">Cumple</th>
                <th scope="col" className="px-6 py-3">comentario</th>
              </tr>
            </thead>
            <tbody>
              {
                state[page - 1].questions.map((value, i) => (
                  <tr key={i.toString()} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="h-24 px-6 py-4 font-medium text-gray-900 dark:text-white text-justify md:w-[60%] sm:w-[35%]">
                      {value.question}
                    </th>
                    <td className="md:px-6 md:py-4 sm:px-2">
                      <select
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={(e) => saveResponse(value._id, 'cumple', e.target.value)}
                        value={value.cumple}
                      >
                        <option value="select">Select</option>
                        <option value="cumple">Cumple</option>
                        <option value="no cumple">No cumple</option>
                        <option value="no aplica">No aplica</option>
                      </select>
                    </td>
                    <td className="px-6 py-4 w-[28%]">
                      <textarea
                        className="w-full p-4"
                        onBlur={(e) => saveResponse(value._id, 'comentario', e.target.value)}
                        value={value.comentario}
                        onChange={(e) => saveResponse(value._id, 'comentario', e.target.value)}
                        name="comentario"
                      />
                    </td>
                  </tr>
                ))
              }

            </tbody>
          </table>
        </div>
        <div className="flex justify-between my-4">
          <p>Page {page} of {state.length}</p>
          <div className="flex justify-around w-[25%]">
            {(page > 1 && page < state.length) && (
              <button
                onClick={() => handleChangePage(false)}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Prev page
              </button>
            )}
            {
              page === state.length ? (
                <button
                  onClick={saveData}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Save
                </button>
              ) : (
                <button
                  onClick={() => handleChangePage(true)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Next page
                </button>
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
