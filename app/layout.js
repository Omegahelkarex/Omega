import { Inter } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const local = localFont({
  src: "../fonts/Rockybilly.woff2",
  variable: "--font-rocky",
  formats: ["woff2"],
});
export const metadata = {
  title: "Piyush Chatterjee - Portfolio",
  description:
    "Piyush Chatterjee's Portfolio. I am a frontend developer based in India. I love to build beautiful and performant websites.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${local.variable} dark`}>
      <head>
        <link rel="icon" href="../public/favicon.ico" />
      </head>
      <body
        className={`${inter.className} dark:text-dark-text h-[100dvh] text-light-text transition-colors duration-100 `}
      >
        <div className="flex lg:flex-row flex-col">
          <Sidebar />
          <Navbar />
          <div className="lg:ml-[240px] w-full relative dark:bg-dark-background bg-light-background transition-colors duration-100 max-lg:py-10 ">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
