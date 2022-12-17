import Head from "next/head";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

// redux
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect } from "react";
import { setProducts } from "../redux/productsSlice";
import { getProducts } from "../services/productsServices";

export default function Home() {
  const productState = useSelector((state: RootState) => state.productState);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      const products = await getProducts();
      dispatch(setProducts(products));
    })();
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="select-none">
        <Navbar />
        <div className="sm:container mx-auto">
          <div className="px-4 mx-auto mt-16 sm:px-0 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {productState.products.map((p) => (
              <ProductItem key={p.ID} product={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
