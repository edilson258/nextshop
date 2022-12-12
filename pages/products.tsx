import Navbar, { possiblePages } from "../components/Navbar";
import { mockProducts as products } from ".";
import ProductItem from "../components/ProductItem";

export default function Products() {
  return (
    <>
      <main className="select-none">
        <Navbar actualPage={possiblePages.productsPage} />
        <div className="sm:container mx-auto">
          <h3 className="px-4 mb-4 sm:px-0 mt-16 text-slate-700 font-bold text-2xl">
            Hot line
          </h3>
          <div className="px-4 mx-auto sm:px-0 sm:grid sm:grid-cols-2 sm:gap-4 md:grid-cols-3">
            {products.map((p) => (
              <ProductItem key={p.ID} product={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
