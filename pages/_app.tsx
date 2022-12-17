import "../styles/globals.css";
import type { AppProps } from "next/app";
import CartProvider from "../contexts/CartContext";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </Provider>
  );
}

export default MyApp;
