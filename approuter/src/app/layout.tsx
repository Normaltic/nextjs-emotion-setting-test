import { NextAppDirEmotionCacheProvider } from "tss-react/next/appDir";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "App router with emotion",
  description: "App router with emotion"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body>
        <NextAppDirEmotionCacheProvider options={{ key: "css" }}>
          {children}
        </NextAppDirEmotionCacheProvider>
      </body>
    </html>
  );
}
