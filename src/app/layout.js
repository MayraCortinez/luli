'use client'
import { Inter } from "next/font/google";
import "./styles/global.css";
import "./styles/variables.css";


const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>La Luli Restaurante de Campo</title>
        <meta name="description" content="Descubre nuestro restaurante de campo en Gorostiaga, a pocos kilómetros de Buenos Aires. Disfruta de sabores tradicionales, carnes locales y productos frescos en un entorno rural ideal para una escapada relajante." />
        <meta name="keywords" content="restaurante de campo buenos aires, comida rural, campo buenos aires, La Luli, sabores tradicionales, gorostiaga, escapada" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
