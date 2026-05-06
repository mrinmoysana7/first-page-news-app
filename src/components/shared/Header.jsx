import Image from "next/image";
import logo from "@/assets/logo.png";
import { format } from "date-fns";

const Header = () => {
  return (
    <div className="text-center space-y-5 my-8 container mx-auto">
      <Image src={logo} className="mx-auto" width={300} height={300} alt=""></Image>

      <p>Journalism Without Fear or Favour</p>
      <p>{format(new Date (), "EEEE, MMM dd, yyyy")}</p>
    </div>
  );
};

export default Header;
