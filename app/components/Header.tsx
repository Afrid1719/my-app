import Image from "next/image";
import SearchBar from "./SearchBar";
import Profile from "./Profile";
import Menu from "./Menu";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between w-full">
      <div className="px-4 py-2 w-2/12">
        <Link href="/">
          <Image
            src="https://cdn.mos.cms.futurecdn.net/8gzcr6RpGStvZFA2qRt4v6.jpg"
            alt="Youtube"
            width={80}
            height={50}
          />
        </Link>
      </div>
      <div className="flex justify-center items-center w-7/12">
        <SearchBar />
      </div>
      <div className="flex justify-end items-center w-3/12 pr-4">
        <Profile />
        <Menu />
      </div>
    </header>
  );
}
