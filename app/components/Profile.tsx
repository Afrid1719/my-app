import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Profile() {
  return (
    <div>
      <div>
        <Link href="/">
          <Image
            src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
            alt="Avatar"
            width={50}
            height={50}
          />
        </Link>
      </div>
    </div>
  );
}
