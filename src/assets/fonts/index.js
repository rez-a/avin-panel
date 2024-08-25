import localFont from 'next/font/local';
const mikhak = localFont({
  src: [
    {
      path: '../../../public/fonts/mikhak/Mikhak-Thin.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-Light.ttf',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-ExtraLight.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-Medium.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-Regular.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-SemiBold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-ExtraBold.ttf',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../../public/fonts/mikhak/Mikhak-Black.ttf',
      weight: '900',
      style: 'normal',
    },
  ],
  variable: '--font-mikhak',
  preload: true,
});

export { mikhak };
