import React from "react";
import Image from "next/image";

export default function SearchBar() {
  return (
    <div className="px-2 flex justify-center items-center w-3/4">
      <div className="relative w-full">
        <input
          type="text"
          className="w-full px-2 pl-4 py-1 border border-black rounded-3xl text-black"
        />
        <div className="search-icons flex absolute top-1 right-2 h-full rounded-r-3xl border-l border-black -mt-[4px]">
          <button className="w-1/2">
            <Image
              src="https://static.thenounproject.com/png/755355-200.png"
              width={20}
              height={20}
              alt="Voice Search"
              className="relative"
            />
          </button>
          <button className="w-1/2 border-l border-black">
            <Image
              src="https://cdn.vectorstock.com/i/500p/44/39/search-magnifying-glass-icon-logo-design-template-vector-30214439.jpg"
              width={30}
              height={30}
              alt="Search"
              className="relative -top-[1px] rounded-r-3xl"
            />
          </button>
        </div>
      </div>
    </div>
  );
}
