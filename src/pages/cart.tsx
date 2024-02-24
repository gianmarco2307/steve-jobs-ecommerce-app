import { AppContext } from "@/ContextProvider";
import CartList from "@/components/CartList";
import { useContext } from "react";

export default function Cart() {
  return (
    <>
      <h1>Cart</h1>
      <CartList />
    </>
  );
}
