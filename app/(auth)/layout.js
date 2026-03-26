import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css"
import {NextIntlClientProvider} from 'next-intl';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "LEIZEAK",
  description: "Plataforma web del grupo LEIZEAK",
};

{/* LAYOUT PARA PÁGINAS DE INICIO DE SESIÓN Y REGISTRO */}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`} >
  
        <div className="flex-1 flex">
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </div>
     
      </body>
    </html>
  );
}
