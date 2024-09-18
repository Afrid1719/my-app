import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <button>
      <Image
        src="https://www.svgrepo.com/show/315749/menu-grid-o.svg"
        alt="Menu"
        width={40}
        height={40}
      />
    </button>
  );
}
