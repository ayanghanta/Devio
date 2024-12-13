import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div>
      <Link href="/">
        <Image
          width={2000}
          height={585}
          src="/logo.png"
          alt="logo of devio blog website"
          className="w-[72px] sm:w-32"
        />
      </Link>
    </div>
  );
}

export default Logo;
