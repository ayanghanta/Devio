"use client";
import { useState } from "react";
import Button from "./buttons/Button";
import { signInAction, signUpAction } from "@/app/_lib/actions/authAction";
import toast from "react-hot-toast";
import ButtonLoader from "./ButtonLoader";
import { useRouter } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const res = await signInAction({ email, password });
    // const res = await signUpAction({ email, password });
    setIsLoading(false);

    if (!res.success) return toast.error(res.message);
    router.push("/dashboard");
  }
  return (
    <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Enter email"
        required
        className="bg-gray-50 px-3 py-2"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        name="password"
        id="password"
        required
        placeholder="Enter password"
        className="bg-gray-50 px-3 py-2"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <Button role="submit" type="primary" disabled={isLoading}>
        {isLoading ? <ButtonLoader /> : "Login"}
      </Button>
    </form>
  );
}

export default LoginForm;
