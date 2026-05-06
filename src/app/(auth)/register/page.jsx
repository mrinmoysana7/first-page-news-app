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
  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    // console.log("Form Data:", data);
    // Method 1: Using destructuring to extract values from the data object
    const { name, email, password, photoUrl } = data;
    const { data: authData, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photoUrl,
      callbackURL: "/",
    });

    console.log(authData, error);

    if(error){
      alert(error.message || "An error occurred during registration.");
    } else if(authData){
      alert("Registration successful! Please check your email to verify your account.");
    }
    // Method 2: Directly accessing values from the data object
    // e.preventDefault();
    // const formData = new FormData(e.currentTarget);
    // const data = Object.fromEntries(formData.entries());
    // console.log("Form Data:", data);
    // const { data: authData, error } = await authClient.signUp.email({
    //   name: data.name,
    //   email: data.email,
    //   password: data.password,
    //   image: data.photoUrl,
    //   callbackURL: "/",
    // });
  };
  return (
    <div className="container mx-auto min-h-[70vh] flex justify-center items-center  rounded-xl">
      <Form
        className="flex w-96 flex-col gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField
          isRequired
          //   name="email"
          type="text"
          // validate={(value) => {
          //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          //     return "Please enter a valid email address";
          //   }
          //   return null;
          // }}
        >
          <Label>Name</Label>
          <Input placeholder="Your Name" {...register("name")} />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          //   name="email"
          type="text"
          // validate={(value) => {
          //   if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          //     return "Photo Url must be a valid URL";
          //   }
          //   return null;
          // }}
        >
          <Label>Photo URL</Label>
          <Input placeholder="Your Photo URL" {...register("photoUrl")} />
          <FieldError />
        </TextField>
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
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>

        <Button type="submit" className="w-full">
          <Check />
          Register
        </Button>

        {/* <div className="flex items-center gap-2">
          <p>Do Not Have An Account ? </p>{" "}
          <Link href="/register" className="text-red-600">
            Register
          </Link>
        </div> */}
      </Form>
    </div>
  );
};

export default LoginPage;
