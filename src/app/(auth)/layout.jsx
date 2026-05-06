import Navbar from "@/components/shared/Navbar";
import { montserret } from "../layout";

const AuthLayout = ({ children }) => {
  return (
    <div className={`${montserret.className}`}>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default AuthLayout;
