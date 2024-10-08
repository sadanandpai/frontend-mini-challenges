import { useState } from 'react';
import { Dialog } from './dialog';
import styles from './styles.module.scss';

const data = {
  title: 'Modal Heading',
  content: (
    <div style={{ padding: '1rem 0' }}>
      This is modal content. You can put any content here. This has a groovy backdrop!
      <br />
      You can also close this modal by clicking outside of it or pressing the escape key
    </div>
  ),
};

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [closeOnOutsideClick, setCloseOnOutsideClick] = useState(true);
  const [closeOnEscape, setCloseOnEscape] = useState(true);
  const [hasCloseIcon, setHasCloseIcon] = useState(true);
  const [hasBackdrop, setHasBackdrop] = useState(true);

  return (
    <>
      <div className={styles.form}>
        <div>
          <label htmlFor="closeOnOutsideClick">Close dialog on outside click</label>
          <input
            type="checkbox"
            id="closeOnOutsideClick"
            checked={closeOnOutsideClick}
            onChange={() => setCloseOnOutsideClick(!closeOnOutsideClick)}
          />
        </div>

        <div>
          <label htmlFor="closeOnEscape">Close dialog on escape</label>
          <input
            type="checkbox"
            id="closeOnEscape"
            checked={closeOnEscape}
            onChange={() => setCloseOnEscape(!closeOnEscape)}
          />
        </div>

        <div>
          <label htmlFor="hasCloseButton">Show close icon</label>
          <input
            type="checkbox"
            id="hasCloseButton"
            checked={hasCloseIcon}
            onChange={() => setHasCloseIcon(!hasCloseIcon)}
          />
        </div>

        <div>
          <label htmlFor="hasBackdrop">Show backdrop</label>
          <input
            type="checkbox"
            id="hasBackdrop"
            checked={hasBackdrop}
            onChange={() => setHasBackdrop(!hasBackdrop)}
          />
        </div>

        <button onClick={() => setIsModalOpen(true)}>Open Modal</button>
      </div>

      <Dialog
        data={data}
        isModalOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        hasCloseIcon={hasCloseIcon}
        closeOnEscape={closeOnEscape}
        closeOnOutsideClick={closeOnOutsideClick}
        hasBackdrop={hasBackdrop}
      />
    </>
  );
};

export default App;
