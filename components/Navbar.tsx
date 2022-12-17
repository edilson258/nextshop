import { useRouter } from "next/router";
import { useState, useRef } from "react";
import {
  AiOutlineShopping,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

export enum possiblePages {
  homePage,
  productsPage,
  cartPage,
}

export default function Navbar({ actualPage }: { actualPage?: possiblePages }) {
  const router = useRouter();
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const menuList = useRef<HTMLUListElement>(null);

  function handleMenu() {
    isOpenMenu
      ? menuList.current?.classList.add("hidden")
      : menuList.current?.classList.remove("hidden");
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <div>
      <nav className="p-4 shadow bg-white">
        <div className="sm:container mx-auto sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-between items-center">
            <div className="flex gap-2 text-2xl font-bold text-slate-700 items-center">
              <AiOutlineShopping />
              <h1 onClick={() => router.push("/")}>OpenShop</h1>
            </div>
            <div onClick={handleMenu} className="sm:hidden">
              {isOpenMenu ? (
                <AiOutlineClose size="1.8rem" />
              ) : (
                <AiOutlineMenu size="1.8rem" />
              )}
            </div>
          </div>

          <ul
            ref={menuList}
            className="select-none sm:flex text-center sm:gap-4 sm:items-center z-1 sm:z-auto sm:static absolute bg-white w-full left-0 sm:w-auto mt-2 sm:mt-0 sm:py-0 py-4 sm:pl-0 pl-4 sm:opacity-100 hidden transition-all ease-in duration-100"
          >
            <li
              onClick={() => router.push("/products")}
              className="my-2 sm:my-0 block"
            >
              <p
                className={
                  actualPage === possiblePages.productsPage
                    ? "text-md text-sky-500 font-bold duration-500"
                    : "text-md hover:text-sky-500 hover:font-bold duration-500"
                }
              >
                PRODUCTS
              </p>
            </li>
            <li
              onClick={() => router.push("/cart")}
              className="my-2 sm:my-0 block"
            >
              <p
                className={
                  actualPage === possiblePages.cartPage
                    ? "text-md text-sky-500 font-bold duration-500"
                    : "text-md hover:text-sky-500 hover:font-bold duration-500"
                }
              >
                CART
              </p>
            </li>
            <li className="my-2 sm:my-0 block">
              <a
                href="#"
                className="text-md hover:text-sky-500 hover:font-bold duration-500"
              >
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
