import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Resaltar Código con Syntax Highlighting usando Next.js",
  description: "Aprender a resaltar Código con Syntax Highlighting usando Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
