import styles from './toast.module.scss';
import { ToastItemProps } from './types';

export const ToastItem = ({ id, message, type, removeToast }: ToastItemProps) => {
  return (
    <div className={`${styles.toast} ${styles[type]}`}>
      <span className="toast-message">{message}</span>
      <button className={styles.remove} onClick={() => removeToast(id)}>
        &#x2715;
      </button>
    </div>
  );
};
