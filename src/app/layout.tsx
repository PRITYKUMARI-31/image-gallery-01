import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Image Gallery",
  description: "any type of photo gallery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <main className="max-w-6xl mx-auto">
        {children}
        </main>
        </body>
    </html>
  );
}
