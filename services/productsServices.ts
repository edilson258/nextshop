import axios from "axios";
import IProduct from "../interfaces/IProduct";

export async function getProducts(): Promise<IProduct[]> {
  let response = await axios.get<IProduct[]>(
    "https://raw.githubusercontent.com/edilson258/files/main/mockProducts.json"
  );
  return response.data;
}

export async function getProductBySlug(slug: string): Promise<IProduct | null> {
  const products = await getProducts();
  const product = products.find((product) => product.slug === slug);
  return product || null;
}
