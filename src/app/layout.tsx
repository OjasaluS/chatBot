import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TestChatApp",
  description: "Created by S. Ojasalu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{height: '100%'}}>
      <body className={inter.className} style={{height: '100%', margin: '0'}}>{children}</body>
    </html>
  );
}
