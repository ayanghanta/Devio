"use client";
import { PiSignOut } from "react-icons/pi";
import Button from "./buttons/Button";
import { authClient } from "@/lib/authClinet";
import { useRouter } from "next/navigation";

function Logout() {
  const router = useRouter();

  async function handleLogout() {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push("/");
        },
      },
    });
  }
  return (
    <form>
      <Button type="secondary" role="sumbit" onClick={handleLogout}>
        <PiSignOut className="text-lg" />
      </Button>
    </form>
  );
}

export default Logout;
