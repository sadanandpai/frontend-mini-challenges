import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import ModalPopup from './ModalPopup'
import modaldata from './modaldata'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className={styles.openbtn} onClick={() => setShowModal(true)}>Open Modal</button>

      {/* Ideally modal dialogs should be rendered as a direct child of the body */}
      {createPortal(
        <ModalPopup
          showModal={showModal}
          setShowModal={setShowModal}
          title={modaldata.title}
          content={modaldata.content}
        />,
        document.body
      )}
    </>
  )
}

export default App
