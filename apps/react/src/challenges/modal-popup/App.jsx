import { useState } from 'react'
import { createPortal } from 'react-dom'
import styles from './Modal.module.css'
import ModalPopup from './ModalPopup'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  const modaldata = {
    title: "Modal Heading",
    content: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error, voluptates. Nobis delectus magni quaerat et deserunt fuga temporibus doloribus vero quidem repellat suscipit nulla tempora eveniet, repellendus deleniti placeat quibusdam."
  }

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
