import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: '생각하는 손 미술학원',
  description: '아이의 생각이 그림이 되는 공간 — 인천 송도 에스파이브시티 704호',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
