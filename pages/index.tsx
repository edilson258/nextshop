import Head from "next/head";
import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

export default function Home() {
  const products = new Array(6).fill(0);

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
              <ProductItem key={p} />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
