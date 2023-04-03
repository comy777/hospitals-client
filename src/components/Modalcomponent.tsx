import Modal from 'react-modal'
import { useComponents } from '../hooks/useComponents';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'white',
    height: 'auto',
    width: 'auto',
  },
};

Modal.setAppElement("#root")

export default function Modalcomponent() {
  const { modal, comentario, idQuestion, setModal, handleChange, handleSaveComentario } = useComponents()

  const afterOpenModal = () => {
    // references are now sync'd and can be accessed.
  }

  const closeModal = () => setModal()

  return (
    <div>
      <Modal
        isOpen={modal}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='h-full flex justify-center items-center p-8'>
          <div>
            <div className='mb-4'>
              <h1 className='text-center'>Comentario</h1>
            </div>
            <textarea
              className="p-4 w-96 border-2"
              value={comentario}
              onChange={handleChange}
              name="comentario"
              rows={8}
            />
            <div className='flex justify-center'>
              <button 
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={handleSaveComentario}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  )
}
