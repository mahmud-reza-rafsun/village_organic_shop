import { IoSearchOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { GoArrowUpRight } from "react-icons/go";
import { HiMiniBars3 } from "react-icons/hi2";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="max-w-11/12 mx-auto">
        <div className="navbar">
          <div className="navbar-start lg:w-1/2">
            <div className="flex items-center justify-center lg:mt-0 mt-1 gap-2">
              <div className="-mt-1 lg:-mt-2">
                <a className="text-2xl lg:text-xl font-bold">
                  Village Organic Shop
                </a>
              </div>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li className="">
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <details>
                  <summary>Product</summary>
                  <ul className="p-2 w-36">
                    <li>
                      <NavLink to={"/honey"}>Honey</NavLink>
                    </li>
                    <li>
                      <NavLink to={"/cream-honey"}>Cream Honey</NavLink>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="hidden lg:flex">
              <div className="flex gap-3 mr-3">
                <div className="bg-gray-100  rounded-full p-3 flex justify-center items-center">
                  <i className="">
                    <IoSearchOutline />
                  </i>
                </div>
                <div className="bg-gray-100  rounded-full p-3 flex justify-center items-center">
                  <i className="">
                    <PiShoppingCartLight />
                  </i>
                </div>
              </div>
            </div>
            <div className="hidden lg:flex">
              <a
                href=""
                className="bg-[#ABEF5F] flex gap-3 px-4 py-2 font-semibold rounded-full text-sm justify-center items-center"
              >
                Pre Order
                <div className="bg-[#1C1C1C] text-white w-7 h-7 mx-auto flex items-center justify-center rounded-full">
                  <i className="  ">
                    <GoArrowUpRight />
                  </i>
                </div>
              </a>
            </div>
            {/* dropdown */}
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <div className="px-4 py-2 text-black rounded-full">
                  <i className="fa-light text-xl rounded-full fa-bars">
                    <HiMiniBars3 />
                  </i>
                </div>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content right-0 bg-base-100 rounded-box z-[1] mt-3 w-[300px] p-2 shadow"
              >
                <li className="">
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <details>
                    <summary>Product</summary>
                    <ul className="p-2 w-36">
                      <li>
                        <NavLink to={"/honey"}>Honey</NavLink>
                      </li>
                      <li>
                        <NavLink to={"/cream-honey"}>Cream Honey</NavLink>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <NavLink to={"/about"}>About</NavLink>
                </li>
                <li>
                  <NavLink to={"/contact"}>Contact</NavLink>
                </li>
                <div className="flex gap-4 mt-2">
                  <div className="flex gap-3">
                    <div className="bg-gray-100  rounded-full px-4 py-2 flex justify-center items-center">
                      <i className="">
                        <IoSearchOutline />
                      </i>
                    </div>
                    <div className="bg-gray-100  rounded-full px-4 py-2 flex justify-center items-center">
                      <i className="">
                        <PiShoppingCartLight />
                      </i>
                    </div>
                  </div>
                  <div className="flex items-center justify-center">
                    <a
                      href=""
                      className="bg-[#ABEF5F] flex gap-3 px-4 py-2 font-semibold rounded-full text-sm justify-center items-center"
                    >
                      Pre Order
                      <div className="bg-[#1C1C1C] text-white w-7 h-7 mx-auto flex items-center justify-center rounded-full">
                        <i className="  ">
                          <GoArrowUpRight />
                        </i>
                      </div>
                    </a>
                  </div>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
