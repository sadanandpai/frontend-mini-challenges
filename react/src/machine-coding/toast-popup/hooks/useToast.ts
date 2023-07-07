import { useState, useEffect } from 'react';
import { ToastMessage, ToastType, VerticalAlignment, HorizontalAlignment } from '../types';

export const useToast = () => {
  const [horizontalPosition, setHorizontalPosition] = useState<HorizontalAlignment>(HorizontalAlignment.LEFT);
  const [verticalPosition, setVerticalPosition] = useState<VerticalAlignment>(VerticalAlignment.TOP);
  const [type, setType] = useState<ToastType>(ToastType.SUCCESS);
  const [message, setMessage] = useState<string>('This is a toast message!');
  const [duration, setDuration] = useState<number>(5);
  const [toastMessages, setToastMessages] = useState<ToastMessage[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const timerIds: any = [];
  useEffect(() => {
    

    return () => {
      timerIds.forEach((timerId) => clearTimeout(timerId));
    };
  }, []);

  const showToast = () => {
    const newToast: ToastMessage = {
      id: Date.now(),
      message,
      type,
    };

    setToastMessages((prevMessages) => [...prevMessages, newToast]);

    const timerId = setTimeout(() => {
      setToastMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== newToast.id));
    }, duration * 1000);

    timerIds.push(timerId);
  };

  const removeToast = (id: number) => {
    setToastMessages((prevMessages) => prevMessages.filter((msg) => msg.id !== id));
  };

  return {
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
    removeToast,
  };
};
