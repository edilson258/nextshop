import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BsArrowLeft } from "react-icons/bs";
import IProduct from "../../interfaces/IProduct";
import { getProductBySlug } from "../../services/productsServices";
import { BsCartPlus, BsFillCartCheckFill } from "react-icons/bs";

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  return {
    props: {
      slug: context.query.slug,
    },
  };
};

function ProductPage({ slug }: { slug: string }) {
  const router = useRouter();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    (async () => {
      const product = await getProductBySlug(slug);
      setProduct(product);
    })();
  }, []);

  return (
    <main className="select-none mb-16">
      <div className="sm:container mx-auto">
        <div className="px-4 mx-auto mt-8 sm:px-0">
          <button
            onClick={() => router.back()}
            className="border p-2 w-fit py-1 flex gap-2 items-center text-slate-700 text-lg"
          >
            <BsArrowLeft />
            <span className="sm:inline hidden">Continue shopping</span>
          </button>

          <h1 className="mt-8 font-bold text-slate-700 text-4xl">
            {product?.name}
          </h1>
          <div className="mt-2 sm:flex sm:gap-8">
            <img
              className="sm:w-1/2"
              src={product?.image}
              alt={product?.name}
            />
            <div className="mt-4 py-2 sm:mt-0">
              <div className="mb-8 text-center"></div>
              <h3 className="text-xl font-bold">Colors</h3>
              <ul className="flex gap-2 mt-4">
                <li className="rounded-full bg-slate-700 text-white p-2 py-4 w-fit border border-4 border-gray-500">
                  Black
                </li>
                <li className="rounded-full p-2 py-4 w-fit border border-4 border-gray-50">
                  White
                </li>
                <li className="rounded-full bg-green-700 text-white p-2 py-4 w-fit border border-4 border-gray-50">
                  Green
                </li>
              </ul>
              <div className="mt-8">
                <h3 className="text-xl font-bold">Size</h3>
                <div className="mt-4 grid grid-cols-5 gap-2">
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    10
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    16
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    20
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100 bg-slate-700 text-white">
                    34
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    36
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    40
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    41
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    44
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    45
                  </div>
                  <div className="w-fit p-4 rounded border border-2 border-gray-100">
                    46
                  </div>
                </div>
                <div className="mt-8 flex gap-4 items-center">
                  <button className="w-2/5 px-4 py-2 border border-slate-500 rounded flex items-center gap-2 sm:text-center sm:justify-center">
                    <span className="sm:hidden">Add to cart</span>
                    <BsCartPlus className="sm:text-center hidden sm:inline text-xl" />
                  </button>
                  <button className="w-3/5 px-4 py-2 bg-slate-700 text-white rounded">
                    Order now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
