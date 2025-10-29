import Link from "next/link";
import Button from "../ui/buttons/Button";
import Logout from "../ui/Logout";

function DashBorardNav() {
  return (
    <div className="my-6 flex items-center justify-center gap-x-4">
      <Logout />
      <Link
        href="/admin/config"
        className="inline-block text-gray-700 hover:underline"
      >
        Manage account
      </Link>
      <Link
        href="/admin/add"
        className="inline-block text-gray-700 hover:underline"
      >
        Add Admin
      </Link>
      <Link
        href="/admin/write"
        className="ml-auto font-header text-base font-medium sm:text-xl"
      >
        <Button type="create">&#43; Create blog</Button>
      </Link>
    </div>
  );
}

export default DashBorardNav;
