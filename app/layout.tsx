import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lingua Visual — китайский HSK 2 и английский B1+",
  description: "Визуальный интерактивный тренажёр китайского и английского языков.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="antialiased">{children}</body>
    </html>
  );
}
