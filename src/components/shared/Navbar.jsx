import { Button, Link } from "@heroui/react";
import Image from "next/image";
import avatar from "@/assets/user.png";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav className="flex bg-white items-center justify-between p-5 shadow-xl sticky top-0 z-40 container mx-auto mt-10">
      <div></div>
      <div className="flex items-center justify-center">
        {/* // * Method 2 and easy way for apply dynamic style */}
        <ul className="flex items-center ml-42 gap-4">
          <li>
            <NavLink className="text-orange-500 text-xl" href="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className="text-blue-600 text-xl" href="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink className="text-green-500 text-xl" href="/career">
              Career
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex items-center gap-2">
        <Image src={avatar} width={40} height={40} alt=""></Image>
        <Link href={"/login"}>
          <Button className="bg-[#403F3F] px-10 rounded-sm ">Login</Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

// * Method 2 and easy way for apply dynamic style

{
  /* <ul className="flex items-center gap-4">
  <li>
    <Link
      className={pathName === "/" ? "text-orange-500 font-semibold" : ""}
      href="/"
    >
      Home
    </Link>
  </li>
  <li>
    <Link
      className={pathName === "/about" ? "text-orange-500 font-semibold" : ""}
      href="/about"
    >
      About
    </Link>
  </li>
  <li>
    <Link
      className={pathName === "/career" ? "text-orange-500 font-semibold" : ""}
      href="/career"
    >
      Career
    </Link>
  </li>
</ul>; */
}
