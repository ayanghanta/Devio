import Link from "next/link";

function Footer() {
  return (
    <>
      <footer className="mt-16 border-t border-gray-200 bg-gray-800 px-3 pb-6 pt-12 text-center">
        <p className="text-sm text-gray-500">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" className="font-semibold text-gray-300">
            Devio
          </Link>
          — All rights reserved.
        </p>
      </footer>
    </>
  );
}

export default Footer;
