"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/Header&Footer/Footer";
import { createContext, useContext, useState } from "react";
import { Navbar } from "@/components/Header&Footer/navbar";
const inter = Inter({ subsets: ["latin"] });

export const SearchContext = createContext();

export default function RootLayout({ children }) {
  const [search, setSearch] = useState("");
  const [hide, setHide] = useState(true);
  const hideMenu = () => {};
  return (
    <html lang="en">
      <head>
        <title>BlogPost</title>
      </head>
      <body className={`${inter.className} m-auto flex flex-col`}>
        <SearchContext.Provider value={{ search, setSearch, hide, setHide }}>
          <Navbar />
          {children}
          <Footer />
        </SearchContext.Provider>
      </body>
    </html>
  );
}
export const useSearch = () => useContext(SearchContext);
