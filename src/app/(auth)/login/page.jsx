"use client";

import { authClient } from "@/lib/auth-client";
import { Check, Eye, EyeSlash } from "@gravity-ui/icons";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGithub, FaGoogle } from "react-icons/fa";

const LoginPage = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    console.log(res, error);

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

  const handleGoogleSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleGithubSignin = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };

  // console.log("Watched Values:", watch("email"), watch("password"));

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
        {/* <TextField
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
        </TextField> */}
        <TextField className="w-full " name="password">
          <Label>Password</Label>
          <InputGroup>
            <InputGroup.Input
              className="w-full"
              type={isVisible ? "text" : "password"}
              placeholder="Your Password"
              {...register("password")}
            />
            <InputGroup.Suffix className="pr-0">
              <Button
                isIconOnly
                aria-label={isVisible ? "Hide password" : "Show password"}
                size="sm"
                variant="ghost"
                onPress={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <Eye className="size-4" />
                ) : (
                  <EyeSlash className="size-4" />
                )}
              </Button>
            </InputGroup.Suffix>
          </InputGroup>
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
        <div>
          <h2 className="font-semibold text-xl text-center">OR</h2>
          {/* <h2 className="font-semibold text-xl text-center">Login With</h2> */}
          <div className="flex flex-col gap-5 mt-5">
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-blue-500 text-blue-500 bg-transparent"
              onClick={handleGoogleSignin}
            >
              <FaGoogle /> Login with Google
            </button>
            <button
              className="flex rounded-lg btn items-center gap-2 text-center border-black bg-transparent"
              onClick={handleGithubSignin}
            >
              <FaGithub /> Login with GitHub
            </button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default LoginPage;
