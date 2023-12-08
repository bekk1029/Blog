import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "../components/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-full h-fit  bg-white m-auto flex justify-center">
          <div className="flex flex-col w-4/5 my-5 ">
            <Navbar />
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
