import type { Metadata } from "next";
import "./globals.css";
import "./main-section.css";
import Navbar from "@/components/server/Navbar/navbar";
import { Footer } from "@/components/client/Footer/footer";
import Head from "next/head";


export const metadata: Metadata = {
  title: "Sova Furnitire",
  description: "Most comfy sofa in the world",
  // icons: {
  //   other: {
  //     rel: "stylesheet",
  //     url: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
  //   }
  // }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
      </Head>
      <body
        className={`antialiased`}
      >
        
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
