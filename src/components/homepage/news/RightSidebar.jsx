"use client";

import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSidebar = () => {
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

  return (
    <div>
      <h2 className="font-semibold text-xl">Login With</h2>
      <div className="flex flex-col gap-2 mt-5">
        <button
          className="flex btn items-center gap-2 text-center border-blue-500 text-blue-500 bg-transparent"
          onClick={handleGoogleSignin}
        >
          <FaGoogle /> Login with Google
        </button>
        <button
          className="flex btn items-center gap-2 text-center border-black bg-transparent"
          onClick={handleGithubSignin}
        >
          <FaGithub /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default RightSidebar;
