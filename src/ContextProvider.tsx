import { ReactNode, createContext, useEffect, useState } from "react";
import { Cart, Product, TContext } from "./declarations";

export const AppContext = createContext<TContext>({
  cart: [],
  paid: false,
  products: null,
  addToCart: () => {},
  removeFromCart: () => {},
  pay: () => {},
  done: () => {},
  getProductQuantity: () => 0,
  loading: false,
  error: "",
});

interface Props {
  children: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [cart, setCart] = useState<TContext["cart"]>([]);
  const [paid, setPaid] = useState<TContext["paid"]>(false);
  const [products, setProducts] = useState<TContext["products"]>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const addToCart = (newProduct: Product) => {
    const found = cart.find((el) => el.product === newProduct);
    if (!!found) {
      const newCart = cart.map((el) => {
        if (el.product !== newProduct) return el;
        return { product: el.product, quantity: el.quantity + 1 };
      });
      setCart(newCart);
    } else {
      setCart([...cart, { product: newProduct, quantity: 1 }]);
    }
  };

  const removeFromCart = (productToRemove: Product) => {
    const newCart = cart.reduce((acc, el) => {
      if (el.product === productToRemove) {
        if (el.quantity > 1) {
          acc.push({ product: el.product, quantity: el.quantity - 1 });
          return acc;
        }
        return acc;
      } else {
        acc.push(el);
        return acc;
      }
    }, [] as Cart);
    setCart(newCart);
  };

  const pay = () => {
    setPaid(true);
    setCart([]);
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://mockend.up.railway.app/api/products"
      );
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
      setLoading(false);
    }
  };

  const done = () => {
    setPaid(false);
  };

  const getProductQuantity = (idProduct: Product["id"]) => {
    return 0;
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <AppContext.Provider
      value={{
        cart,
        paid,
        products,
        addToCart,
        removeFromCart,
        getProductQuantity,
        pay,
        loading,
        error,
        done,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
