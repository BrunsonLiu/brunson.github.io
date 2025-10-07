import { Inter, Noto_Sans_SC } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const notoSansSC = Noto_Sans_SC({ subsets: ['latin'], weight: ['400', '700'], variable: '--font-noto-sans-sc' });

export const metadata = {
  title: 'Brunson的学术主页',
  description: '武汉大学管理科学研究生Brunson的个人学术主页，专注于优化、机器学习和算法。',
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <head>
        <link rel="icon" href="/favicon.ico" />
        {/* FontAwesome图标库 */}
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
        {/* Slick轮播CSS */}
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.min.css" />
      </head>
      <body className={`${inter.variable} ${notoSansSC.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}