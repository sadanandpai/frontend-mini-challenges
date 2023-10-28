import { useState } from 'react'
import styles from './Modal.module.css'
import ModalPopup from './ModalPopup'
import modaldata from './modaldata'

const App = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button className={styles.openbtn} onClick={()=>setShowModal(true)}>Open Modal</button>
      <ModalPopup showModal={showModal} setShowModal={setShowModal} title={modaldata.title} content ={modaldata.content}/>
    </>
  )
}

export default App
