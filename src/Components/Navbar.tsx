import Burger from "./Burger";
import logo from "../assets/Logo-White.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center  items-center bg-black p-4 justify-between fixed w-screen"
      id="navbar"
    >
      
      <div className="lg:pl-32">
        <NavLink to={"/"}>
          <img className="h-10 w-16" src={logo} alt="logo" />
        </NavLink>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">
        <div>
        <NavLink className="text-gray-400 pr-20 white-hover" to={"/"}>
            Home
          </NavLink>
        </div>

        <div>
          <NavLink className="text-gray-400 pr-20 white-hover" to={"/about"}>
            About
          </NavLink>
        </div>

        <div>
          <NavLink className="text-gray-400 pr-20 white-hover" to={"/work"}>
            Work
          </NavLink>
        </div>

        <div>
          <NavLink className="text-gray-400 white-hover" to={"/contact"}>
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
