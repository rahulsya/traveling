import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../hooks";
function NewUser() {
  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { form, handleChange } = useForm({
    initialValue: {
      username: "",
      email: "",
      password: "",
    },
  });

  const onSignUp = async () => {
    setError(null);
    setLoading(true);
    const createAccount = await fetch(`/api/auth/signup`, {
      method: "POST",
      body: JSON.stringify(form),
      headers: { "Content-Type": "application/json" },
    });
    const response = await createAccount.json();
    setLoading(false);
    if (response?.error) {
      setError(`Opps, ${response?.error}` || "Opps, Somethings error");
      return;
    }

    setSuccess("User created successfully");
  };

  return (
    <div className="h-[512px] flex flex-col justify-center items-center">
      <div className="text-blue-500 font-medium text-2xl flex mb-4">
        Sign Up - (Stay<div className="text-blue-800">cation.)</div>
      </div>
      {success && (
        <div className="bg-green-300 px-4 py-2 text-white rounded-md border-green-400 border-2 mb-4">
          {success}
        </div>
      )}
      {error && (
        <div className="bg-red-300 px-4 py-2 text-white rounded-md border-red-400 border-2 mb-4">
          {error}
        </div>
      )}
      <Input
        title="Username"
        placeholder="username"
        name="username"
        value={form.username}
        onChange={(event) => {
          handleChange("username", event.target.value);
        }}
      />
      <Input
        title="Email"
        placeholder="email"
        name="email"
        type="email"
        value={form.email}
        onChange={(event) => {
          handleChange("email", event.target.value);
        }}
      />
      <Input
        title="Password"
        placeholder="password"
        type="password"
        name="password"
        value={form.password}
        onChange={(event) => {
          handleChange("password", event.target.value);
        }}
      />
      <Button
        title={loading ? "Loading..." : "Sign Up"}
        styles="bg-gray-100 text-semibold"
        onClick={onSignUp}
        disable={loading}
      />

      <Button title="Login" onClick={() => router.push("/auth/signin")} />
    </div>
  );
}

export default NewUser;
