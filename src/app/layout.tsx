//글로벌 레이아웃

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ROLL OUT COFFEE",
  description:
    "롤아웃커피는 신선한 커피와 함께 다양한 디저트를 제공합니다. 편안한 분위기에서 특별한 시간을 보낼 수 있는 커피숍입니다.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div>
          {/* <Header/> */}
          <main>{children}</main>
          {/* <Footer/> */}
        </div>
      </body>
    </html>
  );
}
