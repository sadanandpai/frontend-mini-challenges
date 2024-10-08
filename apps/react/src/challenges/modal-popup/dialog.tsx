import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styles from './styles.module.scss';

interface Props {
  data: {
    title: string;
    content: React.ReactNode;
  };
  onClose: () => void;
  isModalOpen: boolean;
  closeOnOutsideClick?: boolean;
  closeOnEscape?: boolean;
  hasCloseIcon?: boolean;
  hasBackdrop?: boolean;
}

export const Dialog = ({
  data,
  onClose,
  isModalOpen,
  hasCloseIcon = true,
  closeOnOutsideClick = true,
  closeOnEscape = true,
  hasBackdrop = true,
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isModalOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isModalOpen]);

  return (
    <>
      {createPortal(
        <dialog
          className={`${styles.dialog} ${hasBackdrop ? styles.backdrop : ''}`}
          onClick={(event) => {
            if (closeOnOutsideClick && event.currentTarget === event.target) {
              onClose();
            }
          }}
          ref={dialogRef}
          onClose={onClose}
          onKeyDown={(event) => {
            if (!closeOnEscape && event.key === 'Escape') {
              event.preventDefault();
            }
          }}
        >
          <section>
            <header>
              <h2>{data.title}</h2>
              {hasCloseIcon && <button onClick={onClose}>&#x2715;</button>}
            </header>

            <div className="body">{data.content}</div>

            <footer>
              <button
                autoFocus={true}
                onClick={() => {
                  dialogRef.current?.close();
                }}
              >
                Close
              </button>
            </footer>
          </section>
        </dialog>,
        document.body
      )}
    </>
  );
};
