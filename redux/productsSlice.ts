import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IProduct from "../interfaces/IProduct";

interface ProductState {
  products: IProduct[];
  product: IProduct | null;
}

var initialState: ProductState = {
  products: [],
  product: null,
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state: ProductState, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;
