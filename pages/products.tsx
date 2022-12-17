import Navbar, { possiblePages } from "../components/Navbar";
import ProductItem from "../components/ProductItem";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { setProducts } from "../redux/productsSlice";
import { getProducts } from "../services/productsServices";
import { RootState } from "../redux/store";

export default function Products() {
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
      <main className="select-none">
        <Navbar actualPage={possiblePages.productsPage} />
        <div className="sm:container mx-auto">
          <h3 className="px-4 mb-4 sm:px-0 mt-16 text-slate-700 font-bold text-2xl">
            Hot line
          </h3>
          <div className="px-4 mx-auto sm:px-0 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {productState.products.map((p) => (
              <ProductItem key={p.ID} product={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
