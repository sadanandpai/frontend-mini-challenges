export  enum ToastType {
    SUCCESS = 'success',
    ERROR = 'error',
    WARNING = 'warning',
    INFO = 'info',
  }

 export enum VerticalAlignment {
    TOP = 'Top',
    BOTTOM = 'Bottom',

 }
 export enum HorizontalAlignment {
    LEFT = 'Left',
    RIGHT = 'Right',
 }

export interface ToastMessage {
    id: number;
    message: string;
    type: ToastType;
  }

 export  interface ToastItemProps extends ToastMessage {
    removeToast: (id:number) => void;
  }
  
  
 