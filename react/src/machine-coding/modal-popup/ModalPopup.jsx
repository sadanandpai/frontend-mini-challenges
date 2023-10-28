import styles from './Modal.module.css'

const ModalPopup = ({ showModal, setShowModal, title, content }) => {
  return (
    <>
      {showModal && (
        <div className={styles.overlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalWrapper} onClick={(e) => e.stopPropagation()}>
            <div>
              <h3>{title}</h3>
              <p>{content}</p>
              <button onClick={() => setShowModal(false)} className={styles.closebtn}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalPopup
