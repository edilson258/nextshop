import { useContext, useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";
import { CartContext } from "../contexts/CartContext";
import IProduct from "../interfaces/IProduct";

export default function ProductItem({ product }: { product: IProduct }) {
  const [isProductInCart, setIsProductInCart] = useState(false);
  const cartProductsContext = useContext(CartContext);

  useEffect(() => {
    if (cartProductsContext?.productsIds.includes(product.ID)) {
      setIsProductInCart(true);
    }
  }, []);

  function handleCartProduct(productID: string) {
    if (cartProductsContext?.productsIds.includes(productID)) {
      const newProductsIds = cartProductsContext.productsIds.filter(
        (id) => id !== productID
      );
      cartProductsContext.setProductsIds(newProductsIds);
      setIsProductInCart(false);
      return;
    }
    if (cartProductsContext?.productsIds) {
      const newProductsIds = [...cartProductsContext.productsIds, productID];
      cartProductsContext?.setProductsIds(newProductsIds);
      setIsProductInCart(true);
    } // else: create new context state
  }

  return (
    <div className="p-2 rounded shadow mb-4 bg-gray-100">
      <img
        className="object-cover w-64 h-64 mx-auto sm:w-48 sm:h-48"
        src={product.image}
      />
      <div className="flex justify-between items-center">
        <p className="text-2xl font-bold mt-2">{product.name}</p>
        <div className="text-xs">
          <div>
            <p>{product.orders} orders</p>
          </div>
          <div className="flex items-center">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 border-t mt-2 py-2">
        <div className="flex gap-2">
          <button className="px-2 py-1 border border-slate-700 bg-slate-700 text-white rounded">
            Order now
          </button>
          <button
            onClick={() => handleCartProduct(product.ID)}
            className="text-slate-700 px-2 py-1 border border-slate-700 rounded"
          >
            {isProductInCart ? <BsFillCartCheckFill /> : <BsCartPlus />}
          </button>
        </div>
        <div>
          <span className="text-lg font-bold">${product.price}.00</span>
        </div>
      </div>
    </div>
  );
}
