import React from "react";
import { signIn } from "next-auth/react";

import Input from "../../components/Input";
import Button from "../../components/Button";
import { useForm } from "../../hooks";

function Signin() {
  const { form, handleChange } = useForm({
    initialValue: {
      username: "",
      password: "",
    },
  });

  return (
    <div className="flex flex-col justify-center items-center bg-gray-100">
      <Input
        title="Username"
        placeholder="username"
        name="username"
        value={form.username}
      />
      <Input
        title="Password"
        placeholder="password"
        type="password"
        name="password"
        value={form.password}
      />
      <Button title="Login" />
    </div>
  );
}

export default Signin;
