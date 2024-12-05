import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "ROLL OUT COFFEE",
  description:
    "롤아웃커피는 신선한 커피와 함께 다양한 디저트를 제공합니다. 편안한 분위기에서 특별한 시간을 보낼 수 있는 커피숍입니다.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "ROLL OUT COFFEE",
    description:
      "롤아웃커피는 신선한 커피와 함께 다양한 디저트를 제공합니다. 편안한 분위기에서 특별한 시간을 보낼 수 있는 커피숍입니다.", 
    siteName: "ROLL OUT COFFEE",
    images: [
      {
        url: "/thumbnail.jpg", 
        width: 1200, 
        height: 630, 
        alt: "ROLL OUT COFFEE 썸네일 이미지",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ROLL OUT COFFEE",
    description:
      "롤아웃커피는 신선한 커피와 함께 다양한 디저트를 제공합니다. 편안한 분위기에서 특별한 시간을 보낼 수 있는 커피숍입니다.",
    images: ["/thumbnail.jpg"], 
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
        <div className="flex flex-col">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
