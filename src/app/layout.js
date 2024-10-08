'use client'

import { Inter } from "next/font/google";
import "./styles/global.css";
import "./styles/variables.css";
import Header from "./components/Header.jsx";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
