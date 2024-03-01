"use client";
import Head from "next/head";
import { Carousel } from "./carousel";
import { Trending } from "./Trend";
import { useEffect, useState, useContext, createContext } from "react";
import { BlogPosts } from "./BlogPost";
export const DataContext = createContext();
export default function Content() {
  return (
    <DataContext.Provider value={{}}>
      <div className="flex flex-col bg-white max-w-[1216px] m-auto gap-[100px]">
        <Carousel />
        <Trending />
        <BlogPosts />
      </div>
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);
