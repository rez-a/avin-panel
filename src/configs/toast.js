import { mikhak } from '@/assets/fonts';

const toastConfigsDefault = {
  closeButton: true,
  expand: true,
  toastOptions: {
    duration: 2500,
    classNames: {
      title: `${mikhak.className}`,
      toast:
        'flex items-center rounded p-3.5 hover:p-3.5 border-0 transition-all',
      error: 'text-danger bg-danger-light shadow-md shadow-danger/30',
      success:
        'text-success bg-success-light-500 shadow-md shadow-success/30',
      warning:
        'text-warning bg-warning-light shadow-md shadow-warning/30',
      info: 'text-info bg-info-light shadow-md shadow-info/30',
      closeButton:
        'border-inherit right-full translate-x-8 top-1/2 -translate-y-1/2',
    },
  },

  position: 'top-center',
};
export default toastConfigsDefault;
