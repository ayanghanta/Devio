import Link from "next/link";

function PageNav() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/blogs">Blogs</Link>
      </li>
      <li>
        <Link href="/about">About me</Link>
      </li>
    </ul>
  );
}

export default PageNav;
