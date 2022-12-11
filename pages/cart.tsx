import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { BsArrowLeft } from "react-icons/bs";
import { mockProducts } from ".";
import { CartContext } from "../contexts/CartContext";
import IProduct from "../interfaces/IProduct";

function ShopTotalInfo() {
  const router = useRouter();
  return (
    <div className="p-2 mx-auto shadow shadow-lg">
      <div className="flex items-center justify-between">
        <button
          onClick={() => router.back()}
          className="border p-2 w-fit py-1 flex gap-2 items-center text-slate-700 font-bold text-lg"
        >
          <BsArrowLeft />
          <span className="sm:inline hidden">Continue shopping</span>
        </button>
        <button className="p-2 w-fit py-1 flex gap-2 items-center text-white bg-green-500 font-bold text-xl">
          Checkout
        </button>
      </div>
      <div className="mt-8 border-t-2">
        <div className="flex flex-col text-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full">
                  <thead className="border-b">
                    <tr>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Items
                      </th>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Total Price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="">
                      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        15
                      </td>
                      <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        658.00
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ShoppedProductsList() {
  const [shoppedProducts, setShoppedProducts] = useState<IProduct[]>([]);
  const cartContext = useContext(CartContext);

  useEffect(() => {
    const newShoppedProducts = mockProducts.filter((product) =>
      cartContext?.productsIds.includes(product.ID)
    );
    setShoppedProducts(newShoppedProducts);
  }, []);

  return (
    <div className="p-2 mx-auto shadow shadow-lg">
      <div className="mt-8">
        <div className="flex flex-col text-center">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                <table className="min-w-full table-auto">
                  <thead className="border-b-2">
                    <tr>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      ></th>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Quantity
                      </th>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Unit price
                      </th>
                      <th
                        scope="col"
                        className="text-md text-center font-medium text-gray-900 px-6 py-4 text-left"
                      >
                        Total price
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {shoppedProducts.map((product) => (
                      <tr className="border-b">
                        <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <img
                            src={product.image}
                            className="object-cover w-16 h-16"
                          />
                        </td>
                        <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.name}
                        </td>
                        <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          <div className="flex gap-2 items-center text-slate-700">
                            <AiFillMinusCircle className="text-2xl" />
                            {1}
                            <AiFillPlusCircle className="text-2xl" />
                          </div>
                        </td>
                        <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                        <td className="text-md text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {product.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div className="sm:container mx-auto p-4 mt-8">
      <ShopTotalInfo />
      <ShoppedProductsList />
    </div>
  );
}
