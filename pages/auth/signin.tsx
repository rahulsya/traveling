import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../hooks";

function Signin() {
  const router = useRouter();
  const { form, handleChange } = useForm({
    initialValue: {
      username: "",
      password: "",
    },
  });
  const [error, setError] = useState<string | null>();

  const onSubmit = async () => {
    setError("");
    const res = await signIn("credentials", {
      username: form.username,
      password: form.password,
      redirect: false,
      callbackUrl: `/`,
    });

    if (res?.url) {
      router.push(res.url);
    }
    if (res?.ok == false) {
      setError("Opss, Username or password is wrong");
    }
  };

  const onSignUp = () => {
    router.push("/auth/new-user");
  };

  return (
    <div className="h-[512px] flex flex-col justify-center items-center">
      <div className="text-blue-500 font-medium text-2xl flex">
        Stay<div className="text-blue-800">cation.</div>
      </div>
      {error && (
        <div className="bg-red-300 p-4 text-white rounded-md border-red-400 border-2 my-4">
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
        title="Password"
        placeholder="password"
        type="password"
        name="password"
        value={form.password}
        onChange={(event) => {
          handleChange("password", event.target.value);
        }}
      />
      <Button title="Login" onClick={onSubmit} />
      <Button
        title="Sign Up"
        styles="bg-gray-100 text-semibold"
        onClick={onSignUp}
      />
    </div>
  );
}

export default Signin;
