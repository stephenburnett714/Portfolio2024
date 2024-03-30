import Burger from "./BurgerInverse";
import logo from "../assets/Logo-Black.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center items-center bg-white p-4 justify-between fixed w-screen top-0 z-50"
      id="navbar"
    >
      
      <div className="lg:pl-32">
        <NavLink to={"/"}>
          <img className="h-10 w-16" src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">

      <div>
        <NavLink className="text-black pr-20 black-hover" to={"/"}>
            Home
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black pr-20 black-hover" to={"/about"}>
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="text-black pr-20 black-hover" to={"/work"}>
            Work
          </NavLink>
        </div>

        <div>
        <NavLink className="text-black black-hover" to={"/contact"}>
            Contact
          </NavLink>
        </div>
      </div>
      <div className="lg:hidden flex align-items-center">
      <Burger />
      </div>
    </div>
  );
}
