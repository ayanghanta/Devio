import Link from "next/link";
import Logo from "./Logo";

import { barlow } from "@/app/layout";

function Header() {
  return (
    <header className={`${barlow.className}`}>
      <nav className="flex items-center justify-between p-3 font-header max-w-7xl mx-auto">
        <Logo />

        <ul className="flex gap-4 text-base font-medium sm:gap-8 sm:text-xl">
          <li>
            <Link href="/about">About me</Link>
          </li>
          <li>
            <Link href="/blogs">Blogs</Link>
          </li>
        </ul>
        <div></div>
      </nav>
    </header>
  );
}

export default Header;
