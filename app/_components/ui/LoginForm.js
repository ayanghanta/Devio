"use client";
import { useState } from "react";
import Button from "./buttons/Button";
import { signInAction } from "@/lib/actions/authAction";
import toast from "react-hot-toast";
import ButtonLoader from "./ButtonLoader";

function LoginForm() {
  const [email, setEmail] = useState("hello@gamil.com");
  const [password, setPassword] = useState("test12345688");
  const [isLoading, setIsLoading] = useState(false);

  async function handleSubmit(e) {
    setIsLoading(true);
    e.preventDefault();
    const res = await signInAction({ email, password });
    console.log(res);
    setIsLoading(false);
    // if (res.success === false) toast.error(res.message);
    if (!res.success) toast.error(res.message);
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
