import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export const CartContext = createContext<{
  productsIds: string[];
  setProductsIds: Dispatch<SetStateAction<string[]>>;
} | null>(null);

export default function CartProvider({ children }: { children: ReactNode }) {
  const [productsIds, setProductsIds] = useState<string[]>([]);
  return (
    <CartContext.Provider value={{ productsIds, setProductsIds }}>
      {children}
    </CartContext.Provider>
  );
}
