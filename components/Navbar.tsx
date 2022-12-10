import { useState, useRef } from "react";
import {
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export default function Navbar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuList = useRef<HTMLUListElement>(null);

  function handleMenu() {
    isOpenMenu
      ? menuList.current?.classList.remove("opacity-100")
      : menuList.current?.classList.add("opacity-100");
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <>
      <div>
        <nav className="p-4 shadow bg-white">
          <div className="sm:container mx-auto sm:flex sm:items-center sm:justify-between">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 text-2xl font-bold text-slate-700 items-center">
                <AiOutlineShopping />
                <h1>OpenShop</h1>
              </div>
              <div onClick={() => handleMenu()} className="sm:hidden">
                {isOpenMenu ? (
                  <AiOutlineClose size="1.8rem" />
                ) : (
                  <AiOutlineMenu size="1.8rem" />
                )}
              </div>
            </div>

            <ul
              ref={menuList}
              className="sm:flex text-center sm:gap-4 sm:items-center z-1 sm:z-auto sm:static absolute bg-white w-full left-0 sm:w-auto mt-2 sm:mt-0 sm:py-0 py-4 sm:pl-0 pl-4 sm:opacity-100 opacity-0 transition-all ease-in duration-100"
            >
              <li className="my-2 sm:my-0 block">
                <a
                  href="#"
                  className="text-md hover:text-cyan-500 duration-500"
                >
                  PRODUCTS
                </a>
              </li>
              <li className="my-2 sm:my-0 block">
                <a
                  href="#"
                  className="text-md hover:text-cyan-500 duration-500"
                >
                  CART
                </a>
              </li>
              <li className="my-2 sm:my-0 block">
                <a
                  href="#"
                  className="text-md hover:text-cyan-500 duration-500"
                >
                  LOGIN
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
