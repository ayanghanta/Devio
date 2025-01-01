"use client";
import { useState } from "react";
import Button from "./buttons/Button";
import { signInCredentials } from "@/app/_lib/actions";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    signInCredentials({ email, password });
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

      <Button role="submit" type="primary">
        Login
      </Button>
    </form>
  );
}

export default LoginForm;
