
import { useToast } from './hooks/useToast'
import styles from './toast.module.scss';
import {ToastType, VerticalAlignment, HorizontalAlignment } from './types';
import { ToastItem } from './toastItem';

const Toast = () => {
  const {
    horizontalPosition,
    verticalPosition,
    type,
    message,
    duration,
    toastMessages,
    setHorizontalPosition,
    setVerticalPosition,
    setType,
    setMessage,
    setDuration,
    showToast,
    removeToast
  } = useToast();
  const toastClassName = `tc${horizontalPosition}${verticalPosition}`
  

  return (
    <div className={styles.main}>
      <form>
        <select name="position" id="horizontal-position" value={horizontalPosition} onChange={(e) => setHorizontalPosition(e.target.value as HorizontalAlignment)}>
          <option value={HorizontalAlignment.LEFT}>Left</option>
          <option value={HorizontalAlignment.RIGHT}>Right</option>
        </select>

        <select name="position" id="vertical-position" value={verticalPosition} onChange={(e) => setVerticalPosition(e.target.value as VerticalAlignment)}>
          <option value={VerticalAlignment.TOP}>Top</option>
          <option value={VerticalAlignment.BOTTOM}>Bottom</option>
        </select>

        <select name="type" id="type" value={type} onChange={(e) => setType(e.target.value as ToastType)}>
          <option value={ToastType.SUCCESS}>Success</option>
          <option value={ToastType.ERROR}>Error</option>
          <option value={ToastType.WARNING}>Warning</option>
          <option value={ToastType.INFO}>Info</option>
        </select>

        <input
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <label htmlFor="duration" className="flex">
          Duration{' '}
          <input
            type="range"
            name="duration"
            id="duration"
            min="3"
            max="10"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />
        </label>

        <button type="button" className="btn btn-primary" onClick={showToast}>
          Show Toast
        </button>
      </form>
      {toastMessages.length > 0 && (
        <div className={`${styles.toastContainer} ${styles[toastClassName]}`}>
          {toastMessages.map((msg) => (
            <ToastItem key={msg.id} {...msg} removeToast={removeToast}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Toast;