import Head from "next/head";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import CartProvider from "../contexts/CartContext";
import IProduct from "../interfaces/IProduct";

export const mockProducts: IProduct[] = [
  {
    ID: "8j2j2kwkwowo",
    name: "Nike Air max",
    price: "460",
    orders: "165",
    image:
      "https://raw.githubusercontent.com/edilson258/files/main/022810ID.jpg",
  },
  {
    ID: "863h3j33i876",
    name: "Dunk High",
    price: "732",
    orders: "594",
    image:
      "https://raw.githubusercontent.com/edilson258/files/main/dunk-high-1985-shoes-rsx4JL.jpeg",
  },
  {
    ID: "9jndhu123hsj7",
    name: "Fly Easy",
    price: "548",
    orders: "293",
    image:
      "https://raw.githubusercontent.com/edilson258/files/main/go-flyease-easy-on-off-shoes-6nd2cc.jpeg",
  },
];

export default function Home() {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    setProducts(mockProducts);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>
        <Navbar />
        <div className="sm:container mx-auto">
          <div className="px-4 mx-auto mt-16 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {products.map((p) => (
              <ProductItem key={p.ID} product={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
