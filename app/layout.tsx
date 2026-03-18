import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ПАНЧ",
  description: "Креативной пространство в Красноярске",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
