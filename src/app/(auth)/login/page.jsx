"use client";

import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
      callbackURL: "/",
    });

    console.log(res, error)

    if (error) {
      alert(error.message || "An error occurred during login.");
    } else if (res) {
      alert("Login successful! You are now logged in.");
    }
    // console.log("Form Data:", data);
    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    // console.log("Form Data:", data);
  };

  console.log("Watched Values:", watch("email"), watch("password"));

  return (
    <div className="container mx-auto min-h-[70vh] flex justify-center items-center  rounded-xl">
      <Form
        className="flex w-96 flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          isRequired
          //   name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email</Label>
          <Input placeholder="Your Email" {...register("email")} />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          //   name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <Input placeholder="Enter your password" {...register("password")} />
          {errors.password && <p>{errors.password.message}</p>}
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button type="submit" className="w-full">
          <Check />
          Login
        </Button>

        <div className="flex items-center gap-2">
          <p>Do Not Have An Account ? </p>{" "}
          <Link href="/register" className="text-red-600">
            Register
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
